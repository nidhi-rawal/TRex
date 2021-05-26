import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useHistory, withRouter } from "react-router";
import { logout } from "../firebaseConfig";
import "./TrexMenu.css";

const TrexMenu: React.FC = () => {
  const history = useHistory();
  async function logingout() {
    await logout();
    history.push("./loginUser");
  }
  return (
    <IonMenu side="start" menuId="menu" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonMenuToggle autoHide={false}>
          <IonItem routerLink="./dashboard">
            <IonLabel>Dashboard</IonLabel>
          </IonItem>
        </IonMenuToggle>
        <IonMenuToggle autoHide={false}>
          <IonItem onClick={logingout} button>
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(TrexMenu);
