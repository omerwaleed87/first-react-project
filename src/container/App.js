import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import HomePage from '../PropertySecPages/HomePage/Home';
import SearchPage from '../PropertySecPages/SearchPage/Search';
import ViewPage from '../PropertySecPages/ViewPage/View';

class App extends Component {

  render() {                                      // Render Function
    return (
      <section className="property-section">
          <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/:purpose(for-sale/|to-rent/):propertyType([A-z-]+/)?:location([A-z]+[-]*[A-z]+/)?:city([A-z]+[-]*[A-z]+/)*:page([0-9]+/)*" exact component={SearchPage}></Route>
              <Route path="/:purpose(for-sale/|to-rent/):propertyType([A-z-]+/)?:location([A-z]+[-]*[A-z]+/)?:city([A-z]+[-]*[A-z]+/)*:title-:selector/" exact component={ViewPage}></Route>
          </Switch>
      </section>
    );
  }
}

export default App;