import React, { Component } from 'react'
import { getMovies } from './MovieService'
export default class MoviePage extends Component {
    state = {
        movies: getMovies()
    }

    deleteMovieItem = (id) => {
        let filteredMovies = this.state.movies.filter((moviesObj) => {
            return moviesObj._id != id;
        })

        this.setState({
            movies: filteredMovies
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-3"></div>
                <div className="col-9">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.movies.map((moviesObj) => {
                                    return (
                                        <tr scope="row" key={moviesObj._id}>
                                            <td>{moviesObj.title}</td>
                                            <td>{moviesObj.genre.name}</td>
                                            <td>{moviesObj.numberInStock}</td>
                                            <td>{moviesObj.dailyRentalRate}</td>
                                            <td><button type="button" className ="btn btn-danger" onClick={() => {this.deleteMovieItem(moviesObj._id)}}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}
