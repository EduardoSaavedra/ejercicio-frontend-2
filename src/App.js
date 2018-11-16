import React, { Component } from 'react';
import employees from './employees';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : [],
    };
  }


  render() {
    return (
    <div id='employees'>
        <table>
          <tbody>
            <tr className="header">
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
              <a className="delete" onClick={this.deleteUser.bind(this,item)} href='#'>X</a>
            </tr>
              )
            })}
          </tbody>
        </table>


     </div>
    )
  }
}

export default App;
