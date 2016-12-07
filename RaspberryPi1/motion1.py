import time
import RPi.GPIO as GPIO
import requests
import json

count = 0
distance1_low = 500

GPIO.setmode(GPIO.BOARD)
while (True):
	
	#if motion sensor should be used
	GPIO.setup(12, GPIO.OUT)

	#cleanup output
	GPIO.output(12, 0)

	time.sleep(0.000002)

	#send signal
	GPIO.output(12, 1)

	time.sleep(0.000005)

	GPIO.output(12, 0)

	GPIO.setup(12, GPIO.IN)

	while GPIO.input(12)==0:
		5
	starttime=time.time()

	while GPIO.input(12)==1:
		5
	endtime=time.time()
	duration=endtime-starttime
	distance1=duration*34000/2
	print "sensor 1: " + str(distance1)
	
	if count > 100:
		if distance1 < distance1_low - 5:
			print "walked in front of"
			now = time.time()
			mytime = json.dumps({"time": now})
			r = requests.put("http://129.65.221.205:5005/1", data=mytime)
			time.sleep(.5)
				
	else:
		count += 1
		print "count: " + str(count)
		distance1_low = min(distance1_low, distance1)
		time.sleep(.1)
