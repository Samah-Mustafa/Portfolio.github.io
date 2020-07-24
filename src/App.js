import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Works } from './Works';
// import { NoMatch } from './NoMatch';
// import { NavigationBar } from './components/NavigationBar'


function App() {
  return (
    <React.Fragment>
      <HashRouter basename='/'>
      <div className="background">   
        <div>
          <ul className="nav1">
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/works">Works</Link></li>
            <li><Link className="link" to="/contact">Contact</Link></li>
          </ul>
        </div>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
      </div> 
        
      </HashRouter>
    </React.Fragment>
  );
}



export default App;





// return (
//   <React.Fragment>
//   <NavigationBar />
//   <Jumbotron />
//     <Layout>
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//           <Route component={NoMatch} />
//         </Switch>
//       </Router>
//     </Layout>
//   </React.Fragment>
// );


// <React.Fragment>
//     <NavigationBar />
//         <Router>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/folio" component={Folio} />
//             <Route component={NoMatch} />
//           </Switch>
//         </Router>
//     </React.Fragment>












// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>