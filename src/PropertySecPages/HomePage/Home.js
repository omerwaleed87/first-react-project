import React, { Component } from 'react';

import HeaderComponent from '../../PropertySecComponents/HeaderComponent/HeaderComponent';
import SearchBoxComponent from '../../PropertySecComponents/SearchBoxComponent/SearchBoxComponent';
import PopularSearchComponent from '../../PropertySecComponents/PopularSearchComponent/PopularSearchComponent';

class Home extends Component {

    render(){
        console.log(this.props);
        return (
            <section className="home">
                <HeaderComponent></HeaderComponent>
                <SearchBoxComponent page={this.props}></SearchBoxComponent>
                <PopularSearchComponent></PopularSearchComponent>
            </section>
        );
    }
}

export default Home;