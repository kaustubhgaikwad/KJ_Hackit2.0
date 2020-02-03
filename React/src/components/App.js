import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import Deals from '../abis/Deals.json'
import logo from "../logo.png";
import "./App.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/main.css";
import Head from "../components/Head";
import Banner from "../components/Banner";
import HeaderComponent from "../components/HeaderComponent";
import Articles from "../components/Articles";
import ArticlesParent from "../components/ArticlesParent";
import Sidebar from "../components/Sidebar";
import Complete from "../components/complete";
import TrackComponent from "../components/TrackComponent"
import "../assets/css/login.css";
import "bootstrap/dist/css/bootstrap.min.css"

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect
} from "react-router-dom";
import Addcontract from "../components/Addcontract";


class App extends Component {

  state = {
    loggedIn: false,
    username: "",
    password: "",
    transactions:[]
  };

  handleLogin = () => {
    if (this.state.password === "ameya") {
      this.setState({ loggedIn: true });
    }
    console.log(this.state.loggedIn);
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAuthentication = () => {
    this.history.push("/Home");
  };
  
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
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
  }

  async loadBlockchainData(){
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    //this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = Deals.networks[networkId]
    if(networkData) {
      const deals = web3.eth.Contract(Deals.abi, networkData.address)
      this.setState({ deals })
      //await deals.methods.distibute_balance("consumer_name1","consumer_name2","consumer_name3");

      //getting all transactions in transaction array
      const transaction_count= await deals.methods.transaction_count().call();
      for (var i = 1; i <= transaction_count; i++) {
        const transaction = await deals.methods.transactions(i).call()
        this.setState({
          transactions: [...this.state.transactions, transaction]
        })
      }
      //console.log(this.state.transactions[0].farmer_name);
      //const name = await deals.methods.name().call()
      deals.methods.add_transaction("naya_farmer_name",
                                    "consumer_name3",
                                    "product",
                                    1,
                                    2,
                                    ).send({ from: accounts[0] })
              
      const bal=await deals.methods.user_balance('farmer_name').call()
      console.log("bal of consumer 1="+bal);
      //const user_count=await deals.methods.user_count().call;
      
      
      //this.setState({ postCount })
      // Load Posts
      // for (var i = 1; i <= postCount; i++) {
      //   const post = await socialNetwork.methods.posts(i).call()
      //   this.setState({
      //     posts: [...this.state.posts, post]
      //   })
      // }
      // // Sort posts. Show highest tipped posts first
      // this.setState({
      //   posts: this.state.posts.sort((a,b) => b.tipAmount - a.tipAmount )
      // })
      // this.setState({ loading: false})
    } else {
      window.alert('Deals contract not deployed to detected network.')
    }
  }

  render() {
    return (
      <div>
      <Router>
        {/* <div>
          <input type="text" id="tp" name="tp" />
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.userName}
            onChange={this.handleLogin}
          />
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <input type="button" onClick={this.handleLogin} value="login" />
        </div> */}
        <Route path="/" exact strict>
          <div class="login">
            <div class="login-triangle"></div>

            <h2 class="login-header">Log in</h2>

            <form class="login-container">
              <p>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.userName}
                  onChange={this.handleOnChange}
                />
              </p>
              <p>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleOnChange}
                />
              </p>
              <p>
                <Link to="/Home" onClick={this.handleLogin}>
                  Log in
                </Link>
                />
              </p>
            </form>
          </div>
        </Route>
        <Route
          path="/Home"
          //={Complete}
          exact
          render={() =>
            this.state.loggedIn === true ? <Complete login_user={this.state.username} /> : <Redirect to="/" />
          }
        />
        <Route path="/contract" component={() => <Addcontract login_user={this.state.username}/>} exact />
        <Route path="/track" exact render={(props) => <TrackComponent {...props} transaction={this.state.transactions} />}  />
      </Router>
    </div>
  );
  }
}

export default App;
