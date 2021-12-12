import {IonCol, IonContent, IonGrid, IonRow, IonTitle } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig';
import StoreInfo from './Store/StoreInfo';
import './StoreList.css';

interface ContainerProps { }

const StoreList: React.FC<ContainerProps> = () => {
    //Store list
    const [arrayTiendas, SetArrayTiendas] = useState([{}])
    const storesCollectionRef = collection(db, 'tiendas')
    useEffect(()=>{
        async function obtenerTiendas()
        {
            const data = await getDocs(storesCollectionRef);
            SetArrayTiendas(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
        }
        obtenerTiendas()
    },[])

    return (
    <div className="StoreList">
    <IonContent scrollY={true} fullscreen>
        <IonTitle>Tiendas</IonTitle>
        <IonGrid>
                { 
                    arrayTiendas?
                    arrayTiendas.map((item:any, index:Number)=>{
                        return (
                        <IonRow  key={index.toString()}>
                            <IonCol>
                                <StoreInfo disponible={ item.disponible } docId={item.id} email={item.email}  nombre={item.nombre} rubro={item.rubro} ruc={item.ruc} uid={item.uid}/>
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
