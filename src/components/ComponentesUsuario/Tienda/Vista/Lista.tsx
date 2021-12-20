import { IonAlert, IonCol, IonLoading, IonText, IonModal, IonButton, IonItem, IonInput, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonNav, IonRow, IonTitle } from '@ionic/react';
import Info from './Info'
import { useState, useContext } from 'react';

interface Props
{
    tiendas : {}[]
}

const Lista: React.FC<Props> = (props) => {

    const [loading, setLoading] = useState<boolean>(false)

    if (loading) {
        return <IonLoading
        isOpen={loading}
        onDidDismiss={() => setLoading(false)}
        message={'Obteniendo Tiendas Cercanas'}
      />
    }


    return (
        <IonRow>
            <IonCol>
                <IonContent scrollY={true} fullscreen>
                    <IonTitle>Tiendas Cercanas</IonTitle>
                    <IonGrid>
                        {
                            props.tiendas.length > 0 ?
                            props.tiendas.map((i:any, index:Number) => {
                                return (
                                    <IonRow key={index.toString()}>
                                        <IonCol >
                                            <Info uid={i.uid} nombre={i.nombre} calificacion={i.calificacion} rubro={i.rubro} pos={i.pos}/>
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

export default Lista;
