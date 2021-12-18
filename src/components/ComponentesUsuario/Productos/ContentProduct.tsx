import { IonLoading, IonCol,  IonButton, IonRow, IonInput, IonLabel, IonItem } from '@ionic/react';
import React, { useContext, useState, useEffect } from 'react';
import { collection, getDocs} from "firebase/firestore";
import { Link } from 'react-router-dom'
import { db } from '../../../firebaseConfig'
import { SesionContext } from "../../../Contexto/Sesion/Context"
import { CarritoContext } from "../../../Contexto/Carrito/Context"
import ListaProductos from './ListaProductos'
import PedidoInfo from './Pedido/PedidoInfo';
import Collapsible from "react-collapsible";
import './ContentProduct.css'

interface ContainerProps {}

const ContentProduct:React.FC<ContainerProps> = () => {

  const [busqueda, setBusqueda] = useState('a')
  const [arrayProductos, setArrayProductos] = useState([{}]);
  const [loading, setLoading] = useState<boolean>(true);

  const productosCollectionRef = collection(db, 'productos')
  useEffect(() => {
    async function obtenerProductos()
    {
      const data = await getDocs(productosCollectionRef);
      setArrayProductos(data.docs.map((doc) => (
        {...doc.data(), 
          id: doc.id}
          )))
      setLoading(false)
    } 
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

        <ListaProductos arrayProductos={arrayProductos}/>

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
