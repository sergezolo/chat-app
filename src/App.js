import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
          <section className="chat-container">
            <Switch>
              <Redirect exact from='/' to='/signin'/>
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              
              
              <Route component={() => 404} />
            </Switch>
          </section>
      </Router>
    </div>
  );
}

export default App;
