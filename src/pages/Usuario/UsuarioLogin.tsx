import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import Content from '../../components/UsersComponents/Content/ContentUser'
import { isClienteSigned } from '../../servicios/firebaseCliente';
import ProductosLista from '../Productos/ProductosLista';
import { Link } from "react-router-dom";

const UsuarioLogin: React.FC = () => {
    const flag = isClienteSigned()
    {console.log('flag', flag)}
    if (flag){
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle >
                            <Link to="/" >Aplicación</Link>
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <Content />
                </IonContent>
            </IonPage >
        );
    } else {
        return <ProductosLista/>
    }
}

export default UsuarioLogin;