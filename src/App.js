import React, { Component } from 'react';
import employees from './employees';
import AddEmployee from './employees/addEmployee.js'
import $ from "jquery";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : [],
    };
    this.printEmployees = this.printEmployees.bind(this);
    this.addUser = this.addUser.bind(this);

  }

  componentDidMount(){
    this.setState((state) => {
      employees.forEach((employee, i ) => {
        let money = ('$' + (employee.salary).toLocaleString('es-mx'))
        employees[i].salary = money
      })
      state.list = employees
    })
  }

  addUser(id, name, company, salary, age, phone, email){
     $.ajax({
       method: "POST",
       url: "/",
       contentType: 'application/json',
       data: JSON.stringify({
         id: id,
         name: name,
         company: company,
         salary: salary,
         age: age,
         phone: phone,
         email: email
       })
     })
   }

   deleteUser = (worker, e) => {
   let {list} = this.state;
   list.splice(worker.id,1);
   this.setState({
     list : list
   });
 }


printEmployees(item){
  var printer = employees
  console.log(printer)
}

  render() {
    return (
    <div id='employees'>
    <h1> Employees List</h1>
        <table>
          <tbody>
            <tr className="title">
              <th>Id</th>
              <th>Name</th>
              <th>Company</th>
              <th>Salary</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
              {this.state.list.map(worker => {
                return (
            <tr key={worker.id}>
              <td className="rows">{worker.id}</td>
              <td className="rows2">{worker.name}</td>
              <td className="rows">{worker.company}</td>
              <td className="right">{worker.salary}</td>
              <td className="rows">{worker.age}</td>
              <td className="rows2">{worker.phone}</td>
              <td className="rows">{worker.email}</td>
              <button type="button" onClick={this.deleteUser.bind(this, worker)}><i className="fas fa-trash-alt"></i></button>
            </tr>
              )
            })}
          </tbody>
        </table>

        <button
          className="empleadosEnConsola"
          onClick={this.printEmployees}>
          List Employees in the console
        </button>

        <AddEmployee addItem={this.addUser}/>
     </div>
    )
  }
}

export default App;
