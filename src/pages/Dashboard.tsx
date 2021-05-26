import React from "react";
import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Dashboard.css";
import { Redirect, Route } from "react-router";
import { IonReactRouter } from "@ionic/react-router";
import ToyClub from "./ToyClub";
import BookClub from "./BookClub";
import DesignerClub from "./DesignerClub";
import { useSelector } from "react-redux";

const Dashboard: React.FC = () => {
  const username = useSelector((state: any) => state.user.username);
  
  return (
    <IonPage>
      <IonReactRouter>
        <IonRouterOutlet>
          <IonContent fullscreen className="ion-padding">
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Dashboard</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonLabel>Welcome {username}</IonLabel>
              <IonReactRouter>
                <IonTabs>
                  <IonRouterOutlet>
                    <Route
                      path="/toyClub"
                      component={ToyClub}
                      exact={true}
                    ></Route>
                    <Route
                      path="/bookClub"
                      component={BookClub}
                      exact={true}
                    ></Route>
                    <Route
                      path="/designerClub"
                      component={DesignerClub}
                    ></Route>
                    <Route
                      path="/"
                      render={() => <Redirect to="/toyClub" />}
                      exact={true}
                    />
                  </IonRouterOutlet>
                  <IonTabBar slot="bottom">
                    <IonTabButton tab="toyClub" href="/toyClub">
                      <IonLabel>Toy Club</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="bookClub" href="/bookClub">
                      <IonLabel>Book Club</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="designerClub" href="/designerClub">
                      <IonLabel>Designer Club</IonLabel>
                    </IonTabButton>
                  </IonTabBar>
                </IonTabs>
              </IonReactRouter>
            </IonContent>
          </IonContent>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonPage>
  );
};

export default Dashboard;
