import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { earthOutline, personOutline, pricetagOutline, storefrontOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import CategoryList from '../Categories/CategoryList';
import HeadingList from '../Headings/HeadingList';
import StoreList from '../Stores/StoreList';
import UserList from '../Users/UserList';
import './ContentManager.css';

interface ContainerProps { 

}

const ContentManager: React.FC<ContainerProps> = () => {
    return (
    <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/admin/users" component={UserList} exact={true} />
                <Route path="/admin/stores" component={StoreList} exact={true} />
                <Route path="/admin/categories" component={CategoryList} exact={true}/>
                <Route path="/admin/heading" component={HeadingList} exact={true}/>
                <Route path="/admin" render={() => <Redirect to="/admin/users" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="top">
                <IonTabButton tab="tab1" href="/admin/users">
                    <IonIcon icon={personOutline} color="success"/>
                    <IonLabel color="dark">Usuarios</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/admin/stores">
                    <IonIcon icon={storefrontOutline} color="success"/>
                    <IonLabel color="dark">Tiendas</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/admin/categories">
                    <IonIcon icon={pricetagOutline} color="success"/>
                    <IonLabel color="dark">Categorias</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab4" href="/admin/heading">
                    <IonIcon icon={earthOutline} color="success"/>
                    <IonLabel color="dark">Rubros</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  );
};

export default ContentManager;
