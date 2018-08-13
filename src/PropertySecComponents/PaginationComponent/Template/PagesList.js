import React, { Component } from "react";

import PaginationStyle from "../PaginationComponent.css";

class PagesList extends Component{
    render(){
        if(this.props.page !== this.props.index){
            return (
                <li className={PaginationStyle.pageList} onClick={this.props.click}>
                    {this.props.index}
                </li>
            );
        }
        else{
            const joinActiveClass = [PaginationStyle.pageList, PaginationStyle.active];
            return (
                <li className={joinActiveClass.join(" ")} onClick={this.props.click}>
                    {this.props.index}
                </li>
            );
        }
        return null;
    }
}

export default PagesList;