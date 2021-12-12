import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/react'
import Content from '../../components/ComponentesUsuario/Productos/ContentProduct'
import { Link } from "react-router-dom";

// ELIMINARSE, SOLO SIRVE PARA COMPROBAR COSAS

const ProductosLista: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <Link to="/" >Aplicación</Link>
                    </IonTitle>
                    <IonButton slot='end' color="success">Salir</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <Content />
            </IonContent>
        </IonPage>
    );
}

export default ProductosLista;