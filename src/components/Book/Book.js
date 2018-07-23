import React, {Component} from "react";
import PropTypes from 'prop-types';

import WrappDivisions from '../../HOC/WrappDivisions';

class Book extends Component{

    programmaticallyNavToRoute = (propsObj) => {
        propsObj.history.push({pathname : propsObj.match.url +"/"+ this.props.id +"/"});
    }

    render(){
        return ( 
            <WrappDivisions mainClass="book-Repo">
                <h1 onClick={this.programmaticallyNavToRoute.bind(this, this.props.parentProps)}>{this.props.title}</h1>
                <strong>{this.props.author}</strong>
                <p>{this.props.description}</p>
                <p>{this.props.children}</p>
            </WrappDivisions>
        );
    }
}

Book.propTypes = {
  title: PropTypes.string,
}

export default Book;