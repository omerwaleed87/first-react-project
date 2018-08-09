import React, { Component } from 'react';

import CacheComponent from "../../PropertySecComponents/CacheComponent/CacheComponent";
import SearchHeaderComponent from '../../PropertySecComponents/SearchHeaderComponent/SearchHeaderComponent';
import BreadcrumbComponent from '../../PropertySecComponents/BreadcrumbComponent/BreadcrumbComponent';
import PropertyDetailsComponent from '../../PropertySecComponents/PropertyDetailsComponent/PropertyDetailsComponent';
import PropertyDescriptionComponent from '../../PropertySecComponents/PropertyDescriptionComponent/PropertyDescriptionComponent';

class View extends Component {
    
    render(){
        return (
            <section className="view">
                <CacheComponent searchRouteParams={this.props}></CacheComponent>
                <SearchHeaderComponent></SearchHeaderComponent>
                <BreadcrumbComponent searchRouteParams={this.props}></BreadcrumbComponent>
                <PropertyDetailsComponent detailsRouteParams={this.props}></PropertyDetailsComponent>
                <PropertyDescriptionComponent></PropertyDescriptionComponent>
            </section>
        )
    }
}

export default View;