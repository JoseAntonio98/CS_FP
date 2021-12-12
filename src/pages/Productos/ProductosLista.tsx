import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/react'
import Content from '../../components/UsersComponents/Productos/ContentProduct'
import { Link } from "react-router-dom";

import { signOutCliente } from '../../servicios/firebaseCliente'



const ProductosLista: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <Link to="/" >Aplicación</Link>
                    </IonTitle>
                    <IonButton slot='end' color="success" onClick={signOutCliente}>Salir</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <Content />
            </IonContent>
        </IonPage>
    );
}

export default ProductosLista;