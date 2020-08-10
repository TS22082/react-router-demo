import React from "react";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "./App.css";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <Switch>
          <Route exact path="/">
            <Text message="from home page" />
          </Route>
          <Route exact path="/about">
            <Text message="from about page" />
          </Route>
          <Route exact path="/contact" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
