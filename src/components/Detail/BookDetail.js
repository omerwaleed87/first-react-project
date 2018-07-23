import React, {Component} from "react";
import PropTypes from 'prop-types';

import WrappDivisions from '../../HOC/WrappDivisions';
import axios from "axios";

class BookDetail extends Component{

    state = {
        currentBook : []
    }

    componentDidMount(){
        console.log("Component did mount of detail book");
        if(typeof this.props.match.params.id !== "undefined" && this.state.current !== []){
            axios.get("https://jsonplaceholder.typicode.com/posts/"+ this.props.match.params.id)
                .then(response => {
                    const allData = response.data;
                    console.log("INSIDE Component did mount of detail book");
                    const allBooksData = {
                        title : allData.title,
                        description : allData.body,
                        id : allData.id,
                        userID : allData.userId
                    };
                    this.setState({currentBook : allBooksData});
                }).catch(error => {
                    console.log(error, "i have got an sssserror");
                });
        }
        console.log("Component did mount of detail book end");
    }

    // shouldComponentUpdate(prevState, b){
    //     return prevState.title !== this.props.title || prevState.description !== this.props.description;
    // }
    
    componentWillUpdate(){
        console.log("component will update of detail book");
        if(this.state.currentBook && typeof this.state.currentBook.id !== "undefined" 
            && typeof this.props.history.location.pathname !== "undefined"){
                const urlRegex = new RegExp('/\[/\0-9/\]/');
                const result = urlRegex.exec(this.props.history.location.pathname);
                if( result !== "" && typeof result[0] !== "undefined" && result[0] !== '/'+ this.state.currentBook.id +"/"){
                    axios.get("https://jsonplaceholder.typicode.com/posts"+ result[0])
                        .then(response => {
                            const allData = response.data;
                            // console.log("INSIDE Component will update of detail book");
                            const allBooksData = {
                                title : allData.title,
                                description : allData.body,
                                id : allData.id,
                                userID : allData.userId
                            };
                            this.setState({currentBook : allBooksData});
                        }).catch(error => {
                            console.log(error, "i have got an error");
                        });
                }
        }
        console.log("component will update of detail book end");
    }
    programmaticallyNavToRoute = () => {
        // console.log(this.props);
        this.props.history.push({pathname : '/view-posts'});
    }

    render(){
        console.log("render of book detail page");
        let book = this.state.currentBook;
        if(book){
            return ( 
                <WrappDivisions mainClass="detail-book-Repo">
                    <h1>Detail of my book</h1>
                    {book.id}<h2>{book.title}</h2>
                    <p>{book.description}</p>
                    <strong>{book.userID}</strong>
                    <button id="back-to-parent" onClick={this.programmaticallyNavToRoute.bind(this)}>Explore more books</button>
                </WrappDivisions>
            );
        }
        return null;
    }
}

BookDetail.propTypes = {
  title: PropTypes.string,
}

export default BookDetail;