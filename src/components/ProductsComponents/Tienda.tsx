import React from 'react';
import Collapsible from "react-collapsible";
import { IonCol, IonButton,IonContent, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText, useIonAlert, IonRouterLink, IonRoute } from '@ionic/react';
import ProductoList from './ListP'
import SedeList from './ListS'
import './ContentProduct.css'
import { Link } from 'react-router-dom';
import { crearProducto } from '../../servicios/firebaseProducto';

interface ContainerProps { 

  

}

const Tienda: React.FC<ContainerProps> = () => {
  
  async function nuevoProducto()
  {
    await crearProducto("1","2","3","4")
    console.log('Estas en Tiendatsx llamando a crear Prodcuto ')
  }
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
              <IonButton expand="block" fill="outline" onClick={nuevoProducto} >+Producto
              
              </IonButton>
          </IonCol>
        </IonRow>

        <ProductoList />

      </IonCol >

      

    </IonRow>
  );
};

export default Tienda;
