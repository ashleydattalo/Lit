
Supplies needed for project:
	-Two Raspberry Pis
	-Two Ultrasonic Sensors
	-One Phillips Hue Lightbulb
	-One Phillips Hue Bridge

Steps:
Get the Phillips Hue Lightbulb set up:
1. Place lightbulb in lamp.
	a. Test lightbulb by turning lamp on/off. If the lightbulb does not turn on, it is broken.
2. Plug the Bridge into outlet, and connect it to the router using an ethernet cord. 
3. Follow the instructions on https://www.developers.meethue.com/documentation/getting-started to get the Bridge connected to the light bulb. 

Get the Website to work with your bridge and lightbulb. 
1. After following the instructions on the website listed above, you should have the IP address and username for your bridge.
2. Inside index.js, there should be two variables called ipAddress, and id. Change these variables to the IP Address and username for your bridge. 
3. On the terminal, run 'python app.py'.
4. When doing this, it should give you a URL. Enter this URL into your website and begin turning your light ON/OFF.


Connect Sensors to the Pis:
1. Connect each sensor to a Raspberry Pi.
2. Connect the ground and voltage pins to the correct locations on the Pi.
3. Connect the wire from the signal pin to pin 12 on both Pis. 

Set up Sensor and Pi Code:
1. One Pi will be running the code from the RaspberryPi1 folder, and the other Pi will run the code from the RaspberryPi2 folder. 
2. In the RaspberryPi1 folder, open motion1.py. Change the IP address on line 45 to be the IP address of the Pi that will run RaspberryPi1's code.
3. In the RaspberryPi1 folder, in server.py, change the IP address in line 9 to be the IP address of the bridge (discovered in previous steps).
4. Determine the IP address of the computer running the website code. Replace the IP address on line 58 of server.py with that IP address.
5. Follow step 2 for the motion2.py in the RaspberryPi2 folder (on the second Pi).

Running the Code:
1. Start server.py first. Then, start motion1.py and motion2.py (on their respective Pis). Allow ~20 seconds for the Pis to calibrate distances (stand away from them).
2. Once finished calibrating, the light will turn on if a user walks in front of the Pi running motion1.py before motion2.py, and turn off if the reverse is true. 

