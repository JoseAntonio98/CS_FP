import React from 'react';
import Collapsible from "react-collapsible";
import { IonCol, IonButton, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText } from '@ionic/react';
import ProductoList from './List'
import './ContentProduct.css'
import ProductDatos from './Product/ProductDatos';
import Mapa from '../../components/Mapa'

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

        <Mapa coordX={-12} coordY={-15}/>

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
                    <IonText slot="start">
                    <p>x3</p>
                    </IonText>
                    <IonLabel>Producto 1</IonLabel>
                    <p>S/. 25.00</p>
                    <p></p>
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
