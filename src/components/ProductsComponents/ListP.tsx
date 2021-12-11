import { IonCol, IonLoading, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonNav, IonRow, IonTitle } from '@ionic/react';
import ProductInfo from '../ProductsComponents/Product/ProductEdit'
import { db } from '../../firebaseConfig'
import { useState, useEffect } from 'react';
import { collection, getDoc, getDocs, onSnapshot, query, } from "firebase/firestore";

interface ContainerProps
{
}

const ProductoList: React.FC<ContainerProps> = () => {

    const [arrayProductos, setArrayProductos] = useState([{}]);
    const [loading, setLoading] = useState<boolean>(true);


    const productosCollectionRef = collection(db, 'Producto')
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
        message={'Cargando...'}
    />
    }

    return (
        <IonRow>
            <IonCol>
                <IonContent scrollY={true} fullscreen>
                    <IonTitle>Productos</IonTitle>
                    <IonGrid>
                        {
                            arrayProductos.length > 0 ?
                            arrayProductos.map((item:any, index:Number) => {
                                return (
                                    <IonRow key={index.toString()}>
                                        <IonCol>
                                            <ProductInfo  productoNombre={item.nombre} docId={item.id} productoSede='' image=""/>
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

export default ProductoList;
