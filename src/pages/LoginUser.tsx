import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/react";
import { alert as alertIcon } from "ionicons/icons";
import "./LoginUser.css";
import { Link, Route } from "react-router-dom";
import { loginUser } from "../firebaseConfig";
import { IonReactRouter } from "@ionic/react-router";
import Dashboard from "./Dashboard";
import { setUserState } from "../redux/actions";
import { useDispatch } from "react-redux";

const LoginUser: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function login() {
    const res: any = await loginUser(username, password);
    if (res.message) {
      setErrorMessage(res.message);
    } else {
      dispatch(setUserState(res.user.email));
      window.history.replaceState({}, "", "/dashboard");
      setErrorMessage("");
      document.title ='Dashboard';
      setIsLoggedIn(true);
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                {errorMessage ? (
                  <IonIcon icon={alertIcon} color="danger"></IonIcon>
                ) : null}
                <IonLabel color="danger">{errorMessage}</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="floating">Username</IonLabel>
              </IonCol>
              <IonCol>
                <IonInput
                  placeholder="Enter your username"
                  onIonChange={(e: any) => setUsername(e.target.value)}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="floating">Password</IonLabel>
              </IonCol>
              <IonCol>
                <IonInput
                  type="password"
                  onIonChange={(e: any) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel>Not a user?</IonLabel>
                <Link to="/registerUser">Register Here!</Link>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="2">
                <IonButton onClick={login}>Login</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
        {isLoggedIn && (
            <IonReactRouter>
              <IonRouterOutlet>
                <Route path="/dashboard" component={Dashboard}></Route>
              </IonRouterOutlet>
            </IonReactRouter>
          )}
      </IonContent>
    </IonPage>
  );
};

export default LoginUser;
