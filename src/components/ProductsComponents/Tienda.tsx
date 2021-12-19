import React, { useContext, useState } from 'react';
import Collapsible from "react-collapsible";
import { IonCol, IonButton,IonContent, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText, useIonAlert, IonRouterLink, IonRoute, IonTabButton, IonRouterOutlet, IonIcon } from '@ionic/react';
import ProductoList from './ListP'
import SedeList from './ListS'
import './ContentProduct.css'
import TiendaLogin from '../ComponentesUsuario/Tienda/Autenticación/Login'
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
  const [arrayProductos, setArrayProductos] = useState([{}]);
  //boleano para mi modal
  const [loading, setLoading] = useState<boolean>(true);

  const [mActualizarDatos,setboolActualizarDatos] = useState(false);
    //variables a usar 
  const [descripcion, setDescripcion] = useState('')
  const [categoria, setCategoria] = useState('')
 // const [idtienda, setIdtienda] = useState(idsesion)
  const [imagen, setImagen] = useState('')
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState(0)
  const [stock,setStock]=useState(0)
  const [uid,setuidDoc] = useState('')

 //En implementacion .... 
  async function nuevoProducto()
  {
    await crearProducto("1","2",idsesion,"4","Nuevo Rollo Papel++",99,20)
    
    console.log('Estas en Tiendatsx llamando a crear Prodcuto ')
    console.log(idsesion)
  }
  return (
    
    <IonRow>
      <IonCol sizeXs="12" sizeLg="12">
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
