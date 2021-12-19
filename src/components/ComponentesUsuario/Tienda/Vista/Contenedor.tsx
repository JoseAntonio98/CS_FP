import { IonLoading, IonCol, IonButton, IonRow, IonInput, IonLabel, IonItem, IonTitle } from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from '../../../../firebaseConfig'
import Tiendas from './Lista'
import Collapsible from "react-collapsible";

import { CarritoContext } from '../../../../Contexto/Carrito/Context'

import './style/contenedor.css'

const Contenedor: React.FC = () => {

  const [ busqueda, setBusqueda ] = useState('')
  const [ tiendas, setTiendas ] = useState([{}]);
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ tipoB, setTipoB ] = useState('all')
  const [ rubro, setRubro ] = useState ('')

  const { carrito, emptyCarrito } = useContext(CarritoContext)

  const tiendasCollectionRef = collection(db, 'tiendas')

  async function buscar() {
    setTipoB('buscar')
    setLoading(true)
  }

  async function obtenerTiendas() {
    switch (tipoB) {

      case 'buscar':
        const q = query(tiendasCollectionRef, where('nombre', '>=', busqueda), where('nombre', '<=', busqueda+'\uf8ff'))
        const datos = await getDocs(q);
        setTiendas(datos.docs.map((doc) => (
          {
            ...doc.data()
          }
        )))
        //console.log(tiendas)
        setTipoB('')
        setLoading(false)
        break;

      case 'ordenA': 
        console.log('orden A')
        console.log(tiendas)
        break;

      case 'ordenB':
        console.log('orden B')
        tiendas.sort((a, b) => { return 6 })
        break;

      case 'rubro':
        const p = query(tiendasCollectionRef, where('rubro', '==', rubro))
        const d = await getDocs(p);
        setTiendas(d.docs.map((doc) => (
          {
            ...doc.data()
          }
        )))
        //console.log(tiendas)
        setLoading(false)
        setTipoB('')
        break;

      case 'all':
        const data = await getDocs(tiendasCollectionRef);
        setTiendas(data.docs.map((doc) => (
          {
            ...doc.data()
          }
        )))
        setLoading(false)
        break;
    }
  }

  useEffect(() => {
    emptyCarrito()
  },[])

  useEffect(() => {
    obtenerTiendas()
  }, [tipoB])

  const [arrayRubros, setArrayRubros] = useState([{}])
  const rubrosCollectionRef = collection(db, 'rubros')
  useEffect(() => {
    async function obtenerRubros() {
      const data = await getDocs(rubrosCollectionRef);
      setArrayRubros(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    obtenerRubros()
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
            <p className='acd' >Calificación</p>
          </Collapsible>

          <Collapsible transitionTime={100} trigger="Rubros">
            {
              arrayRubros ?
                arrayRubros.map((item: any, index: Number) => {
                  return <p className='acd' key={index.toString()} onClick={(e: any) => {setRubro(item.rubro); setTipoB('rubro'); setLoading(true)}}> {item.rubro} </p>
                }) : <>No hay nada</>
            }
          </Collapsible>

        </IonCol>
      </IonCol>

      <IonCol sizeXs="12" sizeLg="8">
        <IonRow>
          <IonCol className='ion-text-center'>
            <IonItem className="">
              <IonLabel position="floating">Buscar Tiendas</IonLabel>
              <IonInput onIonChange={(e: any) => setBusqueda(e.target.value)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-bottom'>
            <IonButton expand="block" fill="outline" onClick={buscar}> Buscar
            </IonButton>
          </IonCol>
        </IonRow>

        {
          tiendas ?
            <Tiendas tiendas={tiendas} />
            :
            <IonTitle>No hay tiendas que cumplan tales requisitos</IonTitle>

        }


      </IonCol >

    </IonRow>
  );
};

export default Contenedor;
