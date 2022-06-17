import logo from './logo.svg';
import './App.css';
import auth from './firebase';
import { Switch, Route, BrowserRoute as Route, Redirect } from "react-router-dom";
import Login from '.Component/Login';
import Signup from './components/Signup';
import Feed from './components/Feed';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <PrivateRoute path="/" exact component={Feed}></PrivateRoute>
      </Switch>
    </Router>
  );
}

function PrivateRoute(parentProps) {
  let Component = parentProps.component;
  return (
    <Route {...parentProps} render={
      (props) => {
        isSignup == true ? <Component {...props}></Component> : <Redirect to="/login"></Redirect>
      }
    }>

    </Route>
  )
}

export default App;
