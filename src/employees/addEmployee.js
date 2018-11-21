import React, { Component } from 'react';

class AddEmployee extends Component {
 constructor (props){
   super(props);
   this.state = {
     id: '',
     name:'',
     company:'',
     salary:'',
     age:'',
     phone:'',
     email:''
   };

   this.updateId = this.updateId.bind(this);
   this.updateName = this.updateName.bind(this);
   this.updateCompany = this.updateCompany.bind(this);
   this.updateSalary = this.updateSalary.bind(this);
   this.updateAge = this.updateAge.bind(this);
   this.updatePhone = this.updatePhone.bind(this);
   this.updateEmail = this.updateEmail.bind(this);
   this.add = this.add.bind(this);

 }

 updateId(e){
   this.setState({
     id: e.target.value
   })
 }

 updateName(e){
   this.setState({
     name: e.target.value
   })
 }

 updateCompany(e){
   this.setState({
     company: e.target.value
   })
 }

 updateSalary(e){
   this.setState({
     salary: e.target.value
   })
 }

 updateAge(e){
   this.setState({
     age: e.target.value
   })
 }

 updatePhone(e){
   this.setState({
     phone: e.target.value
   })
 }

 updateEmail(e){
   this.setState({
     email: e.target.value
   })
 }

 add(){
    this.props.addItem(this.state.id, this.state.name, this.state.company, this.state.salary, this.state.age, this.state.phone, this.state.email);
    this.setState({
      id:"",
      name:"",
      company:"",
      salary:"",
      age:"",
      phone:"",
      email:""
    })
  }

 render(){

   return(

   <div>

   <input
   onChange={this.updateId}
   value={this.state.id}
   className="add"
   type="text"
   placeholder="id"
   size="1"
   />

   <input
   onChange={this.updateName}
   value={this.state.name}
   className="add"
   type="text"
   placeholder="Name"
   size="19"
   />

   <input
   onChange={this.updateCompany}
   value={this.state.company}
   className="add"
   type="text"
   placeholder="Company"
   size="11"
   />

   <input
   onChange={this.updateSalary}
   value={this.state.salary}
   className="add"
   type="text"
   placeholder="Salary"
   size="6"
   />

   <input
   onChange={this.updateAge}
   value={this.state.age}
   className="add"
   type="text"
   placeholder="Age"
   size="2"
   />

   <input
   onChange={this.updatePhone}
   value={this.state.phone}
   className="add"
   type="text"
   placeholder="Phone"
   size="12"
   />

   <input
   onChange={this.updateEmail}
   value={this.state.email}
   className="add"
   type="text"
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
