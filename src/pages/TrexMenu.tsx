import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Route, useHistory, withRouter } from "react-router";
import { logout } from "../firebaseConfig";
import Dashboard from "./Dashboard";
import "./TrexMenu.css";

const TrexMenu: React.FC = () => {
  const history = useHistory();
  async function logingout() {
    await logout();
    window.history.replaceState({}, "", "/loginUser");
    // setLoggedIn(false);
  }
  return (
    <IonMenu side="start" menuId="menu" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem href="./dashboard">
          <IonLabel>Dashboard</IonLabel>
        </IonItem>
        <IonItem onClick={logingout} button>
          <IonLabel>Logout</IonLabel>
        </IonItem>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(TrexMenu);
