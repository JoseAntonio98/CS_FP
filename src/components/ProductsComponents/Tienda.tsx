import React, { useContext, useEffect, useState } from 'react';
import Collapsible from "react-collapsible";
import { IonCol, IonButton,IonContent, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText, useIonAlert, IonRouterLink, IonRoute, IonTabButton, IonRouterOutlet, IonIcon, IonLoading, IonModal, IonGrid, IonSelect, IonSelectOption } from '@ionic/react';
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
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

interface ContainerProps { }

const Tienda: React.FC<ContainerProps> = () => {
  
  const {sesion}=useContext(SesionContext)
  var idsesion = sesion.uid
  //funcion crearProducto(descripcion:string, idcategoria:string, idtienda:string, imagen:string, nombre:string, precio:number)
  const [arrayProductos, setArrayProductos] = useState([{}]);

  const [modalCrearProductos,setmodalCrearProductos] = useState(false);
    //variables a usar 
  const [descripcion, setDescripcion] = useState('')
  const [categoria, setCategoria] = useState('')
 // const [idtienda, setIdtienda] = useState(idsesion)
  const [imagen, setImagen] = useState('')
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState(0)
  const [stock,setStock]=useState(0)
 // const [uid,setuidDoc] = useState('')

 //En implementacion .... 
  async function nuevoProducto()
  {
   // await crearProducto(descripcion,categoria,idsesion,imagen,nombre,precio,stock)
    
    console.log('Estas en Tienda.tsx llamando a nuevoProdcuto->CrearProducto ')
    console.log(idsesion)

  }

  const obtenerDatosProductos=()=>
  {   
      setmodalCrearProductos(true)
      setDescripcion(descripcion)
      setCategoria(categoria)
      setImagen(imagen)
      setNombre(nombre)
      setPrecio(precio)
      setStock(stock)
  }
  
  
  const [arrayCategorias, setArrayCategorias] = useState([{}])
  //const [arrayTiendas, setArrayTiendas] = useState([{}])

  async function creandoProducto () {
          obtenerDatosProductos()
          console.log("estamos por entrar a la BD")
          await crearProducto(descripcion,categoria,idsesion,imagen,nombre,precio,stock)
  }

  const categoriasCollectionRef = collection(db,'categorias')
  useEffect(()=>{
      async function obtenerCategorias()
      {
          const data = await getDocs(categoriasCollectionRef);
          setArrayCategorias(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
      }
      obtenerCategorias()
  },[])


  return (
    
    <IonRow>
      <IonModal isOpen={modalCrearProductos} >
                <IonGrid>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <h2>Crear nueva producto</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel position="floating" > Nombre</IonLabel>
                            <IonInput onIonChange={(e:any) => setNombre(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel position="floating"> Descripcion</IonLabel>
                            <IonInput onIonChange={(e:any) => setDescripcion(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel position="floating" > Imagen</IonLabel>
                            <IonInput onIonChange={(e:any) => setImagen(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel position="floating"> Precio</IonLabel>
                            <IonInput onIonChange={(e:any) => setPrecio(e.target.value)} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel position="floating">Categoria</IonLabel>
                            <IonSelect interface="popover" onIonChange={(e:any) => setCategoria(e.detail.value)}>
                                {
                                    arrayCategorias?
                                    arrayCategorias.map((item:any, index:Number) => {
                                        return <IonSelectOption value={item.categoria}>{item.categoria}</IonSelectOption>
                                    }) : <>No hay nada</>
                                }
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                <IonRow>
                    <IonCol >
                        <IonItem>
                            <IonLabel position="floating"> Stock</IonLabel>
                            <IonInput onIonChange={(e:any) => setStock(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonCol className='ion-text-center ion-margin-top'>
                        <IonButton expand="block" fill="outline" onClick={()=>setmodalCrearProductos(false)} >
                            Cerrar
                        </IonButton>
                        <IonButton expand="block" fill="outline" onClick={()=>{creandoProducto()}} >
                            Crear
                        </IonButton>

                     </IonCol>

                </IonRow>
            </IonGrid>
                </IonModal>
      <IonCol sizeXs="12" sizeLg="12">
        <IonRow>
          <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-bottom'>
              <IonButton expand="block" fill="outline" onClick={()=>setmodalCrearProductos(true)} >Crear Producto
              </IonButton>
          </IonCol>
        </IonRow>
         <ProductoList />
      </IonCol >
    </IonRow>
  );
};

export default Tienda;
