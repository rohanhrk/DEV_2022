import logo from './logo.svg';
import './App.css';
import auth from './firebase';
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './components/Feed';
import AuthContext, { AuthProvider } from './context/AuthContext';
import { useContext } from 'react';
let isSignup = true;
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>

          {/* make feed protective from other user */}
          <PrivateRoute path="/" exact comp={Feed}></PrivateRoute>
        </Switch>
      </AuthProvider>
    </Router>
  );
}


function PrivateRoute(parentProps) {
  let { currentUser } = useContext(AuthContext);
  console.log("In privatev route", currentUser);

  const Component = parentProps.comp;
  return (
    <Route {...parentProps} render={
      (parentProps) => {
        return (
          currentUser != null ? <Component {...parentProps}></Component> : <Redirect to="/login"></Redirect>
        )
      }
    }>

    </Route>
  )
}

export default App;
