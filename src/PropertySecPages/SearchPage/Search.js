import React, { Component } from 'react';

import CacheComponent from "../../PropertySecComponents/CacheComponent/CacheComponent";
import SearchHeaderComponent from '../../PropertySecComponents/SearchHeaderComponent/SearchHeaderComponent';
import AdvanceSearchBoxComponent from '../../PropertySecComponents/AdvanceSearchBoxComponent/AdvanceSearchBoxComponent';
import BreadcrumbComponent from '../../PropertySecComponents/BreadcrumbComponent/BreadcrumbComponent';
import SearchListingComponent from '../../PropertySecComponents/SearchListingComponent/SearchListingComponent';
import PaginationComponent from '../../PropertySecComponents/PaginationComponent/PaginationComponent';

class Search extends Component {

    render(){
        return (
            <section className="search">
                <CacheComponent searchRouteParams={this.props}></CacheComponent>
                <SearchHeaderComponent></SearchHeaderComponent>
                <AdvanceSearchBoxComponent searchRouteParams={this.props}></AdvanceSearchBoxComponent>
                <BreadcrumbComponent searchRouteParams={this.props}></BreadcrumbComponent>
                <SearchListingComponent></SearchListingComponent>
                <PaginationComponent searchRouteParams={this.props}></PaginationComponent>
            </section>
        )
    }
}

export default Search;