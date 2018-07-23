import React, {Component} from "react";
import PropTypes from 'prop-types';

import WrappDivisions from '../../HOC/WrappDivisions';

class Book extends Component{

    // componentWillMount(){
    //     console.log("Component will mount of add");
    // }

    // componentWillUpdate(){
    //     console.log("Component will update of add");
    // }

    // shouldComponentUpdate(a, b){
    //     console.log(a.addBookHandler, this.props.addBookHandler);
    //     return true;
    //     // return this.props.allDataLength !== this.props.indexLength;
    // }

    render(){
        console.log("render of add book");
        let bookProps = this.props;
        return ( 
            <WrappDivisions mainClass="book-Repo">
                <h1>Add a new book</h1>
                <input type="text" id="title" placeholder="Title" 
                    onChange={bookProps.changeTitle}/>
                <input type="text" id="auther" placeholder="Auther" 
                    onChange={bookProps.changeAuthor}/>
                <input type="text" id="desc" placeholder="Description" 
                    onChange={bookProps.changeDescription}/>
                <button onClick={bookProps.addBookHandler}>Add Book</button>
            </WrappDivisions>
        );
    }
}

Book.propTypes = {
  title: PropTypes.string,
}

export default Book;