import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Imports de administracion */
import { SesionProvider } from "./Contexto/Sesion/Provider"
import Admin from './pages/Admin/Admin';
import UsuarioInicio from "./pages/Usuario/Inicio"
import Pedido from './pages/Pedido/Pedido';
import AdminTienda from './pages/AdminTienda/AdminTienda';
import { CarritoProvider } from './Contexto/Carrito/Provider';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/admin">
            <Admin/>
        </Route>
        <SesionProvider>
          <CarritoProvider>
            <Route exact path="/">
              <UsuarioInicio/>
            </Route>
            <Route exact path="/pedido">
              <Pedido/>
            </Route>
          </CarritoProvider>
        <Route exact path="/adminTienda">
          <AdminTienda/>
        </Route>
        </SesionProvider>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
