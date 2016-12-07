data = 'true'

import logging
from flask import Flask, render_template, json, request

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/test', methods=['GET'])
def test1():
	return 'on'

# @app.route('/sensorStatus', methods=['POST'])

@app.route('/sensorStatus', methods=['PUT'])
def parseRequest():
	# logging.info(request.get_data())
	global data
	data = request.get_data()
	logging.info(data)
	return data

@app.route('/sensorStatus', methods=['GET'])
def sensorStatus():
	global data
	# res = Flask.make_response(app, data)
	return data

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002)