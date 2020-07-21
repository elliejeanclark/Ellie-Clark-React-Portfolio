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
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('ArcTrooper')}>
                    Arc Trooper
                </button>
                <button onClick={() => this.handleFilter('Captain')}>
                    Captain
                </button>
                <button onClick={() => this.handleFilter('Commander')}>
                    Commander
                </button>

                <div className="portfolio-items-wrapper">
                {this.portfolioitems()}
                </div>
            </div>
        )
    }
}