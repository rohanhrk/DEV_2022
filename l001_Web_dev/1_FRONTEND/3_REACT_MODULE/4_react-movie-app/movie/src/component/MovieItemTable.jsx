import React, { Component } from 'react'

export default class MovieItemTable extends Component {
    render() {
        let { filteredMovieArr } = this.props;
        return (
            <tbody>
                {
                    filteredMovieArr.map((moviesObj) => {
                        return (
                            <tr scope="row" key={moviesObj._id}>
                                <td>{moviesObj.title}</td>
                                <td>{moviesObj.genre.name}</td>
                                <td>{moviesObj.numberInStock}</td>
                                <td>{moviesObj.dailyRentalRate}</td>
                                <td><button type="button" className="btn btn-danger" onClick={() => { this.props.handleDeleteMovieItem(moviesObj._id) }}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }
}
