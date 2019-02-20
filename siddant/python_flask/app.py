from flask import Flask, jsonify


app = Flask(__name__) #file name main


@app.route('/')
def home():
    return jsonify({'message':'Hello World!'}), 200
