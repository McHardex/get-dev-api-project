import React, { Component } from 'react';
import {Link} from 'react-router'
// import logo from './logo.svg';
// import './App.css';
// import { connect } from 'react-redux';
// import Posts from './components/Posts'
// import Albums from './components/Albums'
// import Users from './components/Users'

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

// const mapStateToProps = ({myApp}) => ({myApp})
// export default connect(mapStateToProps, () => ({}) )(App);
