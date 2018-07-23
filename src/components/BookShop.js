import React, {Component} from 'react';

import axiosInstance from "../axious-orders";
import axios from "axios";

import AddBook from "./Add/Book";
import ReadBook from "./Read/Book";
import UpdateBook from "./Update/Book";
// import ExtraBooks from "./Books";
import BookDetail from "./Detail/BookDetail";

import PortalCall from "../PortalAPIService/PortalAPICall";
import withClass from '../HOC/Classes/withClasses';
import AsyncComponent from "../HOC/AsyncComponent/AsyncComponent";
import Links from '../RoutingLinks/Links';

import { Route, Switch, Redirect } from "react-router-dom";

const asyncExtraBookComponent = AsyncComponent(() => {
    return import('./Books');
});

class BookShop extends Component{
    
    title = "";
    author = "";
    description = "";
    allBooksData = {};
    limit = 4;

    state = {
        newBook : [],
        otherBooks : [],
        addBook : {
            title : {
                value : "",
                isValid : true,
                validation : {
                    required : true,
                    minLength : 5,
                    maxLength : 10,
                },
            },
            description : {
                value : "",
                isValid : true,
                validation : {
                    required : true,
                    minLength : 15,
                    maxLength : 20,
                },
            },
            author : {
                value : "",
                isValid : true,
                validation : {
                    required : true,
                    minLength : 5,
                    maxLength : 10,
                },
            }, 
        },
    };

    setMembersToNull = () => {
        const addBookData = {...this.state.addBook};
        addBookData.title.value = "";
        addBookData.author.value = "";
        addBookData.description.value = "";
        this.setState({addBook : addBookData});
    }

    componentDidMount(){
        console.log("Component did mount of book shop");
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const allData = response.data.slice(0, this.limit);
                console.log("INSIDE Component did mount of book shop");
                this.allBooksData = allData.map((a,b) => {
                    return {
                        title : a.title,
                        description : a.body,
                        id : a.id
                    };
                });
                this.setState({otherBooks : this.allBooksData});
            }).catch(error => {
                console.log(error, "i have got an error");
            });
        console.log("Component did mount of book shop end");
    }

    // shouldComponentUpdate(a, b){
    //     // console.log("Component Should update of book shop");
    //     // console.log(this.allBooksData, this.state.otherBooks, b);
    //     // return (this.allBooksData.length !== this.limit || this.allBooksData !== this.state.otherBooks);
    //     return true;
    // }

    componentWillUpdate(){
        console.log("Component will update of book shop");
        if(this.allBooksData.length !== this.limit){
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(response => {
                    const allData = response.data.slice(0, this.limit);
                    console.log("INSIDE Component Will update of book shop");
                    this.allBooksData = allData.map((a,b) => {
                        return {
                            title : a.title,
                            description : a.body,
                            id : a.id
                        };
                    });
                    this.setState({otherBooks : this.allBooksData});
                }).catch(error => {
                    console.log(error, "i have got an error");
                });
        }
        console.log("Component will update of book shop end");
    }

    checkFormValidationFields = (data) => {
        let isChangedFlag = false;

        const addBookData = data;
        if(addBookData.value === "" || addBookData.value.length < addBookData.validation.minLength || addBookData.value.length > addBookData.validation.maxLength){
            addBookData.isValid = false;
            isChangedFlag = true;
        }
        else
            addBookData.isValid = true;

        return isChangedFlag;
    }

    checkFormValidationData = (book) => {
        let isChangedFlag = false;

        for(let bookData in book){
            isChangedFlag = isChangedFlag || this.checkFormValidationFields(book[bookData]);
        }
        // isChangedFlag += this.checkFormValidationFields(book.title);
        // isChangedFlag = this.checkFormValidationFields(book.author);
        // isChangedFlag = this.checkFormValidationFields(book.description);
        
        if(isChangedFlag){
            this.setState({addBook : book});
            return false;
        }
        return true;
    }

    addBookHandler = () => {
        const addBookData = {...this.state.addBook};
        const formValidations = this.checkFormValidationData(addBookData);

        if(formValidations){
            const newAPIService = new PortalCall();
            const parameters = {
                title : this.state.addBook.title.value,
                author : this.state.addBook.author.value,
                description : this.state.addBook.description.value
            }
            const addNewBookParams = {
                params : {...parameters}
            }
            const addNewBookService = {...addNewBookParams , ...newAPIService};
            axiosInstance.post("/addBooks.json", addNewBookService)
                .then(response => {
                    // console.log("Add Book Handler inside");
                    this.setMembersToNull();
                    const bookState = this.state.newBook;
                    let concateBooks = [
                        ...bookState,
                        parameters
                    ];
                    this.limit = this.limit + 1;
                    this.setState({newBook : concateBooks});
                }).catch(error => {
                    console.log(error, "i have got an error");
                });
        }
    }

    updateTitleField = (key, event) => {
        const bookState = this.state.otherBooks;
        bookState.splice(key, 1, {title : event.target.value, description : bookState[key].description});
        this.setState({otherBooks : bookState});
    }

    updateDescField = (key, event) => {
        const bookState = this.state.otherBooks;
        bookState.splice(key, 1, {title : bookState.title, description : event.target.value});
        this.setState({otherBooks : bookState});
    }

    updateBookHandler = (key) => {
        const bookState = this.state.otherBooks[key];
        axios.post("https://jsonplaceholder.typicode.com/posts/3", {"userId": 1, "id": key, "title" : bookState.title, "body" : bookState.description})
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error, "i have got an error");
            });
    }

    onInputTitle = (event) => {
        const addBookData = {...this.state.addBook};
        addBookData.title.value = event.target.value;
        const titleCheckFlag = this.checkFormValidationFields(addBookData.title);
        this.setState({addBook : addBookData});
    }

    onInputAuthor = (event) => {
        const addBookData = {...this.state.addBook};
        addBookData.author.value = event.target.value;
        const titleCheckFlag = this.checkFormValidationFields(addBookData.author);
        this.setState({addBook : addBookData});
    }

    onInputDescription = (event) => {
        const addBookData = {...this.state.addBook};
        addBookData.description.value = event.target.value;
        const titleCheckFlag = this.checkFormValidationFields(addBookData.description);
        this.setState({addBook : addBookData});
    }

    makeNewBookContent = () => {
        return <AddBook 
                addBook={this.state.addBook}
                changeTitle={this.onInputTitle.bind(this)}
                changeAuthor={this.onInputAuthor.bind(this)}
                changeDescription={this.onInputDescription.bind(this)}
                addBookHandler={this.addBookHandler.bind(this)}>
            </AddBook>
    }

    fetchNewBookContent = () => {
        const booksState = this.state.otherBooks;
        if(booksState.length > 0){
            return booksState.map((bvalue, bkey) => {
                return <ReadBook title={bvalue.title}
                            description={bvalue.description}
                            id={bvalue.id}
                            key={bkey}
                            allDataLength={this.allBooksData.length}
                            indexLength={this.limit}>
                    </ReadBook>
            });
        }
        return null;
    }

    updateBookContent = () => {
        const booksState = this.state.otherBooks;
        if(booksState.length > 0){
            return booksState.map((bvalue, akey) => {
                return <UpdateBook title={bvalue.title}
                            description={bvalue.description}
                            key={akey}
                            updateBookHandler={this.updateBookHandler.bind(this, akey)}
                            onChangeTitle={this.updateTitleField.bind(this, akey)}
                            onChangeDesc={this.updateDescField.bind(this, akey)}
                            allDataLength={this.allBooksData.length}
                            indexLength={this.limit}>
                    </UpdateBook>
            });
        }
        return null;
    }

    render(){
        console.log("render of book shop");
        let newBookContent = this.makeNewBookContent();
        let fetchBookContents = this.fetchNewBookContent();
        let updateBookContents = this.updateBookContent();
        return (
            <div>
                <section className="header">
                    <Links/>
                </section>
                <Switch>
                    {/*<Redirect from="/view-posts" to="/extra-view-posts" />*/}
                    <Route path="/" exact render={() => 
                            <div>
                                <h1>Home</h1>
                                <p>Navigate to above links to see working</p>
                            </div>
                        }>
                    </Route>
                    <Route path="/view-posts" exact render={() => 
                            <div>
                                <h1>Our Books</h1>
                                <div>
                                    {fetchBookContents}
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route path="/add-posts" exact render={() => 
                            <div>
                                <h1>Add Books</h1>
                                <div>
                                    {newBookContent}
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route path="/update-posts" exact render={() => 
                            <div>
                                <h1>Update Books</h1>
                                <div>
                                    {updateBookContents}
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route path="/extra-view-posts" component={asyncExtraBookComponent}>
                    </Route>
                    <Route path="/view-posts/:id" exact component={BookDetail}></Route>
                    <Route render={() => <h1>Command not found !!!!!</h1>} ></Route>
                    {/*<Redirect from="/" to="/extra-view-posts" />*/}
                </Switch>
            </div>
        );
    }
}

export default withClass(BookShop, "add-books");