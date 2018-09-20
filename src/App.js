import React, { Component } from 'react';
import {Link} from 'react-router'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="App">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to='/'> Home </Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to='albums'> Albums </Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to='users'> Users </Link></li>
        </ol>
      </nav>
      <main>
        {this.props.children}
      </main>
      </div>
    );
  }
}


