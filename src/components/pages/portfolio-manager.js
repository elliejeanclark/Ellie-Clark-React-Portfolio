import React, { Component } from 'react';
import axios from 'axios';
import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';

export default class extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };
    }

    getPortfolioItems() {
        axios.get("https://elliejeanclark.devcamp.space/portfolio/portfolio_items", { withCredentials : true
    }).then(response => {
        this.setState({
            portfolioItems: [...response.data.portfolio_items]
        })
    }).catch(error => {
        console.log("error in get portfolio items", error);
    }) 
    }
    
    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>Portfolio Left Form Section</h1>
                </div>

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        )       
    }
}