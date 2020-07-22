import React from "react";
import NavBar from "./componens/home/navBar/navBar.js";
import Footer from "./componens/home/footer/footer.js";
import Home from "./componens/home/home.js";
import ResultSearch from "./componens/result-search/result-search.js";
import Destinations from "./componens/destinations/destinations.js";
import Activity from "./componens/activity/activity.js";
import NotFound from "./componens/notFound/notFound.js";
import Tour from "./componens/tour-page/tour.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
        <Route path="/result_search" component={ResultSearch} />
        <Route exact path="/" component={Home} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/activity" component={Activity} />
        <Route path="/tourspage"  component={Tour} />
        <Route  component={NotFound} />
        
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};
export default App;
