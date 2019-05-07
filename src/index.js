import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './redux';
import ReactDOMServer from 'react-dom/server';

import App from "./components/AppWithoutRedux";
import AppWithRedux from "./components/AppWithRedux";
import { AppMadeWithHooks, AppMadeWithClass } from '../snippets/exercises';
  

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
