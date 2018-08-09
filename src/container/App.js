import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from '../PropertySecPages/HomePage/Home';
import SearchPage from '../PropertySecPages/SearchPage/Search';
import ViewPage from '../PropertySecPages/ViewPage/View';

class App extends Component {

  render() {                                      // Render Function
    return (
      <section className="property-section">
          <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/:purpose/:propertyType/:location/**/:title-:selector/" exact component={ViewPage}></Route>
              <Route path="/:purpose/:propertyType/:location/**/" component={SearchPage}></Route>
          </Switch>
      </section>
    );
  }
}

export default App;