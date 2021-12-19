import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personOutline, storefrontOutline } from 'ionicons/icons';
import { Route } from 'react-router';
import ClienteLogin from '../Cliente/Autenticación/Login';
import TiendaLogin from '../Tienda/Autenticación/Login'
import ClienteRegistro from '../Cliente/Autenticación/Registro';
import TiendaRegistro from '../Tienda/Autenticación/Registro'
import ContenedorProductos from '../Productos/Contenedor';

const Contenido: React.FC = () => {
    
    return (
        <IonReactRouter>

            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/" component={ClienteLogin} exact={true} />
                    <Route path="/cliente/registro" component={ClienteRegistro} exact={true} />
                    <Route path="/tienda/login" component={TiendaLogin} exact={true} />
                    <Route path="/tienda/registro" component={TiendaRegistro} exact={true} />
                    <Route path="'/productos" component={ContenedorProductos} exact={true} />

                </IonRouterOutlet>

                <IonTabBar slot="top">
                    <IonTabButton tab="tab1" href="/">
                        <IonIcon icon={personOutline} color="primary" />
                        <IonLabel color="dark">Cliente</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/tienda/login">
                        <IonIcon icon={storefrontOutline} color="primary" />
                        <IonLabel color="dark">Tienda</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>

        </IonReactRouter>
    );
};

export default Contenido;
