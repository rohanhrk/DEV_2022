import React, { Component } from 'react'
import Pagination from './Pagination'
import MovieItemTable from './MovieItemTable'
import MovieItemColumnn from './MovieItemColumnn'

// Mounting phase => constructor() -> render() -> componentDidMount();
export default class MoviePage extends Component {
    state = {
        moviesArr: [],
        generesArr: [],
        currentGenre: "All Genres",
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

    handlePagination = (curr_page_no) => {
        this.setState({
            currentPageNo: curr_page_no
        });
    }

    handleGenres = (genreName) => {
        this.setState({
            currentGenre: genreName
        })
    }

    handleCurrentMoviesLimit = (e) => {
        let inputLimit = e.currentTarget.value;
        this.setState({
            limitMovieOnPage: inputLimit
        })
    }

    // ComponenentDidMount
    componentDidMount() {
        // console.log("2");
        let backendMovieDataPromise = fetch("https://react-backend101.herokuapp.com/movies");
        backendMovieDataPromise.then((moviesData) => {
            moviesData.json().then((jsonMoviesObj) => {
                this.setState({
                    moviesArr: jsonMoviesObj.movies
                })
            })
        })

        let backendGenresDataPromise = fetch("https://react-backend101.herokuapp.com/genres");
        backendGenresDataPromise.then((ganeresData) => {
            ganeresData.json().then((jsonGenresObj) => {
                this.setState({
                    generesArr: jsonGenresObj.genres
                })
            })
        })
    }

    render() {
        // console.log("1");
        let { moviesArr, generesArr, currentGenre, currentInputText, limitMovieOnPage, currentPageNo } = this.state;

        let filteredMovieArr = moviesArr;
        // 1. display on the basis of genre
        if (currentGenre !== "All Genres") {
            filteredMovieArr = moviesArr.filter((moviesObj) => {
                return moviesObj.genre.name === currentGenre;
            })
        }

        // 2. filter Movie on the basis of text entered =>
        if (currentInputText !== "") {
            filteredMovieArr = filteredMovieArr.filter((moviesObj) => {
                let title = moviesObj.title.trim().toLowerCase();
                return title.startsWith(currentInputText.trim().toLowerCase());
            })
        }

        // 3. pagination page =>
        let totalMovieItem = filteredMovieArr.length;
        let size = Math.ceil(totalMovieItem / limitMovieOnPage);

        let pageArr = []; // store required page no [1, 2, 3, 4, 5, .....]
        for (let i = 0; i < size; i++) {
            pageArr.push(i + 1);
        }
        let startIdx = (currentPageNo - 1) * limitMovieOnPage; // staring index of movieItm which is view on the page
        let endIdx = startIdx + limitMovieOnPage - 1; // ending index of movieItm which is view on the page
        // filtering moviesArr array from start index to ending index
        filteredMovieArr = filteredMovieArr.slice(startIdx, endIdx + 1);

        // 4. sort by stock
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

        // 5. sort by ratings
        if (sortRatingUp === true) {
            filteredMovieArr = filteredMovieArr.sort((a, b) => {
                return a.dailyRentalRate - b.dailyRentalRate;
            })
        } else if (sortRatingDown === true) {
            filteredMovieArr = filteredMovieArr.sort((a, b) => {
                return b.dailyRentalRate - a.dailyRentalRate;
            })
        }

        return (
            <div className="row">
                <div className="col-3">
                    <ul className="list-group" style = {{cursor: "pointer"}}>
                        <li className="list-group-item" key={generesArr.length * Math.random()} onClick={() => { this.handleGenres("All Genres") }}>All Genres</li>
                        {
                            generesArr.map((genreObj) => {
                                return (
                                    <li className="list-group-item" key={genreObj._id}  onClick={() => { this.handleGenres(genreObj.name) }}>{genreObj.name}</li>
                                );

                            })
                        }
                    </ul>
                </div>
                <div className="col-9">
                    <div className="filter-container" style={{marginTop: "0.5rem"}}>
                        <span className="search-container" >
                            <label for="for-search" style={{ marginRight: "0.5rem" }}>Search</label>
                            <input type="search" id="for-search" value={currentInputText} style={{ marginRight: "0.5rem" }} placeholder="Enter" onChange={this.handleMoviesFilter}></input>
                        </span>
                        <span className="limit-page-container">
                            <label for="for-limit" style={{ marginRight: "0.5rem" }}>Limit</label>
                            <input type="number" className="limit" id="for-limit" style={{ marginRight: "0.5rem" }} value={limitMovieOnPage} onChange={this.handleCurrentMoviesLimit} />
                        </span>
                    </div>

                    {/* Movie table */}
                    <table className="table" >
                        {/* Movie Item column  */}
                        <MovieItemColumnn handleSortByStock={this.handleSortByStock} handleSortByRating = {this.handleSortByRating} ></MovieItemColumnn>

                        {/* Movie Item Table */}
                        <MovieItemTable handleDeleteMovieItem={this.handleDeleteMovieItem} filteredMovieArr={filteredMovieArr}></MovieItemTable>
                        {/* pagination */}
                        <Pagination pageArr={pageArr} currentPageNo={currentPageNo} handlePagination={this.handlePagination}></Pagination>

                    </table>

                </div>
            </div>
        )
    }
}






