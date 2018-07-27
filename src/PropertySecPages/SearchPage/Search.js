import React, { Component } from 'react';

import HeaderComponent from '../../PropertySecComponents/HeaderComponent/HeaderComponent';
import AdvanceSearchBoxComponent from '../../PropertySecComponents/AdvanceSearchBoxComponent/AdvanceSearchBoxComponent';
import BreadcrumbComponent from '../../PropertySecComponents/BreadcrumbComponent/BreadcrumbComponent';
import SearchListingComponent from '../../PropertySecComponents/SearchListingComponent/SearchListingComponent';
import PaginationComponent from '../../PropertySecComponents/PaginationComponent/PaginationComponent';

class Search extends Component {
    // constructor(){
    //     super();
    // }

    render(){
        return (
            <section className="home">
                <HeaderComponent></HeaderComponent>
                <AdvanceSearchBoxComponent></AdvanceSearchBoxComponent>
                <BreadcrumbComponent></BreadcrumbComponent>
                <SearchListingComponent></SearchListingComponent>
                <PaginationComponent></PaginationComponent>
            </section>
        )
    }
}

export default Search;