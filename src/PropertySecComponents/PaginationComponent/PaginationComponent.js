import React, { Component } from "react";
import { connect } from 'react-redux';

import * as Config from "../../Config/Config";
import * as PaginationActionCreator from './Store/Action';

import PaginationTemplete from "./Template/PagesList";
import PaginationStyle from "./PaginationComponent.css";

class PaginationComponent extends Component{

    paginationList = () => {
        const statePage = this.props.parameters.page;
        const listingCount = this.props.listings.listing_count;
        const listingInSinglePage = Config.listingInSinglePage;
        if(listingCount > 0){
            let totalPages = [];
            for(let index = 0; index <= this.props.listings.listing_count/listingInSinglePage; index++){
                totalPages.push(index+1);
            }
            return totalPages.map(val => {
                return <PaginationTemplete
                            key={val}
                            index={val}
                            page={statePage}
                            stateParams={this.props.parameters}
                            click={() => this.props.clickHandlerPagination(val, this.props.parameters, this.props.searchRouteParams)}
                        ></PaginationTemplete>
            });
        }
    }

    render(){
        if(typeof this.props.listings[0] !== "undefined"){
            const getPaginationList = this.paginationList();
            return (
                <div className={PaginationStyle.pagination}>
                    <div className={PaginationStyle.paginationContainer}>
                        <ul className={PaginationStyle.paginationUL}>
                            {getPaginationList}
                        </ul>    
                    </div>
                    
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = state => {
    if(typeof state !== "undefined"){
        return {
            listings : state.listings,
            parameters : state.parameters,
        };
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickHandlerPagination : (value, params, routes) => dispatch(PaginationActionCreator.changePaginationOnClick(value, params, routes)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);