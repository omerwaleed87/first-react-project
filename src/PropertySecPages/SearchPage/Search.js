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
        console.log("Hello Im search");
        return (
            <section className="search">
                <HeaderComponent></HeaderComponent>
                {/*<AdvanceSearchBoxComponent></AdvanceSearchBoxComponent>
                <BreadcrumbComponent></BreadcrumbComponent>
                <SearchListingComponent></SearchListingComponent>
                <PaginationComponent></PaginationComponent>*/}
            </section>
        )
    }
}

export default Search;