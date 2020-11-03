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
                        <Route exact path="/tourspage" component={General}/>
                        <Route path="/tourspage/itinerary" component={Itinerary}/>
                        <Route path="/tourspage/inclusions" component={Inclusions}/>
                        <Route path="/tourspage/guide" component={Guide}/>
                        <Route path="/tourspage/meet" component={Meet}/>
                        <Route path="/tourspage/reviews" component={Reviews}/>
                    </Switch>
            </div>
        </div>
    )
}
export default Info;