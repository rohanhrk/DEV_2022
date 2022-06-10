import React, { Component } from 'react'
import { getMovies } from './MovieService'
export default class MoviePage extends Component {
    state = {
        moviesArr: getMovies(),
        currentInputText: "",
        currentPageNo: 1,
        limitMovieOnPage: 5,

        sortStockUp: false,
        sortStockDown: false,
        sortRatingUp: false,
        sortRatingDown: false
    }

    handleDeleteMovieItem = (id) => {
        let filteredMovies = this.state.moviesArr.filter((moviesObj) => {
            return moviesObj._id !== id;
        })

        this.setState({
            moviesArr: filteredMovies
        })
    }

    handleMoviesFilter = (e) => {
        let text = e.target.value;

        this.setState({
            currentInputText: text
        })
    }

    handleSortByStock = (e) => {
        let { sortStockUp, sortStockDown, sortRatingUp, sortRatingDown } = this.state;
        let className = e.currentTarget.className;

        if (className === "fa-solid fa-sort-up") {
            this.setState({
                sortStockUp: true,
                sortStockDown: false,
                sortRatingUp: false,
                sortRatingDown: false
            })

        } else {
            this.setState({
                sortStockUp: false,
                sortStockDown: true,
                sortRatingUp: false,
                sortRatingDown: false
            })
        }

    }

    handleSortByRating = (e) => {
        let { sortRatingUp, sortRatingDown, sortStockUp, sortStockDown } = this.state;
        let className = e.currentTarget.className;

        if (className === "fa-solid fa-sort-up") {
            this.setState({
                sortRatingUp: true,
                sortRatingDown: false,
                sortStockUp: false,
                sortStockDown: false,
            })
        } else {
            this.setState({
                sortRatingUp: false,
                sortRatingDown: true,
                sortStockUp: false,
                sortStockDown: false,
            })
        }

    }

    handlePaginamtion = (curr_page_no) => {
        this.setState({
            currentPageNo: curr_page_no
        });
    }

    render() {

        let { moviesArr, currentInputText, limitMovieOnPage, currentPageNo } = this.state;

        // 1. pagination page =>
        let totalMovieItem = moviesArr.length;
        let size = Math.ceil(totalMovieItem / limitMovieOnPage);

        let pageArr = []; // store required page no [1, 2, 3, 4, 5, .....]
        for (let i = 0; i < size; i++) {
            pageArr.push(i + 1);
        }
        let startIdx = (currentPageNo - 1) * limitMovieOnPage; // staring index of movieItm which is view on the page
        let endIdx = startIdx + limitMovieOnPage - 1; // ending index of movieItm which is view on the page
        // filtering moviesArr array from start index to ending index
        let filteredMovieArr = moviesArr.slice(startIdx, endIdx + 1);

        // 2. filter Movie on the basis of text entered =>
        filteredMovieArr = filteredMovieArr.filter((moviesObj) => {
            let title = moviesObj.title.trim().toLowerCase();
            return title.startsWith(currentInputText.trim().toLowerCase());
        })

        // 3. sort by stock
        let { sortStockUp, sortStockDown, sortRatingUp, sortRatingDown } = this.state;
        if (sortStockUp === true) {
            filteredMovieArr = filteredMovieArr.sort((a, b) => {
                return a.numberInStock - b.numberInStock;
            })
        } else if (sortStockDown === true) {
            filteredMovieArr = filteredMovieArr.sort((a, b) => {
                return b.numberInStock - a.numberInStock;
            })
        }

        // 4. sort by ratings
        if (sortRatingUp === true) {
            filteredMovieArr = filteredMovieArr.sort((a, b) => {
                return a.dailyRentalRate - b.dailyRentalRate;
            })
        } else if (sortRatingDown == true) {
            filteredMovieArr = filteredMovieArr.sort((a, b) => {
                return b.dailyRentalRate - a.dailyRentalRate;
            })
        }

        return (
            <div className="row">
                <div className="col-3"></div>
                <div className="col-9">
                    <div className="filter-container">
                        <input type="search" value={currentInputText} placeholder="Enter" onChange={this.handleMoviesFilter}></input>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">
                                    <i className="fa-solid fa-sort-up" onClick={this.handleSortByStock}></i>
                                    Stock
                                    <i className="fa-solid fa-sort-down" onClick={this.handleSortByStock}></i>
                                </th>
                                <th scope="col">
                                    <i className="fa-solid fa-sort-up" onClick={this.handleSortByRating}></i>
                                    Rating
                                    <i className="fa-solid fa-sort-down" onClick={this.handleSortByRating}></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredMovieArr.map((moviesObj) => {
                                    return (
                                        <tr scope="row" key={moviesObj._id}>
                                            <td>{moviesObj.title}</td>
                                            <td>{moviesObj.genre.name}</td>
                                            <td>{moviesObj.numberInStock}</td>
                                            <td>{moviesObj.dailyRentalRate}</td>
                                            <td><button type="button" className="btn btn-danger" onClick={() => { this.handleDeleteMovieItem(moviesObj._id) }}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                {
                                    pageArr.map((page) => {
                                        return (
                                            <li className={page === currentPageNo ? "page-item active" : "page-item"}  key={page * Math.random()} style={{cursor: "pointer"}}><a className="page-link" onClick={() => { this.handlePaginamtion(page) }}>{page}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </table>

                </div>
            </div>
        )
    }
}
