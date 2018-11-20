import React, { Component } from 'react';
import employees from './employees';
import AddEmployee from './employees/addEmployee.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : []
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  addUser = () => {
    this.setState({
        add : this.state.list
    })
  }

  componentDidMount(){
    this.setState((state) => {
      employees.forEach((employee, i ) => {
        let result = ('$' + (employee.salary).toLocaleString('es-mx'))
        employees[i].salary = result
      })
      state.list = employees
    })
  }

  deleteUser = (item) => {
  let {list} = this.state;
  list.splice(item.id,1);
  this.setState({
    list : list
  });
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
              {this.state.list.map(item => {
                return (
            <tr className="rows" key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.company}</td>
              <td>{item.salary}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <button type="button" onClick={this.deleteUser}><i className="fas fa-trash-alt"></i></button>
            </tr>
              )
            })}
          </tbody>
        </table>

        <AddEmployee />
     </div>
    )
  }
}

export default App;
