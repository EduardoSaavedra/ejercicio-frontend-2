import React, { Component } from 'react';
import employees from './employees';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : []
    };
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

  render() {
    return (
    <div id='employees'>
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
            </tr>
              )
            })}
          </tbody>
        </table>

        <button
          onClick={this.addUser}
          type="submit">Add employee</button>
     </div>
    )
  }
}

export default App;

// <button type="button" onClick={this.deleteUser.bind(this,item)} ><i className="fas fa-minus-circle"></i></button> line 48 after </tr>
