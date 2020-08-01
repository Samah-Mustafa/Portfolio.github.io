import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Folio } from './Folio';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './components/NavigationBar'

function App() {
  return (
    <React.Fragment>
    <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/folio" component={Folio} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;