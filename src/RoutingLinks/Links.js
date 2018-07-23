import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class Links extends Component{

    render(){
        return (
            <div className="routers">
                <ul>
                    <li><NavLink exact activeClassName="my-active" activeStyle={{
                        color: "red",
                        textDecoration : "underline",
                    }} to="/">Home</NavLink></li>
                    <li><NavLink exact activeClassName="my-active" activeStyle={{
                        color: "green",
                        textDecoration : "underline",
                    }} to={{
                        pathname : "/view-posts",
                    }}>View</NavLink></li>
                    <li><NavLink exact activeClassName="my-active" activeStyle={{
                        color: "yellow",
                        textDecoration : "underline",
                    }} to={{
                        pathname : "/add-posts",
                    }}>Add</NavLink></li>
                    <li><NavLink exact activeClassName="my-active" activeStyle={{
                        color: "blue",
                        textDecoration : "underline",
                    }} to={{
                        pathname : "/update-posts",
                    }}>Update</NavLink></li>
                    <li><NavLink activeClassName="my-active" activeStyle={{
                        color: "#fa923f",
                        textDecoration : "underline",
                    }} to={{
                        pathname: "/extra-view-posts",
                    }}>Extra</NavLink></li>
                </ul>
            </div>
        )
    }
} 

export default Links;