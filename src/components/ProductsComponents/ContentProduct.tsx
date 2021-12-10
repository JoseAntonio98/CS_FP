import React from 'react';
import Collapsible from "react-collapsible";
import { IonCol, IonButton, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText } from '@ionic/react';
import ProductoList from './List'
import './ContentProduct.css'
import { Link } from 'react-router-dom';

interface ContainerProps { }

const ContentProduct: React.FC<ContainerProps> = () => {
  return (
    <IonRow>

      <IonCol size="3" className='ion-text-center'>
        <Collapsible transitionTime={100} trigger="Ordenar Por">
          <p><Link to="">A-Z</Link></p>
          <p>Z-A</p>
          <p>Calificación</p>
          <p>Cercanía</p>
        </Collapsible>
        <Collapsible transitionTime={100} trigger="Categorias">
          <p>Cat01</p>
          <p>Cat02</p>
        </Collapsible>
      </IonCol>

      <IonCol sizeXs="12" sizeLg="6">

        <IonRow>
          <IonCol className='ion-text-center'>
            <IonItem className="">
              <IonLabel position="floating">Buscar Productos</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-bottom'>
              <IonButton expand="block" fill="outline" > Buscar
              </IonButton>
          </IonCol>
        </IonRow>

        <ProductoList />

      </IonCol >

      <IonCol pushXs="" sizeXs="12" sizeLg="3" className="ion-text-center">
        <h5>Mis Pedidos</h5>

        <IonCard>
          <IonItem>
            <IonText slot="start">
              <p>x3</p>
            </IonText>
            <IonLabel>Producto 1</IonLabel>
            <p>S/. 25.00</p>
            <p></p>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonText slot="start">
              <p>x3</p>
            </IonText>
            <IonLabel>Producto 1</IonLabel>
            <p>S/. 25.00</p>
            <p></p>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonLabel>Total:</IonLabel>
            <IonText slot="end">
              <p>S/. 125.00</p>
            </IonText>
          </IonItem>
        </IonCard>

        <IonButton expand="block" fill="solid" >
          Hacer Pedido
        </IonButton>
        
      </IonCol>

    </IonRow>
  );
};

export default ContentProduct;
