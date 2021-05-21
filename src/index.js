import React from 'react';
import ReactDOM from 'react-dom';
import { Landingpage } from "./Landingpage";
import {Applayout} from "./app.layout";
import {ProtectedRoute} from "./protected.route";
import {BrowserRouter,Route, Switch} from "react-router-dom";


function App(){
  return(
    <div classname="App">
      <h1>Protected React Route </h1>
        
        <Switch><Route exact path="/" component={ Landingpage }/>
        <ProtectedRoute 
        exact 
        path="/app"
        component={Applayout}
        />
        <Route path="*" component ={() =>"404 not found"}/>
        </Switch>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>, 
rootElement);

