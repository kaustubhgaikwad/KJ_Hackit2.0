# KJ_Hackit2.0
Crops selling portal for farmers using blockchain

## Instructions:
1. ## To be installed
		Mongo
		React
		Truffle 
		Ganache
		Add metamask extension
2. Setup Instructions:
	1. Setting up the flask server:
		* In the Flask directory run the command to install all dependency
		```python 
		python -m pip install -r requirements.txt
		```
		* After installing any dependency using pip install update the requirements.txt using 
		* ```python 
			python -m pip freeze > dependencies.txt
			```
		* add mongo to youe environment variables 
		* open cmd and type mongod and keep it running dont close it (So that you can use mongo db)
		* to import the database files in the MongoDatabase directory use the command
		* mongoimport --db flask_db --collection collection_name --file file_path
		* collection_name is the name of the collection
			* buyers,contracts,sellers,users
		* file_path is location of the json file ..\MongoDatabase\user.json
		* run this command for every collection
		* start the server using
		*	```python 
			python main.py
			```
	2. Setting up blockchain
		* open ganache and click quickstart 
		* After adding metamask extension connect the metamask to the localhost network the same network as mentioned under RPC netowrk in ganache
		* In the React directory update the truffle-config.js file to match the network settings as that of metamask and ganache
		* Depoly the smart contract using
			* truffle migrate (When deploying the contract for the first time)
			* turffle migrate --reset (After making certain changes in the smart contract i.e Deals.sol file)
	3. React
		* In the react directory run the command
			npm install
		* If you want to install any dependency using npm install any_dependency use npm install --save any_dependency
		* start the react server using
		* npm run start  

