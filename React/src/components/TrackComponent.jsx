import React, { Component } from 'react'
import Sidebar from "./Sidebar"
import Articles from './Articles'

class TrackComponent extends Component
{
    state={}
    render(){
        
        return (
        <div id="wrapper">
        <div id="main">
        <div className="features">
          {this.props.transaction.map(i => <Articles key={i.id} transactions = {i}  />)}
        </div>
        <Sidebar />
      </div>
      </div>);
    }
}

export default TrackComponent;