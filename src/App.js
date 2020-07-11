import React from 'react';
import forest from './1.jpg'
// Import Ionic 5 styles
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './App.css';

import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/react';

function App() {
  return (
    <div class="container" styles={{ backgroundImage:`url(${forest})` }}>
      <div class="title">
        <h1>This is red car</h1>
        </div>
    </div>
  );
}

export default App;
