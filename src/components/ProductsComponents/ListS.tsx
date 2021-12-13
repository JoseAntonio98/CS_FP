import { IonCol, IonLoading, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonNav, IonRow, IonTitle } from '@ionic/react';
import SedeInfo from '../ProductsComponents/Product/SedeEdit'
import { db } from '../../firebaseConfig'
import { useState, useEffect } from 'react';
import { collection, getDoc, getDocs, onSnapshot, query, } from "firebase/firestore";

interface ContainerProps
{
}

const SedeList: React.FC<ContainerProps> = () => {

    const [arraySedes, setArraySedes] = useState([{}]);
    const [loading, setLoading] = useState<boolean>(true);


    const sedesCollectionRef = collection(db, 'Sede')
    useEffect(() => {
        async function obtenerSedes()
        {
            const data = await getDocs(sedesCollectionRef);
            setArraySedes(data.docs.map((doc) => (
                {...doc.data(), 
                    id: doc.id}
            )))
            setLoading(false)

        }
        obtenerSedes()
    }, [loading])

    if (loading) {
        return <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={'Cargando...'}
    />
    }

    return (
        <IonRow>
            <IonCol>
                <IonContent scrollY={true} fullscreen>
                    <IonTitle>Sedes</IonTitle>
                    <IonGrid>
                        {
                            arraySedes.length > 0 ?
                            arraySedes.map((item:any, index:Number) => {
                                return (
                                    <IonRow key={index.toString()}>
                                        <IonCol>
                                            <SedeInfo  sedeNombre={item.nombre}   image=""/>
                                        </IonCol>
                                    </IonRow>
                                )
                            }) : null
                        }
                    </IonGrid>
                </IonContent>
            </IonCol>
        </IonRow>

    )
};

export default SedeList;
