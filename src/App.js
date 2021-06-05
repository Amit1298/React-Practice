import React, {Component} from "react";
class Employee extends Component{
   state= this.props.Stname

  render(){
    return(
      <>
        <h2>Hello Employee</h2>
        <h4>Student Name: {this.state.Stname}</h4>
      </>
    )
  }
}
export default Employee;