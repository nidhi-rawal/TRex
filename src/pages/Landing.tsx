import {
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Dashboard from "./Dashboard";
import TrexMenu from "../components/TrexMenu";
import LoginUser from "./LoginUser";

const Landing: React.FC = () => {
  return (
    <IonReactRouter>
        <IonSplitPane contentId="main">
          <TrexMenu></TrexMenu>
          <IonRouterOutlet id="main">
            <Switch>
              <Route path="/dashboard" component={Dashboard}></Route> 
              <Route path="/loginUser" component={LoginUser}></Route> 
            </Switch>
          </IonRouterOutlet>
        </IonSplitPane>
    </IonReactRouter>
  );
};

export default Landing;
