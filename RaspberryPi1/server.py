from flask import Flask, request
app = Flask(__name__)
import requests
from requests import exceptions
import json
import ast
from threading import Thread

url = "http://129.65.221.203/api/353ae7b31ae3fa0e173e08fe46cf7456/lights/1/state"

time1 = None
time2 = None

@app.route('/1', methods=['PUT'])
def set_first():
	global time1
	#print request.data
	#print request.form.items()
	#print request.get_json()
	time1 = ast.literal_eval(request.data)["time"]
	#print time1
	return 'OK'

@app.route('/2', methods=['PUT'])
def set_second():
	global time2
	#print request.data
	#print request.form.items()
	#print request.get_json()
	time2 = ast.literal_eval(request.data)["time"]
	#print time2
	return 'OK'

@app.route('/test', methods=['GET'])
def testing():
	return "test!!"

def turn_on():
	print "turning on"
	on = json.dumps({"on": True})
	r = requests.put(url, data=on)
	print r.status_code
	print r.content

def turn_off():
	print "turning off"
	off = json.dumps({"on": False})
	r = requests.put(url, data=off)
	print r.status_code
	print r.content

def send_item():
	global time1
	global time2
	while (True):
		#print "getting request"
		try:
			req = requests.get("http://129.65.221.202:5002/sensorStatus")
		#print req.content
			status = req.content
		except requests.ConnectionError:
			status = "true"
		#status = ast.literal_eval(req.content)["sensorStatus"]
		if status != "false":
			#print "while"
			print "time1: " + str(time1) + " time2: " + str(time2)
			if (time1 != None and time2 != None):
				print "someone walked!"

				if time1 < time2:
					turn_on()
				else:
					turn_off()
				time1 = None
				time2 = None

if __name__ == "__main__":
	thread = Thread(target=send_item)
	thread.start()
	app.run(host="0.0.0.0", port=5005)
	thread.join()

	