import { IonApp, IonLoading, IonRouterOutlet , IonCol, IonList, IonItemOptions, IonItemOption, IonItemSliding, IonButton, IonRow, IonInput, IonLabel, IonItem, IonCard, IonText, IonBadge } from '@ionic/react';
import { collection, getDoc, getDocs, onSnapshot, query, where} from "firebase/firestore";
import React, { useContext, useState, useEffect } from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Link } from 'react-router-dom'
import { db } from '../../../firebaseConfig'
import Collapsible from "react-collapsible";
import Sesion from "../../../Contexto/Sesion"
import Carrito from "../../../Contexto/Carrito"
import ProductoList from './ProductoLista'
import PedidoInfo from './Pedido/PedidoInfo';
import Pedido from '../../../pages/Pedido/Pedido' //para el ṕago
import './ContentProduct.css'

interface ContainerProps {

}

const ContentProduct = () => {

  const sesion = useContext(Sesion)
  const carrito = useContext(Carrito)

  //console.log('carrito', carrito.)
  //carrito.state.pedidos

  const [busqueda, setBusqueda] = useState('')
  const [arrayProductos, setArrayProductos] = useState([{}]);
  const [loading, setLoading] = useState<boolean>(true);

  const productosCollectionRef = collection(db, 'Producto')

  async function obtenerProductos()
  {
      const data = await getDocs(productosCollectionRef);
      setArrayProductos(data.docs.map((doc) => (
          {...doc.data(), 
              id: doc.id}
      )))
      setLoading(false)

  }
  /*
  async function obtenerProductos_2()
  {
    const q = query(collection(db, "clientes"), where("nombre", "==", busqueda));
    const querySnapshot = await getDocs(q);
  }*/

  useEffect(() => {
      obtenerProductos()
  }, [loading])

  if (loading) {
      return <IonLoading
      isOpen={loading}
      onDidDismiss={() => setLoading(false)}
      message={'Obteniendo Tiendas Cercanas'}
    />
  }

  return (

    <IonRow>

      <IonReactRouter>
         <IonRouterOutlet>
            <Route path="/pedido" component={Pedido} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>

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
              <IonInput onIonChange={(e:any) => setBusqueda(e.target.value)}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-bottom'>
            <IonButton expand="block" fill="outline" > Buscar
            </IonButton>
          </IonCol>
        </IonRow>

        <ProductoList arrayProductos={arrayProductos}/>

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

export default ContentProduct;
