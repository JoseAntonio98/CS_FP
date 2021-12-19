import React, { useContext } from 'react';
import Collapsible from "react-collapsible";
import { IonCol, IonButton,IonContent, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText, useIonAlert, IonRouterLink, IonRoute, IonTabButton, IonRouterOutlet, IonIcon } from '@ionic/react';
import ProductoList from './ListP'
import SedeList from './ListS'
import './ContentProduct.css'
import TiendaLogin from '../ComponentesUsuario/Tienda/Login'
import { Link } from 'react-router-dom';
import { actualizarProducto,crearProducto} from '../../servicios/firebaseProducto';
import { SesionContext } from '../../Contexto/Sesion/Context';
import {Redirect, Route} from 'react-router'
import { IonReactRouter } from '@ionic/react-router';
import CreandoProducto from'../ComponentesUsuario/Productos/CreandoProducto';

interface ContainerProps { }

const Tienda: React.FC<ContainerProps> = () => {
  
  const {sesion}=useContext(SesionContext)
  var idsesion = sesion.uid
  //funcion crearProducto(descripcion:string, idcategoria:string, idtienda:string, imagen:string, nombre:string, precio:number)
  async function nuevoProducto()
  {
    await crearProducto("1","2",idsesion,"4","Nuevo Rollo Papel++",99,20)
    
    console.log('Estas en Tiendatsx llamando a crear Prodcuto ')
    console.log(idsesion)
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
