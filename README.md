
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
3. Connect the wire from the signal to pin 16 on both Pis. 



