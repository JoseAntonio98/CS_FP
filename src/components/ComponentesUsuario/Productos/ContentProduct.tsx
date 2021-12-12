import React, { useContext } from 'react';
import Collapsible from "react-collapsible";
import Sesion from "../../../Contexto/Sesion"
import Carrito from "../../../Contexto/Carrito"
import { IonCol, IonList, IonItemOptions, IonItemOption, IonItemSliding, IonButton, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText, IonBadge } from '@ionic/react';
import ProductoList from './ProductoLista'
import './ContentProduct.css'
import { Link } from 'react-router-dom';

interface ContainerProps {

}

const ContentProduct = () => {

  const sesion = useContext(Sesion)
  const carrito = useContext(Carrito)

  //console.log('carrito', carrito.)
  //carrito.state.pedidos

  return (

    <IonRow>
      <IonCol sizeLg="3" sizeXs='12' className='ion-text-center'>
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
            <IonList>

              <IonItemSliding>

                <IonItem>
                  <IonBadge slot="start">x3</IonBadge>
                  <IonText>{sesion.correo}</IonText>
                  <IonBadge slot="end">S/.75.00</IonBadge>
                </IonItem>

                <IonItemOptions side="end">
                  <IonItemOption onClick={() => alert('seguro?')}>Borrar</IonItemOption>
                </IonItemOptions>

              </IonItemSliding>
              
            </IonList>

            <IonItemSliding>

                <IonItem>
                  <IonBadge slot="start">x3</IonBadge>
                  <IonText>Segundo Elemento</IonText>
                  <IonBadge slot="end">S/.75.00</IonBadge>
                </IonItem>

                <IonItemOptions side="end">
                  <IonItemOption onClick={() => alert('seguro?')}>Borrar</IonItemOption>
                </IonItemOptions>

              </IonItemSliding>

              <IonItemSliding>

                <IonItem>
                  
                  <IonText slot="start" ><b>Total</b></IonText>
                  <IonText slot="end">S/.75.00</IonText>
                </IonItem>

              </IonItemSliding>

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
