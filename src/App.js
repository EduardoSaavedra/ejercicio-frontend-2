import React, { Component } from 'react';
import employees from './employees';
import AddEmployee from './employees/addEmployee.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      employees: employees.map( employee => ({
        ...employee,
        // Convert to dollars
        salary: employee.salary/21.50
      }))
    };
    this.printEmployees = this.printEmployees.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addEmployee = (id, name, company, salary, age, phone, email) => {
    this.setState( (prevState) => {
      // Get the employees from the state
      const { employees } = prevState
      // find a user with that id
      const existingUser = employees.find(employee => employee.id.toString() === id);

      // Create a new array removing the existingUser if it exists
      const updatedEmployees = employees.filter(employee => !existingUser || employee.id !== existingUser.id )

      // Return the new state
      return {
        employees: [...updatedEmployees, {
          id,
          name,
          company,
          salary,
          age,
          phone,
          email
        }]
      }
      
    })
  }

  addUser(id, name, company, salary, age, phone, email){
    const newList = this.state.employees;
    const existingItem = newList.find(element => element.name === name);
    if(existingItem){
      const newEmployeeFromAdd = parseInt(name);
      const existingItem = parseInt(existingItem.name);
      existingItem.name = existingItem + newEmployeeFromAdd;
    } else {
      newList.push({ id: id, name: name, company: company, salary: ('$' + salary).toLocaleString('es-mx'), age: age, phone: phone, email: email})
    }
    this.setState({
      employees: newList
    });
  }

  dollars = (salary) => {
    console.log('you have clicked', salary )
    const dolares = salary * 21.50;
    alert(dolares)
  }

   deleteUser = (id) => {
    console.log('you have deleted employee number', id)
   
   this.setState((prevState) => ({
     // Filter the deleted employee
     employees: prevState.employees.filter(employee => employee.id !== id)
   }));
 }

printEmployees(){
  var printer = employees
  console.table(printer)
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
              <th>U$D</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
              {this.state.employees.map(({
                id,
                name,
                company,
                salary,
                age,
                phone,
                email
              }) => 
                (
                <tr key={id}>
                  <td className="rows">{id}</td>
                  <td className="rows2">{name}</td>
                  <td className="rows">{company}</td>
                  <td className="right">{`$${salary}`}</td>
                  <button onClick={this.dollars.bind(this, salary)}><td>{`DOLLARS`}</td></button>
                  <td className="rows">{age}</td>
                  <td className="rows2">{phone}</td>
                  <td className="rows">{email}</td>
                  <button type="button" onClick={this.deleteUser.bind(this, id)}><i className="fas fa-trash-alt"></i></button>
                </tr>
              )
            )}
          </tbody>
        </table>

        <button
          className="empleadosEnConsola"
          onClick={this.printEmployees}>
          List Employees in the console
        </button>

        <AddEmployee addEmployee={this.addEmployee}/>

     </div>
    )
  }
}

export default App;
