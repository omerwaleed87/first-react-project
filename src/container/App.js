import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import '../container/App.css';

import Human from '../components/Persons';
// import Book from '../components/Books';
import BookShop from '../components/BookShop';

import Aux from '../HOC/Auxi';

import { BrowserRouter } from "react-router-dom";

// redux + async call + middleware
import * as actionCreators from '../store/actions/actions';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  
  stateChunks;                                    // Member VAR

  constructor(){                                  // Constructor
    super();
    this.stateChunks = 3;
  }

  state = {                                       //CLASS STATE
    authenticated : true,
  }

  setCurrentState = (counter) => {                // Helper Function
    this.setState( prevState => {
      return {
        currenState : prevState.currenState + counter
      } 
    });
  }

  humanNameHandler = (humanKey, event) => {       // OnInput Change Function
    
    let listOfHumanState = [...this.state.Human];
    let saveToBeUpdatedPerson = listOfHumanState[humanKey];
    
    listOfHumanState.splice(humanKey, 1, {id : saveToBeUpdatedPerson.id, name : event.target.value, age : saveToBeUpdatedPerson.age, color : saveToBeUpdatedPerson.color});
    
    this.setState({Human : listOfHumanState});
  };

  humanEventHandler = (humanKey) => {             // Onclick Function
    
    let listOfHumanState = [...this.state.Human];
    
    if(listOfHumanState[humanKey].color !== "red"){
      listOfHumanState[humanKey].color = "red";
      this.setState({Human : listOfHumanState});
    }
  }

  showPaginateHumanData = (paginationParam) => {        // Helper Function
    this.setCurrentState(paginationParam);
    // this.setState({currenState : this.state.currenState+paginationParam});
  }

  renderNextButton = () => {                      // Helper Function
    let makeButton = "";
    if(typeof this.props.Human[(this.props.currenState*this.stateChunks)+this.stateChunks] !== "undefined"){
      makeButton = (
        <div>
          <button onClick={this.props.showNextPaginateHumanData}>Next</button>
        </div>
      )
    }
    return makeButton;
  }

  renderPrevButton = () => {                      // Helper Function
    let makeButton = "";
    if(typeof this.props.Human[(this.props.currenState*this.stateChunks)-1] !== "undefined"){
      makeButton = (
        <div>
          <button onClick={this.props.showPrevPaginateHumanData}>Prev</button>
        </div>
      )
    }
    return makeButton;
  }

  renderCurrentContent = () => {                  // Helper Function
    let makeCurrentData = null;
    makeCurrentData = (
      <Aux>
        <AuthContext.Provider value={this.state.authenticated}>
          <Human 
            humanList = {this.props.Human}
            stateChunks = {this.stateChunks}
            currentState = {this.props.currenState}
            humanAgeClick = {this.props.onClickAge}
            humanNameChange = {this.props.onChangeInputName}/>
        </AuthContext.Provider>
      </Aux>
    )
    return makeCurrentData;
  }

  render() {                                      // Render Function
    console.log(this.props);
    let prevButton = this.renderPrevButton();
    let nextButton = this.renderNextButton();
    let currentContent = this.renderCurrentContent();

    return (
      <div className="App">
          {/*<Aux>
            {prevButton}
            {currentContent}
            {nextButton}
          </Aux>*/}
          {/*<Aux>
            <Book/>
          </Aux>*/}
          <BrowserRouter>
            <Aux>
              <BookShop/>
            </Aux>
          </BrowserRouter>
      </div>      
    );
  }
}

const mapStateToProps = (state) => {
    return {
        Human : state.Human,
        currenState : state.currenState,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeInputName : (key, event) => dispatch(actionCreators.humanNameChange(key, event)),
        onClickAge        : (key) => dispatch(actionCreators.humanAgeClick(key, "red")),
        showNextPaginateHumanData : () => dispatch(actionCreators.HumanNextPaginate(1)),
        showPrevPaginateHumanData : () => dispatch(actionCreators.HumanPrevPaginate(-1)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);