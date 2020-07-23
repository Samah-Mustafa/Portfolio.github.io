import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Works } from './Works';
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
            <Route path="/works" component={Works} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Router>
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