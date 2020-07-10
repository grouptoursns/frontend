import React from "react";
import NavBar from "./home/navBar/navBar.js";
import Footer from "./home/footer/footer.js";
import Home from "./home/home.js";
import ResultSearch from "./result-search/result-search.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
        <Route path="/result_search" component={ResultSearch} />
        <Route exact path="/" component={Home} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};
export default App;
