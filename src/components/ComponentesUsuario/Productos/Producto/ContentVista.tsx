import React from 'react';
import { IonCol, IonButton, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText, IonBadge } from '@ionic/react';
import './ContentProduct.css'
import ProductDatos from '../ProductDatos';
//import Mapa from '../../../Mapa'

interface ContainerProps { }

const ContentProduct: React.FC<ContainerProps> = () => {
  return (
    <IonRow>

      <IonCol sizeXs="12" sizeLg="9">

        <IonRow>
          <IonCol className='ion-text-center'>
              <ProductDatos id={'id'}/>
          </IonCol>
        </IonRow>

        {/*<Mapa tipo='search' o_lat={coord[0]} o_lon={coord[1]} d_lat={0} d_lon={0} />*/}

      </IonCol >

      <IonCol pushXs="" sizeXs="12" sizeLg="3" className="ion-text-center">
        <IonRow>
            <IonCol>
                <h4>Aqui la cantidad</h4>
            </IonCol>
        </IonRow>

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
