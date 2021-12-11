import React from 'react';
import Collapsible from "react-collapsible";
import { IonCol, IonButton, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText, IonBadge } from '@ionic/react';
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
        <IonRow>
        <IonCol>
        <h5>Mis Pedidos</h5>
        <IonCard>
          <IonItem>
              <IonBadge slot="start">x3</IonBadge>
              <IonLabel> 
                  Producto 1
              </IonLabel>
              <IonLabel slot="end">S/. 75.00</IonLabel>
          </IonItem>
          <IonItem>
              <IonBadge slot="start">x1</IonBadge>
              <IonLabel> 
                  Producto 2
              </IonLabel>
              <IonLabel slot="end">S/. 30.00</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem>
              <IonLabel slot="start"><b>Total</b></IonLabel>
              <IonLabel slot="end">S/. 105.00</IonLabel>
          </IonItem>
        </IonCard>

        <IonButton expand="block" fill="solid" >
          Hacer Pedido
        </IonButton>

        </IonCol>
        </IonRow>
        
      </IonCol>

    </IonRow>
  );
};

export default ContentProduct;
