import React, { Component } from "react";
import { Link } from "react-router-dom";
import Deals from '../abis/Deals.json';
import Web3 from 'web3';


class Articles extends Component {
  state = {
    userName : this.props.username,
    product : this.props.product,
    rate : this.props.rate
 };
//login usser = this.props.login_user

  handlePost  =async ()=>{
    // e.preventDefault();
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();

    //const accounts = await web3.eth.getAccounts()
    //this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = Deals.networks[networkId]
    if(networkData) {
      const deals = web3.eth.Contract(Deals.abi, networkData.address)
      //this.setState({ deals })
      //await deals.methods.distibute_balance("consumer_name1","consumer_name2","consumer_name3")
      //getting all transactions in transaction array
      const transaction_count= await deals.methods.transaction_count().call();
      //console.log(this.state.transactions[0].farmer_name);
      //const name = await deals.methods.name().call()
      deals.methods.add_transaction(this.state.userName,
                                    this.props.login_user,
                                    this.state.product,
                                    1,
                                    this.state.rate,
                                    ).send({ from: accounts[0] })
         
    } else {
      window.alert('Deals contract not deployed to detected network.')
    }


  }
  render() {
    console.log(this.props.login_user)
    return (
      //   <div className="features"> use in parent component
      <article>
        <span className="icon fa-gem"></span>
        <div className="content">
         <h3>{this.props.product}</h3>
          <h4>{this.props.quantity}</h4>
          <h4>{this.props.rate}</h4>
          <h4>{this.props.buyer}</h4>
          <h4>{this.props.seller}</h4>
          {/* <h4>{this.props.login_user}</h4> */}
           
           {/* <h3>{this.props.title}</h3> */}
          <form >
           <button onClick={this.handlePost} value="Accept"/>
          </form>

        </div>
      </article>
      //   </div>
    );
  }
}

export default Articles;
