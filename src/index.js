// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import About from './about'
import Contact from './contact'
import Test from './redComponents/reduxComp';
import { createStore } from "redux";
import { Provider } from 'react-redux';
//import { store } from './redux2';
import { testReducer } from "./redComponents/reducer";
//import AppContainer from './redux';

//const store = configureStore();
// const App = () => {
//   return (
//     <React.Fragment>
//       <Test />
//     </React.Fragment>
//   );
// };
const store = createStore(testReducer);
const routing = (
  <Provider  store={store}>
  <Router>
    <div>
      <ul >
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/reduxComp">Redux</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} /> 
     <Route path="/reduxComp" component={Test} /> 
    </div>
    
  </Router>
  
  </Provider>
)
ReactDOM.render(routing, document.getElementById('root'))