from pymongo import MongoClient
client = MongoClient('localhost', 27017)

db = client['microfrontend']

collection = db['user_div_style']

def insert_data(data):
    collection.insert_one(data)

def query_data(query):
    result = collection.find_one(query)
    return result

def update_data(query,data):
    collection.update_one(query, data)

def delete_data(data):
    collection.delete_one(data)

