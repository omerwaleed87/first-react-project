import React, { Component } from 'react';

import SearchHeaderComponent from '../../PropertySecComponents/SearchHeaderComponent/SearchHeaderComponent';
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
            <section className="search">
                <SearchHeaderComponent></SearchHeaderComponent>
                <AdvanceSearchBoxComponent searchRouteParams={this.props}></AdvanceSearchBoxComponent>
                <BreadcrumbComponent searchRouteParams={this.props}></BreadcrumbComponent>
                <SearchListingComponent></SearchListingComponent>
                {/*<PaginationComponent></PaginationComponent>*/}
            </section>
        )
    }
}

export default Search;