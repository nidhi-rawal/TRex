import {
  IonButton,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Route } from "react-router";
import Dashboard from "./Dashboard";
import TrexMenu from "./TrexMenu";

const Landing: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet id="main">
        <IonSplitPane contentId="main">
          <TrexMenu></TrexMenu>
          <IonPage id="main">
            <Route path="/dashboard" component={Dashboard}></Route> 
          </IonPage>
        </IonSplitPane>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Landing;
