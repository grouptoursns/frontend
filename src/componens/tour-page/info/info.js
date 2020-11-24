import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './info.css'
import Tabs from "./tabs/tabs.js";
import General from "./general/general";
import Itinerary from "./itinerary/itinerary";
import Guide from "./guide/guide";
import Meet from "./meet/meet";
import Reviews from "./reviews/reviews";
import Inclusions from "./inclusions/inclusions";

const Info = (props) =>{

    return(
        <div className='info'>
            <div>
                <Tabs info={props.info} />
                    <Switch>
                        <Route exact path="/tourspage/:id" component={General}/>
                        <Route path="/tourspage/:id/itinerary" component={Itinerary}/>
                        <Route path="/tourspage/:id/inclusions" component={Inclusions}/>
                        <Route path="/tourspage/:id/guide" component={Guide}/>
                        <Route path="/tourspage/:id/meet" component={Meet}/>
                        <Route path="/tourspage/:id/reviews" component={Reviews}/>
                    </Switch>
            </div>
        </div>
    )
}
export default Info;