import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './BookClub.css';

const BookClub: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Book Club</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Book Club</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Book Club page" />
      </IonContent>
    </IonPage>
  );
};

export default BookClub;
