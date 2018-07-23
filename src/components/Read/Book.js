import React, {Component} from "react";
import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";
import WrappDivisions from '../../HOC/WrappDivisions';

class Book extends Component{

    shouldComponentUpdate(prevState, b){
        return prevState.title !== this.props.title || prevState.description !== this.props.description;
    }
    
    // programmaticallyNavToRoute = (id) => {
    //     this.props.hisory.push({pathname : '/' + id});
    // }

    render(){
        console.log("render of book read");
        let bookProps = this.props;
        return ( 
            <WrappDivisions mainClass="read-book-Repo">
                <NavLink to={{
                    pathname: "/view-posts/"+ bookProps.id +"/",
                }}>
                <h2>{bookProps.id} : <span>{bookProps.title}</span></h2>
                </NavLink>
                {/*<p>{bookProps.description}</p>*/}
            </WrappDivisions>
        );
    }
}

Book.propTypes = {
  title: PropTypes.string,
}

export default Book;