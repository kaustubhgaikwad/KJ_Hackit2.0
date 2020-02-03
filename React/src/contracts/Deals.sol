pragma solidity >=0.4.21 <0.6.0;

contract Deals{

    uint public transaction_count=0;

    uint public user_count=3;

    string public name;

    constructor()public{
        name="hello";
    }

    mapping(uint => transaction)public transactions;
    //mapping(uint => user) public user_balance;
    mapping(string =>uint) public user_balance;

   

    struct transaction{
        uint id;
        string farmer_name;
        string consumer_name;
        string product;
        uint quantity;
        uint price;
        //address payable farmer_address;
        //address consumer_address;
    }
    

    event transaction_committed(
        uint id,
        string farmer_name,
        string consumer_name,
        string product,
        uint quantity,
        uint price
        //address payable farmer_address,
        //address consumer_address
        );


    function add_transaction(
        string memory _farmer_name,
        string  memory _consumer_name,
        string memory _product,
        uint  _quantity,
        uint  _price
        //address payable _farmer_address
        )public {

        //if(user_balance[_consumer_name]<_price)return;
        //require(user_balance[_consumer_name]<_price,"LOW BALANCE");
        //Incremet the transactionCount
        transaction_count++;

        //balances_count++;

        transactions[transaction_count]=transaction(transaction_count,
                                                    _farmer_name,
                                                    _consumer_name,
                                                    _product,
                                                    _quantity,
                                                    _price
                                                    //_farmer_address,
                                                    //msg.sender
                                                    );

        //address(_farmer_address).transfer(msg.value);

        emit transaction_committed(transaction_count,
                                                    _farmer_name,
                                                    _consumer_name,
                                                    _product,
                                                    _quantity,
                                                    _price
                                                    );

        user_balance[_farmer_name]+=_price;
        user_balance[_consumer_name]-=_price;

        // int farmer_flag=0;
        // int consumer_flag=0;
        // for(uint i=0;i<user_count;i++)
        // {
        //     if(!farmer_flag && user_balance[i].user_name == _farmer_name){
        //         user_balance[i].bal+=_price;
        //         farmer_flag=1;
        //     }
        //     if(!consumer_flag && user_balance[i].user_name == _consumer_name){
        //         user_balance[i].bal-=price;
        //         consumer_flag=1;
        //     }
        // }
        // if(!consumer_flag || !farmer_flag)
        // user_count++;

        // if(!consumer_flag)
        // {
        //     user_balance[user_count]=user(user_count,_consumer_name,-_price);
        // }
        // if(!farmer_flag)
        // {
        //     user_balance[user_count]=user(user_count,_farmer_name,_price);
        // }


    }




}