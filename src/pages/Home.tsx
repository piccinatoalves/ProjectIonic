import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import NameSetter from '../components/NameSetter';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AulaFibHibrido</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <NameSetter 
        label="Seu Nome"
        placeholder="Digite Seu Nome"
        buttonTitle="Salvar" />
        <NameSetter
        label="Sua Mae"
        placeholder="Digite o nome da sua Mae"
        buttonTitle="Salvar sua Mae" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
