import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';


const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return(
            <div className="nav-link-wrapper" activeClassName="nav-link-active">
            <NavLink to={route}>
                {linkText}
            </NavLink>
            </div>
        )
    }

    const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", { withCredentials: true }).then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        })
        .catch(error => {
            console.log("Error Signing Out", error);
        });
    };

    return (
            <div className="nav-wrapper">
                <div className="left-side">
                
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper" activeClassName="nav-link-active"> 
                    <NavLink to="/about-me">
                        About
                    </NavLink>
                </div>

                <div className="nav-link-wrapper" activeClassName="nav-link-active">
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </div>

                <div className="nav-link-wrapper" activeClassName="nav-link-active">
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink ("/portfolio-manager", "Portfolio Manager") : null}
            </div>

                <div className = "right-side">
                    ELINOR CLARK
                
                    {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>Sign Out</a> : null}
                </div>            
            </div>
        )
    }
export default withRouter(NavigationComponent);