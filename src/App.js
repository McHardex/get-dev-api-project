import React, { Component } from 'react';
import {Link} from 'react-router'
export default class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Link to='/'> Home </Link>
        <Link to='albums'> Albums </Link>
        <Link to='users'> Users </Link>
      </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}