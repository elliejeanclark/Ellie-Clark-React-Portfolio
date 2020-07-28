import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return(
            <div className="nav-link-wrapper" activeClassName="nav-link-active">
            <NavLink to="/blog">
                Blog
            </NavLink>
            </div>
        )
    }

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

                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink ("/blog", "Blog") : null}
            </div>

                <div className = "right-side">
                    ELINOR CLARK
                </div>            
            </div>
        )
    }
export default NavigationComponent;