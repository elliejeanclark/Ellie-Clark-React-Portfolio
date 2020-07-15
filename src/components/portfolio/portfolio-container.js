import React, { Component } from "react";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome To My Portfolio" ,
            isLoading: false ,
            data: [
                { title: "Rex" , category: 'Captain', slug: 'Rex' },
                { title: "Ahsoka" , category: 'Commander' , slug: 'Ahsoka' }, 
                { title: "Fives" , category: 'ArcTrooper', slug: 'Fives'}, 
                { title: "Echo" , category: 'ArcTrooper', slug: 'Echo'}
            ]
        };
    }

    portfolioitems() {
        return this.state.data.map(item => {
            return <PortfolioItem title = {item.title} url = {"google.com"} slug={item.slug} />
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

                {this.portfolioitems()}
            </div>
        )
    }
}