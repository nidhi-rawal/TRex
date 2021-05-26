import React, { useEffect, useState } from "react";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonRouterOutlet,
  IonSpinner,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import LoginUser from "./pages/LoginUser";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { getCurrentUser } from "./firebaseConfig";

/* Theme variables */
import "./theme/variables.css";
import { Redirect, Route, Switch } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
import { IonReactRouter } from "@ionic/react-router";
import { useDispatch } from "react-redux";
import { setUserState } from "./redux/actions";
import TrexMenu from "./components/TrexMenu";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  const [busy, setBusy] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((user: any) => {
      if (user) {
        dispatch(setUserState(user.email));
        window.history.replaceState({}, "", "/dashboard");
        setLoggedIn(true);
      } else {
        window.history.replaceState({}, "", "/");
        setLoggedIn(false);
      }
      setBusy(false);
    });
  }, []);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TRex</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {busy ? (
          <IonSpinner></IonSpinner>
        ) : (
          
              !loggedIn ? (
                <IonReactRouter>
                  <IonRouterOutlet>
                    <>
                      <Route path="/loginUser" component={LoginUser}></Route>
                      <Route path="/registerUser" component={RegisterUser}></Route>
                      <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/loginUser"></Redirect>}
                      ></Route>
                    </>
                    </IonRouterOutlet>
              </IonReactRouter>
              ) : (
                <IonReactRouter>
                  <IonSplitPane contentId="main">
                    <TrexMenu></TrexMenu>
                    <IonRouterOutlet id="main">
                      <Switch>
                        <Route path="/dashboard" component={Dashboard}></Route> 
                      </Switch>
                    </IonRouterOutlet>
                  </IonSplitPane>
                  <Route path="/loginUser" component={LoginUser}></Route> 
              </IonReactRouter>
              )
            
        )}
      </IonContent>
    </IonApp>
  );
};

export default App;
