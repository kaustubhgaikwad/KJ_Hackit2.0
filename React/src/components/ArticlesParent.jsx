import React, { Component } from "react";
import { useState, useEffect } from "react";
import Articles from "./Articles";

///have to use capital letters for a single function  ..

function ArticlesParent(props) {
  let login_user = props.login_user;
  useEffect(() => {
    fetchPosts();
  }, []);

  const [item, setItems] = useState([]);
  const fetchPosts = async () => {
    const data = await fetch("http://127.0.0.1:5000/proposalsAll/buyer");

    const item = await data.json()
    //console.log(item);
    //console.log(item["buyers "]);
    console.log("999999999999999999999999999999999999999999");
    //var login_user = this.props.login_user;
    setItems(item);
  };

  return (
    <div className="features">
        
      { item.map(i => (
        <Articles product={i.product}  key={i.id} login_user={login_user}/>
      ))} }
     
      
    </div>
  );
}
export default ArticlesParent;
