import React, { Component } from "react";

const defaultState = {
  id: "",
  name:"",
  company:"",
  salary:"",
  age:"",
  phone:"",
  email:""
}
class AddEmployee extends Component {
 constructor (props){
   super(props);
   this.state = {
     ...defaultState
   };

   this.handleChange = this.handleChange.bind(this);
   this.add = this.add.bind(this);

 }

 handleChange (e) {
   this.setState({
     [e.target.name]: e.target.value
   })
 }


 add(){
   const {
     id,
     name,
     company,
     salary,
     age,
     phone,
     email
   } = this.state
   const { addEmployee } = this.props
   addEmployee(id, name, company, salary, age, phone, email);
  this.setState({
    ...defaultState
  })
}

 render(){

  const {
    id,
    name,
    company,
    salary,
    age,
    phone,
    email
  } = this.state

   return(
    <div>
      <input
        onChange={this.handleChange}
        value={id}
        className="add"
        type="text"
        name="id"
        placeholder="id"
        size="1"
      />

      <input
        onChange={this.handleChange}
        value={name}
        className="add"
        type="text"
        name="name"
        placeholder="Name"
        size="19"
      />

      <input
        onChange={this.handleChange}
        value={company}
        className="add"
        name="company"
        type="text"
        placeholder="Company"
        size="11"
      />

      <input
        onChange={this.handleChange}
        value={salary}
        className="add"
        name="salary"
        type="text"
        placeholder="Salary"
        size="6"
      />

      <input
        onChange={this.handleChange}
        value={age}
        className="add"
        type="text"
        name="age"
        placeholder="Age"
        size="2"
      />

      <input
        onChange={this.handleChange}
        value={phone}
        className="add"
        type="text"
        name="phone"
        placeholder="Phone"
        size="12"
      />

      <input
        onChange={this.handleChange}
        value={email}
        className="add"
        type="text"
        name="email"
        placeholder="Email"
        size="18"
      />

    <button
    className="addWorker"
    type="submit"
    onClick={this.add}
    >Add Employee</button>

    </div>
    )
  }
}

export default AddEmployee;
