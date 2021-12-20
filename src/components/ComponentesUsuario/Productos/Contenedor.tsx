import { IonLoading, IonCol, IonButton, IonRow, IonInput, IonLabel, IonItem, IonModal, IonTitle, IonIcon, IonGrid, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../../firebaseConfig'
import ListaProductos from './Lista'
import PedidoInfo from '../Cliente/Carrito/Info';
import Collapsible from "react-collapsible";
import './style/contenedor.css'
import { SesionContext } from '../../../Contexto/Sesion/Context';
import Mapa from '../../Mapa';
import { map, checkmarkDone } from 'ionicons/icons'
import { actualizarCalificación } from '../../../servicios/firebaseUsuario';

const Contenedor: React.FC<{ location: any }> = (location) => {

  const { sesion } = useContext(SesionContext)
  const props = location.location.state
  const [mMap, setMMap] = useState<boolean>(false)
  const [mCal, setMCal] = useState<boolean>(false)
  const [busqueda, setBusqueda] = useState('')
  const [productos, setProductos] = useState([{}]);
  const [loading, setLoading] = useState<boolean>(true);
  const [tipoB, setTipoB] = useState('all')
  const [categoria, setCategoria] = useState('')
  const [cal, setCal] = useState(0)

  const productosCollectionRef = collection(db, 'productos')

  async function buscar() {
    setTipoB('buscar')
    setLoading(true)
  }

  async function calificar() {
    actualizarCalificación(props.uid, props.cal[0] + cal, props.cal[1] + 1)
    setMCal(false)
  }

  async function obtenerProductos() {
    switch (tipoB) {
      case 'buscar':
        const q = query(productosCollectionRef, where('idtienda', '==', props.uid), where('nombre', '>=', busqueda), where('nombre', '<=', busqueda + '\uf8ff'))
        const datos = await getDocs(q);
        setProductos(datos.docs.map((doc) => (
          {
            ...doc.data()
          }
        )))
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
    obtenerProductos()
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

      <IonModal isOpen={mMap}>
        <IonRow>
          <Mapa tipo='directions' o_lat={sesion.pos.latitude} o_lon={sesion.pos.longitude} d_lat={props.lt} d_lon={props.lg} />
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton expand='block' fill="solid" onClick={() => setMMap(false)}>salir</IonButton>
          </IonCol>
        </IonRow>
      </IonModal>

      <IonModal cssClass="Modal-productos" isOpen={mCal}>
        <div className='form'>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonTitle>Califica la tienda</IonTitle>
              <IonLabel>Elige un múmero del 1 al 5</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol sizeLg='4' offsetLg='4' className="ion-text-center">
              <IonSelect placeholder="Elige un número" interface="popover" onIonChange={(e: any) => setCal(e.detail.value)}>
                <IonSelectOption key={1} value={1}> 1 </IonSelectOption>
                <IonSelectOption key={2} value={2}> 2 </IonSelectOption>
                <IonSelectOption key={3} value={3}> 3 </IonSelectOption>
                <IonSelectOption key={4} value={4}> 4 </IonSelectOption>
                <IonSelectOption key={5} value={5}> 5 </IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand='block' fill="solid" onClick={() => setMCal(false)}>salir</IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand='block' fill="solid" onClick={calificar}>Calificar</IonButton>
            </IonCol>
          </IonRow>
        </div>

      </IonModal>

      <IonCol sizeLg="3" sizeXs='12' className='ion-text-center'>

        <IonRow>
          <IonCol sizeXs='8' sizeMd='10' sizeLg="8" className='ion-text-left'>
            <IonTitle size='large'>{props.nombre}</IonTitle>
          </IonCol>

          <IonCol sizeXs='2' sizeMd='1' sizeLg='2' className="ion-text-right">
            <IonButton fill='outline' size='small' onClick={() => setMMap(true)} ><IonIcon icon={map}></IonIcon></IonButton>
          </IonCol>

          <IonCol sizeXs='2' sizeMd='1' sizeLg='2' className="ion-text-right">
            <IonButton fill='outline' size='small' onClick={() => setMCal(true)} ><IonIcon icon={checkmarkDone}></IonIcon></IonButton>
          </IonCol>

        </IonRow>

        <IonRow>
          <IonCol>
            <Collapsible transitionTime={100} trigger="Ordenar Por">
              <p className='acd' onClick={(e: any) => { setTipoB('ordenA') }}>A-Z</p>
              <p className='acd' onClick={(e: any) => { setTipoB('ordenB') }}>Z-A</p>
            </Collapsible>

            <Collapsible transitionTime={100} trigger="Categorias">
              {
                arrayCategorias ?
                  arrayCategorias.map((item: any, index: Number) => {
                    return <p className='acd' key={index.toString()} onClick={(e: any) => { setCategoria(item.categoria); setTipoB('categoria'); setLoading(true) }}> {item.categoria} </p>
                  }) : <>No hay ninguna categoría creada </>
              }
            </Collapsible>
          </IonCol>
        </IonRow>
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
            <IonButton expand="block" fill="outline" onClick={buscar}> Buscar
            </IonButton>
          </IonCol>
          <IonCol sizeLg="1" className='ion-text-center ion-margin-bottom'>
            <IonButton size='small' fill="outline" onClick={() => setTipoB('all')}> Reiniciar
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
