import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './DesignerClub.css';

const DesignerClub: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Designer Club</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Designer Club</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Designer Club page" />
      </IonContent>
    </IonPage>
  );
};

export default DesignerClub;
