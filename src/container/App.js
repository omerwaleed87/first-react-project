import React, { PureComponent } from 'react';

import '../container/App.css';

import Human from '../components/Persons';
// import Book from '../components/Books';
import BookShop from '../components/BookShop';

import Aux from '../HOC/Auxi';

import { BrowserRouter } from "react-router-dom";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  
  stateChunks;                                    // Member VAR

  constructor(){                                  // Constructor
    super();
    this.stateChunks = 3;
  }

  state = {                                       //CLASS STATE
    Human : [ 
      {
        id : 0 , name : "Omer", age  : 25, color : "white"
      },
      {
        id : 1 , name : "Sheggy", age  : 26, color : "white"
      },
      {
        id : 2 , name : "Chummi das", age : 29, color : "white"
      },
      {
        id : 3 , name : "Butt", age : 25, color : "white"
      },
      {
        id : 4 , name : "Saqib naag", age : 29, color : "white"
      },
      {
        id : 5 , name : "kukri", age : 27, color : "white"
      },
      {
        id : 6 , name : "Ahmad Imran hashmi", age : 59, color : "white"
      },
      {
        id : 7 , name : "Irtiza Dangar" , age : 30, color : "white"
      },
      {
        id : 8 , name : "Qaiser baba", age : 37, color : "white"
      }
    ],
    currenState : 0,
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
    if(typeof this.state.Human[(this.state.currenState*this.stateChunks)+this.stateChunks] !== "undefined"){
      makeButton = (
        <div>
          <button onClick={this.showPaginateHumanData.bind(this, 1)}>Next</button>
        </div>
      )
    }
    return makeButton;
  }

  renderPrevButton = () => {                      // Helper Function
    let makeButton = "";
    if(typeof this.state.Human[(this.state.currenState*this.stateChunks)-1] !== "undefined"){
      makeButton = (
        <div>
          <button onClick={this.showPaginateHumanData.bind(this, -1)}>Prev</button>
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
            humanList = {this.state.Human}
            stateChunks = {this.stateChunks}
            currentState = {this.state.currenState}
            humanAgeClick = {this.humanEventHandler}
            humanNameChange = {this.humanNameHandler}/>
        </AuthContext.Provider>
      </Aux>
    )
    return makeCurrentData;
  }

  render() {                                      // Render Function

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

export default App;