import React, {Component} from "react";
import PropTypes from 'prop-types';

import WrappDivisions from '../../HOC/WrappDivisions';

class Book extends Component{

    shouldComponentUpdate(prevState, b){
        return prevState.title !== this.props.title;
    }

    render(){
        console.log("render of book update");
        let bookProps = this.props;
        return ( 
            <WrappDivisions mainClass="update-book-Repo">
                <span>
                    <strong>
                        {bookProps.key}
                    </strong>
                    <input type="text" value={bookProps.title} onChange={bookProps.onChangeTitle}/>
                </span>
                <textarea type="text" value={bookProps.description} onChange={bookProps.onChangeDesc}/>
                <button onClick={bookProps.updateBookHandler}>Update</button>
            </WrappDivisions>
        );
    }
}

Book.propTypes = {
  title: PropTypes.string,
}

export default Book;