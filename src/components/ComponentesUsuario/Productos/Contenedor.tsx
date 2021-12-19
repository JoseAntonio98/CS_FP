import { IonLoading, IonCol, IonButton, IonRow, IonInput, IonLabel, IonItem } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom'
import { db } from '../../../firebaseConfig'
import ListaProductos from './Lista'
import PedidoInfo from '../Cliente/Carrito/Info';
import Collapsible from "react-collapsible";
import './style/contenedor.css'

const Contenedor: React.FC<{location : any}> = (location) => {

  const props = location.location.state
  const [busqueda, setBusqueda] = useState('')
  const [productos, setProductos] = useState([{}]);
  const [loading, setLoading] = useState<boolean>(true);
  const [tipoB, setTipoB] = useState('all')
  const [categoria, setCategoria] = useState('')

  const productosCollectionRef = collection(db, 'productos')

  async function obtenerTiendas() {
    switch (tipoB) {

      case 'buscar':
        const q = query(productosCollectionRef, where('nombre', '>=', busqueda), where('nombre', '<=', busqueda + '\uf8ff'), where('idtienda', '==', props.uid))
        const datos = await getDocs(q);
        setProductos(datos.docs.map((doc) => (
          {
            ...doc.data()
          }
        )))
        //console.log(productos)
        setTipoB('')
        setLoading(false)
        break;

      case 'ordenA':
        console.log('orden A')
        console.log(productos)
        break;

      case 'ordenB':
        console.log('orden B')
        //productos.sort((a, b) => { return 6 })
        break;

      case 'categoria':
        const p = query(productosCollectionRef, where('categoria', '==', categoria), where('idtienda', '==', props.uid))
        const d = await getDocs(p);
        setProductos(d.docs.map((doc) => (
          {
            ...doc.data()
          }
        )))
        //console.log(tiendas)
        setLoading(false)
        setTipoB('')
        break;

      case 'all':
        const r = query(productosCollectionRef, where('idtienda', '==', props.uid))
        const h = await getDocs(r);
        setProductos(h.docs.map((doc) => (
          {
            ...doc.data()
          }
        )))
        setLoading(false)
        break;
    }
  }

  useEffect(() => {
    obtenerTiendas()
  }, [tipoB])

  const [arrayCategorias, SetArratCategorias] = useState([{}])
  const categoriasCollectionRef = collection(db, 'categorias')
  useEffect(() => {
    async function obtenerCategorias() {
      const data = await getDocs(categoriasCollectionRef);
      SetArratCategorias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    obtenerCategorias()
  }, [])

  if (loading) {
    return <IonLoading
      isOpen={loading}
      onDidDismiss={() => setLoading(false)}
      message={'Obteniendo Tiendas'}
    />
  }

  return (

    

    <IonRow>
      <IonCol>
        <IonCol sizeLg="3" sizeXs='12' className='ion-text-center'>

          <Collapsible transitionTime={100} trigger="Ordenar Por">
            <p className='acd' onClick={(e: any) => { setTipoB('ordenA') }}>A-Z</p>
            <p className='acd' onClick={(e: any) => { setTipoB('ordenB') }}>Z-A</p>
            <p>Calificación</p>
            <p>Cercanía</p>
          </Collapsible>

          <Collapsible transitionTime={100} trigger="Rubros">
            {
              arrayCategorias ?
                arrayCategorias.map((item: any, index: Number) => {
                  return <p className='acd' key={index.toString()} onClick={(e: any) => { setCategoria(item.categoria); setTipoB('categoria'); setLoading(true) }}> {item.categoria} </p>
                }) : <>No hay nada</>
            }
          </Collapsible>

        </IonCol>
      </IonCol>

      <IonCol sizeXs="12" sizeLg="6">

        <IonRow>
          <IonCol className='ion-text-center'>
            <IonItem className="">
              <IonLabel position="floating">Buscar Productos</IonLabel>
              <IonInput onIonChange={(e: any) => setBusqueda(e.target.value)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-bottom'>
            <IonButton expand="block" fill="outline" > Buscar
            </IonButton>
          </IonCol>
        </IonRow>

        <ListaProductos arrayProductos={productos} />

      </IonCol >

      <IonCol pushXs="" sizeXs="12" sizeLg="3" className="ion-text-center">

        <IonRow>
          <IonCol>
            <h5>Mis Pedidos</h5>
            <PedidoInfo />

          </IonCol>
        </IonRow>

      </IonCol>

    </IonRow>
  );
};

export default Contenedor;
