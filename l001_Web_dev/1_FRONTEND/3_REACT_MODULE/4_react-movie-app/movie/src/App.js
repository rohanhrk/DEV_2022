import logo from './logo.svg';
import './App.css';
import MoviePage from './component/MoviePage';
import NavBar from './component/NavBar';
import New from './component/New';
import { Redirect, Route, Switch } from 'react-router-dom';

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    moviesArr: [],
  }
  handleDeleteMovieItem = (id) => {
    let filteredMovies = this.state.moviesArr.filter((moviesObj) => {
      return moviesObj._id !== id;
    })

    this.setState({
      moviesArr: filteredMovies
    })
  }

  addMovie = (listObj) => {
    let { title, genre, stock, rate } = listObj;
    let genreObj = [{ _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
                    { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
                    { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" }];

    for(let i = 0; i < 3; i++) {
      if(genreObj[i].name == genre) {
        genre = genreObj[i];
        break;
      }
    }

    let movieObj = {
      _id: Date.now(),
      title: title,
      genre: genre,
      numberInStock: stock,
      dailyRentalRate: rate,
    }

    let copy_of_movie = [...this.state.moviesArr, movieObj]; 
    this.setState({
      moviesArr: copy_of_movie
    })
  }
  componentDidMount() {
    let backendMovieDataPromise = fetch("https://react-backend101.herokuapp.com/movies");
    backendMovieDataPromise.then((moviesData) => {
      moviesData.json().then((jsonMoviesObj) => {
        this.setState({
          moviesArr: jsonMoviesObj.movies
        })
      })
    })
  }
  render() {
    return (
      <>
        <NavBar></NavBar>
        <Switch>
          <Route path="/movie" render={(props) => {
            return (
              <MoviePage {...props} moviesArr={this.state.moviesArr} handleDeleteMovieItem={this.handleDeleteMovieItem} />
            )
          }}></Route>
          <Route path="/new" render={(props) => {
            return(
              <New {...props} addMovie = {this.addMovie}/>
            )
          }}></Route>
          <Redirect from="/" to="/movie"></Redirect>
        </Switch>
      </>
    )
  }
}

