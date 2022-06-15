import logo from './logo.svg';
import './App.css';
import MoviePage from './component/MoviePage';
import NavBar from './component/NavBar';
import New from './component/New';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Switch>
          <Route path="/movie" component = {MoviePage}></Route>
          <Route path="/new" component={New}></Route>
          <Redirect from="/" to = "/movie"></Redirect>
      </Switch>
    </>
  );
}

export default App;
