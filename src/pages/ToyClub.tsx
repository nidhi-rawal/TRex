import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ToyClub.css';

const ToyClub: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Toy Club</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Toy Club</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Toy Club page" />
      </IonContent>
    </IonPage>
  );
};

export default ToyClub;
