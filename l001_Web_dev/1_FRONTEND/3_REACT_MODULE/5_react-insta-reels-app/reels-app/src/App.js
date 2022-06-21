import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Feed from './components/Feed';
import AuthProvider, { AuthContext } from './contexts/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <PrivateRoute path="/profile" comp={Profile}></PrivateRoute>
            <PrivateRoute path="/" exact comp={Feed}></PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

// private route component
function PrivateRoute(props) {
  const Component = props.comp;
  const { currentUser } = useContext(AuthContext);

  return (
    <Route {...props} render={(props) => {
      // if user is signed in -> display Component
      // otherwise show login page
      return currentUser != null ? <Component {...props}></Component> : <Redirect to="/login"></Redirect>
    }}></Route>
  )
}
export default App