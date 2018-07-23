import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../components/Person/Person.css';
import WrappDivisions from '../../HOC/WrappDivisions';

import {AuthContext} from '../../container/App';

// import Function from "../Function/Function";

/*class Person extends Component {

  name = "";
  age = "";

  setMyName = (myName) => {
    this.name = myName;
  };
  getMyName = () => {
    return this.name;
  };

  setMyAge = (myAge) => {
    this.age = myAge;
  };
  getMyAge = () => {
    return this.age;
  };

  printMyInfo = (info = null) => {
    if(info == null)
      console.log("My name is : "+ this.name," Im "+ this.age +" years old");
    else if( info.name)
      console.log("My name is : "+ this.name);
    else if(info.age)
      console.log("Im "+ this.age +" years old");
  }

  printMyName = (props) => {
    return (
      <h1>Hello my {props.name} is omer !</h1>
    );
  }

  render() {
    return (
      <div className="Person">
        <header className="Person-header">
          <h1 className="Person-title">Welcome to First Person</h1>
        </header>
        <p className="Person-intro">
          Hello I'm your first person
        </p>
      </div>
    );
  }
}

export default Person;*/

class Person extends Component {
  render() {
    return (
        <WrappDivisions mainClass="human-Repo">
            <AuthContext.Consumer>
              {auth => auth ? <p>Im authenticated</p> : null}
            </AuthContext.Consumer>
            <h1>My name is {this.props.name}</h1>
            <span onClick={this.props.click} style={{background : this.props.color}}>{this.props.age}</span>
            <p>{this.props.children}</p>
            <input type="text" id="name" onChange={this.props.nameChanged} value={this.props.name}/>
        </WrappDivisions>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  color: PropTypes.string,
  click: PropTypes.func,
  nameChanged: PropTypes.func,
}

/*const Person = (param) => {
  return (
        <div className="human-Repo">
            <h1>My name is {param.name}</h1>
            <span onClick={param.click} style={{background : param.color}}>{param.age}</span>
            <p>{param.children}</p>
            <input type="text" id="name" onChange={param.nameChanged} value={param.name}/>
        </div>
    );
}*/

export default Person;