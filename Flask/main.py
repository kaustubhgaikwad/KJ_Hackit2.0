from flask import Flask,render_template,jsonify,request,redirect,url_for,flash,make_response
from flask_cors import CORS

from bson import ObjectId
from functools import wraps
import os  
from flask_pymongo import PyMongo
from pymongo import MongoClient

app=Flask("__main__")
app.secret_key = 'this_is_a_secret'
CORS(app)
#app.config['MONGO_DBNAME']='flask_db'

#app.config['MONGO_URI']='mongodb://localhost:27017/flask_db'

client = MongoClient("mongodb://127.0.0.1:27017") #host uri  
db = client.Hackit    #Select the database  
buyer_db = db.buyers #Select the collection name
seller_db = db.sellers #Select the collection name 
user_data=db.user 

Session={}

def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in Session:
            return f(*args, **kwargs)
        else:
            flash('UNAUTHORIZED! Login required')
            return redirect(url_for('login'))
    return wrap




#mongo=PyMongo(app)

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':    
        username = request.json['username']
        password = request.json['password']
        print(username)
        db_users=user_data.find()
        for user in db_users:
            print("in")
            print (user['username'])
            if username == user['username']:
                if password == user['password']:
                    Session['username'] = username
                    Session['logged_in'] = True
                    return jsonify({'msg':'success'})
        
        return jsonify({'msg':'failure'})

@app.route('/register',methods=['GET','POST'])
def register():
    username = request.json['username']
    password = request.json['password']
    db_users = user_data.find()
    for user in user_data.find():
        if username == user['username']:
            return jsonify({'msg':'username exits'})
        else:
            user_data.insert({'username':username, 'password':password})
            return jsonify({'msg':'success'})

# @app.route('/login', methods=['GET']) #accepts username and password paramenters
# def getCredentials():
#     username = request.args['username']
#     password = request.args['password']

#     return 'username ' + username + " password: " + password;


@app.route('/proposalsAll/buyer',methods=['GET','POST'])
def buyer_product_list():
    buy=buyer_db.find()
    #print(typeof(buy))
    sell=seller_db.find()
    print("buy=")
    print(buy)
    #print("sell=")
    #print(sell)
    buyer_list=[]
    #seller_list=[]
    for buyer in buy:
        print("1")
        buyer_list.append({'product' : buyer['product'], 'rate' : buyer['rate'],'quantity':buyer['quantity'],'seller':buyer['name']})
    buy=buyer_list
    return jsonify(buy)

@app.route('/proposalsAll/seller',methods=['GET','POST'])
def seller_product_list():
    buy=buyer_db.find()
    sell=seller_db.find()
    #print("buy=")
    #print(buy)
    print("sell=")
    print(sell)
    #buyer_list=[]
    seller_list=[]
    for seller in sell:
        #print("1")
        seller_list.append({'product' : seller['product'], 'rate' : seller['rate'],'quantity':seller['quantity'],'seller':seller['name']})
    return jsonify({sell})


# @app.route('/add_movie',methods=['POST'])
# def add_movie():
#     title=request.json["title"]
#     rating=request.json["rating"]
#     movie_db.insert({ "title":title, "rating":rating})
#     return 'Done',201

# @app.route('/movies')
# def movies():
#     movies=movie_db.find()
#     movies_list=[]
#     for movie in movies:
#         movies_list.append({'title' : movie['title'], 'rating' : movie['rating']})
#     return jsonify({'movies ': movies_list})

@app.route('/logout')
@login_required
def logout():
    Session.pop('logged_in')
    Session.pop('username')
    return jsonify({"msg":'logout'})

if __name__=="__main__":
    app.run(debug=True)

