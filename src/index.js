import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Video from "./video";
import Frontpage from "./frontpage.js";
import Notfound from "./components/notfound.js";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/video" component={Video} />
        <Route path="/game" component={App} />
        <Route exact path="/" component={Frontpage} />
        <Route component={Notfound} />
      </Switch>
      <Alert stack={{ limit: 3 }} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
