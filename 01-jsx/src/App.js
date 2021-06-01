import React from "react"
import rabbit from "./rabbit.jpg"
import "./App.css"

function App() {
  return (
    <React.Fragment>
      <p style={{
        "color":"red",
        "backgroundColor": "purple"
      }}>Hello World</p>
      <p>Another Hello</p>
      <AlertBox></AlertBox>
      <AlertBox></AlertBox>
      <img src={require("./kitten.jpg").default}/>
      <img src={rabbit}/>
    </React.Fragment>
  );
}

function AlertBox() {
  return (
    <React.Fragment>
      <div>
        Danger! Danger! Will Robinson!
      </div>

    </React.Fragment>
  )
}

export default App;
