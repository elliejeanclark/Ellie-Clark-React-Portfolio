import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome To My Portfolio" ,
            isLoading: false ,
            data: []
        };
    }

    getPortfolioItems() {
        axios
          .get("https://elliejeanclark.devcamp.space/portfolio/portfolio_items")
          .then(response => {
            this.setState({
                data: response.data.portfolio_items
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
      
    portfolioitems() {
        return this.state.data.map(item => {
            return ( 
            <PortfolioItem 
            key = {item.id} 
            item = {item}
            />
            );
        });
    
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render () {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (

            <div className="portfolio-items-wrapper">
                
                <div className="portfolio-btn-wrapper">
                    <button className="btn" onClick={() => this.handleFilter('Music')}>
                        Music
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Work')}>
                        Work
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Education')}>
                        Education
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('volunteering')}>
                        Volunteering
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Sports')}>
                        Sports
                    </button>
                </div>
                
                <div className="home-items-wrapper">
                    {this.portfolioitems()}
                </div>
            </div>
        )
    }
}