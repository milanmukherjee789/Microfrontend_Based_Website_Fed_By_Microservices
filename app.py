from flask import Flask, request, jsonify
from flask_cors import CORS
import mongo
import pdf

app = Flask(__name__)
CORS(app, origins='http://localhost:3002')  
@app.route('/')
def index():
    return 'Hello, this is the homepage!'

@app.route('/about')
def about():
    return 'This is the about page.'



@app.route('/post/submit', methods=['POST'])
def submit():
    data = request.json
    filename = pdf.json_to_pdf(data,data['username']+"_"+data['student_name'])
    
    return jsonify({"message": filename})

@app.route('/contact')
def contact():
    return 'Contact us at contact@example.com.'

@app.route('/post/style', methods=['POST'])
def receive_data():
    global my_dict
    data = request.json
    query = {'User-Div':data['User-Div']}
    if mongo.query_data(query) == None:
        mongo.insert_data(data)       
    else:
        mongo.update_data(query,{'$set': data})
       
        
    return jsonify({"message": "Data received successfully!"})

@app.route('/get/style', methods=['GET'])
def send_data():
    query = {'User-Div':request.headers.get('User-Div')}
    print("query:",query)
    data = mongo.query_data(query)
    if data != None:
        data = data['style']
    else:
        data = {}
    print("send data:", data)
    return data

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if (username == 'user' or username == 'user1' or username == 'user2') and password == 'pass':
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"error": "Invalid username or password"}), 401



if __name__ == '__main__':
    app.run()
