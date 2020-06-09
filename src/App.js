import React from 'react';
import Navigation from './components/Navigation/Navigation'
import { Router, Switch, Route, } from 'react-router-dom'
import { createBrowserHistory, } from 'history'
import Homepage from './components/Homepage/Homepage'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'


function App() {

  const history = createBrowserHistory()

  return (
    <div> 
        <Navigation />
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/homepage" component={Homepage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
            </Switch>
        </Router>
   </div>
  );
}

export default App;
