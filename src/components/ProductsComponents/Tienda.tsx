import React from 'react';
import Collapsible from "react-collapsible";
import { IonCol, IonButton, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText } from '@ionic/react';
import ProductoList from './ListP'
import SedeList from './ListS'
import './ContentProduct.css'
import { Link } from 'react-router-dom';

interface ContainerProps { }

const Tienda: React.FC<ContainerProps> = () => {
  
  return (
    
    <IonRow>
      

      <IonCol sizeXs="12" sizeLg="6">

        <IonRow>
          <IonCol className='ion-text-center'>
            <IonItem className="">
              <IonLabel position="floating">Buscar Sedes</IonLabel>
              <IonInput></IonInput>
              <IonButton expand="block" fill="outline" > Buscar </IonButton>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-bottom'>
              <IonButton expand="block" fill="outline" > +Sede
              </IonButton>
          </IonCol>
        </IonRow>

        <SedeList />

      </IonCol >
      <IonCol sizeXs="12" sizeLg="6">

        <IonRow>
          <IonCol className='ion-text-center'>
            <IonItem className="">
              <IonLabel position="floating">Buscar Productos</IonLabel>
              <IonInput></IonInput>
                            <IonButton expand="block" fill="outline" > Buscar</IonButton>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-bottom'>
              <IonButton expand="block" fill="outline" > +Producto
              </IonButton>
          </IonCol>
        </IonRow>

        <ProductoList />

      </IonCol >

      

    </IonRow>
  );
};

export default Tienda;
