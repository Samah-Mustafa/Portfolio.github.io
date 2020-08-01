import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Folio } from './Folio';
// import { NoMatch } from './NoMatch';

function App() {
  return (
    <React.Fragment>
        <HashRouter basename='/'>
        <div className="nav">
         <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/folio">Works</Link></li>
          <li><Link to="/contact">Contact</Link></li>
         </ul>
         <hr />
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/folio" component={Folio} />
         <Route path="/contact" component={Contact} />
        </div>
       </HashRouter>
       </React.Fragment>
  
  );
}

export default App;



// <React.Fragment>
// <NavigationBar />
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/folio" component={Folio} />
//         <Route component={NoMatch} />
//       </Switch>
//     </Router>
// </React.Fragment>