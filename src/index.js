import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./Header";
import Footer from "./Footer";
import City from "./City";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container-fluid">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/city/:id">
              <City />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
