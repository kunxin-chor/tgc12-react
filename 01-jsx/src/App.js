import React from "react"
import rabbit from "./rabbit.jpg"
import cake from "./cake.jpg"
import "./App.css"

function App() {
  return (
    <React.Fragment>
      <p style={{
        "color":"red",
        "backgroundColor": "purple"
      }}>Hello World</p>
      <p>Another Hello</p>
      <AlertBox message="AWAS!" color="blue"></AlertBox>
      <AlertBox message="Hello from the other side"></AlertBox>
      <Invert number={-100}/>
      <img src={require("./kitten.jpg").default}/>
      <img src={rabbit}/>
      <BorderedImageFrame image={cake}/>
      <BorderedImageFrame image={rabbit}/>
      <AddTwo n1={2} n2={3}/>
    </React.Fragment>
  );
}

function Invert(props) {
  return (
    <React.Fragment>
      <p>{props.number * -1}</p>
    </React.Fragment>

  )
}

function AlertBox(props) {
  console.log(props)
  let textColor = props.color || "red";
  return (
    <React.Fragment>
      <div style={{"color": textColor}}>
        {props.message}
      </div>

    </React.Fragment>
  )
}

function BorderedImageFrame(props){
  return (
    <div style={{
       borderColor: "red",
       borderStyle:"solid",
       borderWidth:"4px"
    }}>
      <p>Let there be cake</p>
      <img src={props.image}/>
    </div>

  )
}

function AddTwo(props) {
  let sum = props.n1 + props.n2;
  return (
    <React.Fragment>
      <p>Sum is {sum}</p>
    </React.Fragment>

  )
}

export default App;
