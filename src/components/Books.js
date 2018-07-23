import React, {Component} from 'react';
import { Route } from "react-router-dom";

import axios from 'axios';
import Book from "./Book/Book";
import BookDetail from "./Detail/BookDetail";

import withClass from '../HOC/Classes/withClasses';

class Books extends Component{
    
    state = {
        Book : [],
        limit : 6,
        isToShow : false,
    };

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, this.state.limit);
                const updatedResponse = posts.map(value => {
                    return {
                        ...value,
                        author : "MAX",
                    };
                });
                this.setState({Book : updatedResponse});
            });
    }

    showBooksHandler = () => {
        console.log("Im showing books !!!!! ");
    }

    makeBookContent = () => {
        let makeBook = null;
        const bookContent = [...this.state.Book];
        if(bookContent){
        makeBook = bookContent.filter((fvalue, fkey) => (fkey < this.state.limit)).map(bookContents => {
            return <Book title={bookContents.title}
                    description={bookContents.body}
                    author={bookContents.author}
                    key={bookContents.id}
                    id={bookContents.id}
                    parentProps={this.props}>
                </Book>
            });
        }
        return makeBook;
    }

    render(){
        let bookContent = this.makeBookContent();
        return (
            <div>
            {bookContent}
            <Route path={this.props.match.url + "/:id"} exact component={BookDetail}></Route>
            {/*<button onClick={this.showBooksHandler}>Show me books</button>*/}
            </div>
        );
    }
}

export default withClass(Books, "book");