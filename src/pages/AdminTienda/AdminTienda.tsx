import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/react'
import Content from '../../components/ProductsComponents/Tienda'
import { Link } from "react-router-dom";

//import { signOutCliente } from '../../servicios/firebaseCliente'

const AdminTienda: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <Link to="/" >Aplicación</Link>
                    </IonTitle>
                    <IonButton slot='end' color="success" href="/">Salir</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <Content />
            </IonContent>
        </IonPage>
    );
}

export default AdminTienda;