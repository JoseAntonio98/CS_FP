import React from "react";
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { IonSelect, IonContent, IonSelectOption, IonCol, IonButton, IonGrid, IonRow, IonItem, IonLabel, IonInput } from '@ionic/react';
import { crearProducto } from '../../../servicios/firebaseProducto'
import { useContext, useEffect, useState } from 'react';
import { SesionContext } from '../../../Contexto/Sesion/Context';
import { toast } from '../../toast'

interface ContainerProps { }

const CreandoProducto: React.FC<ContainerProps> = () => {
    
    const {sesion}=useContext(SesionContext)
    var idsesion = sesion.uid

    const [descripcion, setDescripcion] = useState('')
    const [categoria, setCategoria] = useState('')
    const [idtienda, setIdtienda] = useState(idsesion)
    const [imagen, setImagen] = useState('')
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0.0)
    const [stock,setStock]=useState(0.0)

    const [arrayCategorias, setArrayCategorias] = useState([{}])
    //const [arrayTiendas, setArrayTiendas] = useState([{}])

    async function creandoProducto () {
            await crearProducto(descripcion,categoria,idtienda,imagen,nombre,precio,stock)
    }

    const categoriasCollectionRef = collection(db, 'categorias')
  //  const tiendasCollectionRef = collection(db,'tiendas')

    useEffect(()=>{
        async function obtenerCategorias()
        {
            const data = await getDocs(categoriasCollectionRef);
            setArrayCategorias(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
        }
        obtenerCategorias()
    },[])

   /* useEffect(()=>{
        async function obtenerTiendas()
        {
            const data = await getDocs(tiendasCollectionRef);
            setArrayTiendas(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
        }
        obtenerTiendas()
    },[])
*/
    return (
        <IonContent scrollY={true} fullscreen>
            <IonGrid>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4" className='ion-text-center'>
                        <h2>Crear nueva producto</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating" > Nombre</IonLabel>
                            <IonInput onIonChange={(e:any) => setNombre(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating"> Descripcion</IonLabel>
                            <IonInput onIonChange={(e:any) => setDescripcion(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating" > Imagen</IonLabel>
                            <IonInput onIonChange={(e:any) => setImagen(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating"> Precio</IonLabel>
                            <IonInput onIonChange={(e:any) => setPrecio(e.target.value)} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
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
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating"> Stock</IonLabel>
                            <IonInput onIonChange={(e:any) => setStock(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                    <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-top'>
                        <IonButton expand="block" fill="outline" onClick={creandoProducto} >
                            Crear Producto
                        </IonButton>
                        <p><Link to="/AdminTienda">--------</Link></p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CreandoProducto;
