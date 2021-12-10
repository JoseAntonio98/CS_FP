import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import Content from '../../components/ProductsComponents/ContentProduct'

const ProductosLista: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Aplicación
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <Content />
            </IonContent>
        </IonPage>
    );
}

export default ProductosLista;