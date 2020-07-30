import React, { Component } from 'react';
import axios from 'axios';
import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from "../portfolio/portfolio-form";

export default class extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        //to do
        //update the portfolioItem state
        //and add to the portfolioItem list.
    }

    handleFormSubmissionError(error) {
        console.log("handle form submission error", error);
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
                    <PortfolioForm 
                    handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                    handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        )       
    }
}