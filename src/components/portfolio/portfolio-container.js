import React, { Component } from "react";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome To My Portfolio" ,
            data: [
                { title: "Rex" },
                { title: "Cody" }, 
                { title: "Fives" }, 
                { title: "Echo" }
            ]
        };
    }

    portfolioitems() {
        return this.state.data.map(item => {
            return <PortfolioItem title = {item.title} url = {"google.com"} />
        });
    }

    render () {
        return (
            <div>
                <h2>Portfolio Items Go Here...</h2>

                {this.portfolioitems()}
            </div>
        )
    }
}