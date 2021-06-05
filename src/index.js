import React from "react";
import ReactDOM from "react-dom";
import Employee from "./App";
function Student(props){
  return (
    <div>
      <h1>Hello Student</h1>
      <h4>Name: {props.name}</h4>
      <Employee Stname="Krishna"/>
    </div>
  )
}
ReactDOM.render(<Student name="Amit Kumar"/>, document.getElementById("root"));