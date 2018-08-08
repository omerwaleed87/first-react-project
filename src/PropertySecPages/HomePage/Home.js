import React, { Component } from 'react';

import HeaderComponent from '../../PropertySecComponents/HeaderComponent/HeaderComponent';
import SearchBoxComponent from '../../PropertySecComponents/SearchBoxComponent/SearchBoxComponent';
import PopularSearchComponent from '../../PropertySecComponents/PopularSearchComponent/PopularSearchComponent';
import CacheComponent from "../../PropertySecComponents/CacheComponent/CacheComponent";

class Home extends Component {

    render(){
        return (
            <section className="home">
                <CacheComponent></CacheComponent>
                <HeaderComponent></HeaderComponent>
                <SearchBoxComponent page={this.props}></SearchBoxComponent>
                <PopularSearchComponent></PopularSearchComponent>
            </section>
        );
    }
}

export default Home;