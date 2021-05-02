import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { alert as alertIcon } from "ionicons/icons";
import "./RegisterUser.css";
import { Link } from "react-router-dom";
import { register } from "../firebaseConfig";

const RegisterUser: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function registeringUser() {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !username.trim() ||
      !password.trim()
    ) {
      setErrorMessage("Please enter all required fields");
      setSuccessMessage("");
    } else if (password !== confirmPassword) {
      setErrorMessage("Your passwords don't match");
      setSuccessMessage("");
    } else {
      const res = await register(username, password);
      if (res.message) {
        setErrorMessage(res.message);
        setSuccessMessage("");
      } else {
        setErrorMessage("");
        setSuccessMessage("Registration successful, please try to login now!");
      }
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                {errorMessage && (
                  <IonIcon icon={alertIcon} color="danger"></IonIcon>
                )}
                <IonLabel color="danger">{errorMessage}</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                {successMessage && (
                  <IonIcon icon={alertIcon} color="success"></IonIcon>
                )}
                <IonLabel color="success">{successMessage}</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="floating">First Name</IonLabel>
                <IonLabel>*</IonLabel>
              </IonCol>
              <IonCol>
                <IonInput
                  placeholder="Enter your first name"
                  onIonChange={(e: any) => setFirstName(e.target.value)}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="floating">Last Name</IonLabel>
                <IonLabel>*</IonLabel>
              </IonCol>
              <IonCol>
                <IonInput
                  placeholder="Enter your last name"
                  onIonChange={(e: any) => setLastName(e.target.value)}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="floating">Username</IonLabel>
                <IonLabel>*</IonLabel>
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
                <IonLabel>*</IonLabel>
              </IonCol>
              <IonCol>
                <IonInput
                  type="password"
                  placeholder="Enter your password"
                  onIonChange={(e: any) => setPassword(e.target.value)}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonLabel>*</IonLabel>
              </IonCol>
              <IonCol>
                <IonInput
                  type="password"
                  placeholder="Enter re-enter your password"
                  onIonChange={(e: any) => setConfirmPassword(e.target.value)}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel>Already a user?</IonLabel>
                <Link to="/loginUser">Login Here!</Link>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="3">
                <IonButton onClick={registeringUser}>Register</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default RegisterUser;
