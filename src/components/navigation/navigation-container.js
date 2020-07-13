import React, { Component } from 'react';

export default class NavigationComponent extends Components {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Blog</button>
                <button>Add Blog</button>
            </div>
        )
    }
}