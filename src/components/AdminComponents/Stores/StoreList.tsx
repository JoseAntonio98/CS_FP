import {IonButton, IonCol, IonContent, IonGrid, IonIcon, IonRow, IonTitle } from '@ionic/react';
import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { closeCircleOutline, trashOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig';
import { toast } from '../../toast';
import StoreInfo from './Store/StoreInfo';
import './StoreList.css';

//Interfaz de datos del componente
interface ContainerProps { }

//Componente para renderizar la lista de tiendas
const StoreList: React.FC<ContainerProps> = () => {
    //Lista de tiendas
    const [arrayTiendas, SetArrayTiendas] = useState([{}])

    //Funcion para consultar las tiendas
    async function obtenerTiendas()
    {
        const storesCollectionRef = collection(db, 'tiendas')
        const data = await getDocs(storesCollectionRef);
        SetArrayTiendas(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
    }

    //Funcion para borrar la tienda y borrar el renderizado de la tienda
    async function deleteStore(store:any,index:Number)
    {
        await deleteDoc(doc(db, "tiendas", store.id))
            .then(() => {
                obtenerTiendas()
                    .then(() => toast("Se ha eliminado la tienda"))
            }).catch(() => {
                toast("Error al eliminar la tienda")
            });
    }
    //Funcion para desactivar y renderizar la tienda
    async function disableStore(store:any)
    {
        store.disponible = !store.disponible;
        await setDoc(doc(db, "tiendas", store.id), store)
            .then(() => {
                obtenerTiendas()
                    .then(() => toast("Se ha actualizado el estado de la tienda " + store.nombre))
            });
    }
    //Funcion inicial para la carga de tiendas
    useEffect(() => {
        obtenerTiendas()
        return
    }, [])
    
    return (
    <div className="StoreList">
    <IonContent scrollY={true} fullscreen>
        <IonTitle>Tiendas</IonTitle>
        <IonGrid>
            { 
                arrayTiendas?
                arrayTiendas.map((item:any, index:Number)=>{
                    return (
                    <IonRow className="StoreInfo m-2 p-4" key={index.toString()}>
                        <StoreInfo disponible={ item.disponible } docId={item.id} email={item.email}  nombre={item.nombre} rubro={item.rubro} ruc={item.ruc} uid={item.uid}/>
                        <IonCol size="2">
                            <IonButton color="danger" onClick={()=>{deleteStore(item,index)}}>
                                <IonIcon icon={trashOutline}/>
                            </IonButton>
                            <IonButton color="light" onClick={()=>{disableStore(item)}}>
                                <IonIcon icon={closeCircleOutline}/>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    )
                }):null
            }
        </IonGrid>
        </IonContent>
    </div>
  );
};

export default StoreList;
