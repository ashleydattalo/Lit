import logging
from flask import Flask, render_template, json, request

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')


@app.route('/index',methods=['GET'])
def signUp():
    #_name = request.form['/']
    logging.info('hello')

if __name__ == "__main__":
    app.run(port=5002)
