import React from "react";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "./App.css";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}

        <Switch>
          <Route exact path="/">
            <h1>Hello from Home</h1>
          </Route>
          <Route exact path="/about">
            <h1>Hello from About</h1>
          </Route>
          <Route exact path="/contact" component={Form} />
          {/* <Route exact path="/contact">
            <Form />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
