import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import HomePage from '../PropertySecPages/HomePage/Home';
import SearchPage from '../PropertySecPages/SearchPage/Search';
import ViewPage from '../PropertySecPages/ViewPage/View';



import '../container/App.css';

class App extends Component {
  
  constructor(){                                  // Constructor
    super();
  }

  render() {                                      // Render Function
    return (
      <section className="property-section">
          <Switch>
              <Route path="/" exact component={HomePage}></Route>
              {/*<Route path="/for-sale/houses/lahore" exact component={SearchPage}></Route>
              <Route path="/for-sale/houses/lahore/:selector" exact component={ViewPage}></Route>*/}
          </Switch>
      </section>
    );
  }
}

export default App;