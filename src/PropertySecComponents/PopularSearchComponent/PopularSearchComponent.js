import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import * as PopularPropertiesActionCreator from "./Store/Action";
import PopularSearchComponentStyle from './PopularSearchComponent.css';

class PopularSearchComponent extends Component{

    componentDidMount(){
        if(typeof this.props.popularProperties[0] === "undefined")
            this.props.mountPopularSearches();
    }

    getPurposeViseProperties = () =>{
        const popularPropResponse = this.props.popularProperties[0];
        let popularPropData = [];
        for(let x in popularPropResponse){
            popularPropData[x] = [];
            for(let y in popularPropResponse[x])
                popularPropData[x].push(popularPropResponse[x][y]);
        }
        return popularPropData;
    }

    render(){
        if(typeof this.props.popularProperties[0] !== "undefined"){
            const makePurposeViseProperties = this.getPurposeViseProperties();
            return (
                <div className={PopularSearchComponentStyle.popularSearch}>
                    <div className={PopularSearchComponentStyle.heading}>Popular Areas in UAE</div>
                    <div className={PopularSearchComponentStyle.popularContainer}>
                        <div className={PopularSearchComponentStyle.popularForSale}>
                            <h3>Popular places for sale</h3>
                            <ul className={PopularSearchComponentStyle.popularSearchUl}>
                                {makePurposeViseProperties['sale'].map((val, key) => {
                                    return <li className={PopularSearchComponentStyle.list}  key={key}>
                                        <NavLink className={PopularSearchComponentStyle.alist} to={val.url} title={val.title}>{val.title}</NavLink>
                                    </li>    
                                })}
                            </ul>
                        </div>
                        <div className={PopularSearchComponentStyle.popularToRent}>
                            <h3>Popular places to rent</h3>
                            <ul className={PopularSearchComponentStyle.popularSearchUl}>
                                {makePurposeViseProperties['rent'].map((val, key) => {
                                    return <li className={PopularSearchComponentStyle.list}  key={key}>
                                        <NavLink className={PopularSearchComponentStyle.alist} to={val.url} title={val.title}>{val.title}</NavLink>
                                    </li>    
                                })}
                            </ul>
                        </div>
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
            popularProperties : state.popularProperties
        };
    }
    return {
        popularProperties : {}
    };
}

const mapDispatchToProps = dispatch => {
    return {
        mountPopularSearches : () => dispatch(PopularPropertiesActionCreator.getPopularPropertiesOnMount()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularSearchComponent);