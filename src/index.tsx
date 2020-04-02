import "./styles/style.scss";

import "@babel/polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  HashRouter as Router
} from "react-router-dom";


import Main from "./main";


ReactDOM.render(
    <Router>
        <Main />
    </Router>,
    document.getElementById("main"),
);