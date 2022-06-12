import React, { Component } from 'react'

export default class MovieItemColumnn extends Component {
    
    render() {
        
        return (
            <thead>
                <tr style={{ cursor: "pointer" }}>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">
                        <i className="fa-solid fa-sort-up" onClick={this.props.handleSortByStock}></i>
                        Stock
                        <i className="fa-solid fa-sort-down" onClick={this.props.handleSortByStock}></i>
                    </th>
                    <th scope="col">
                        <i className="fa-solid fa-sort-up" onClick={this.props.handleSortByRating}></i>
                        Rating
                        <i className="fa-solid fa-sort-down" onClick={this.props.handleSortByRating}></i>
                    </th>
                </tr>
            </thead>
        )
    }
}
