import React, { useState } from "react";
import "./form.css";

export default function MyForm() {
  const [name, setName] = useState("");
  const [email , setEmail] = useState("");

  function handleSubmit(e){
    e.preventDefault()
    const value = {name, email};
    console.log(value)
  }


  return (
    <div className="mainContainer">
      <div className="childContainer">
        <h1>My Form</h1>
        <form onSubmit={(e)=>(handleSubmit(e))}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" placeholder="Enter you name" value={name} onChange={(e)=>{setName(e.target.value)}} />
          <br/>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" placeholder="Enter your email id" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
