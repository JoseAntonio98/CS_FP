import React, {useState} from "react";
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { storefrontOutline } from 'ionicons/icons';
import './Details.css';

const Details: React.FC<{reference: string, address: string, names: string, card: string, expire: string, securityCode: string}> = ({reference, address, names, card, expire, securityCode}) => {
    
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="details">
            <p>Detalles del pedido:</p>
            <IonList>
                <IonItem>
                    <IonLabel className="ion-text-capitalize">
                        <p>Apellidos y Nombres:</p>
                        <h2>{names}</h2>
                    </IonLabel>
                </IonItem>

                { card !== "" ?
                    <IonItem>
                        <IonLabel>
                            <p>Número de tarjeta:</p>
                            <h2>{card}</h2>
                        </IonLabel>
                    </IonItem>
                    : <span></span>
                }
                

                <IonItem>
                    <IonLabel>
                        <p>Dirección de entrega:</p>
                        <h2>{address}</h2>
                    </IonLabel>
                </IonItem>

                <IonItem>
                    <IonLabel className="ion-text-capitalize">
                        <p>Punto de referencia:</p>
                        <h2>{reference}</h2>
                    </IonLabel>
                </IonItem>

                <IonItem>
                    <IonLabel>
                        <p>Tiempo estimado de entrega:</p>
                        <h2>15 minutos</h2>
                        {/* <h2>{expire}</h2> */}
                    </IonLabel>
                </IonItem>
            </IonList>

            <IonButton fill="clear" className="mt-4">
                <IonIcon slot="end" icon={storefrontOutline}/>
                <IonLabel>Recoger en tienda</IonLabel>
            </IonButton>

            <IonModal isOpen={showModal}>
                <IonPage>
                    <IonHeader>
                        <IonToolbar color="primary" className="center">
                            <IonTitle>Orden en proceso ...</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div className="ion-padding">
                            
                            <div className="container">
                                <div className="inStore"> 
                                    <IonLabel>Recibido por la tienda</IonLabel>
                                </div>
                                <div className="coming">
                                    <IonLabel>En camino</IonLabel>
                                </div>
                                <div className="delivered">
                                    <IonLabel>Listo</IonLabel>
                                </div>
                            </div>

                            <IonButton onClick={() => setShowModal(false)} 
                                expand="full" className="ion-margin">Entendido</IonButton>
                        </div>
                    </IonContent>
                </IonPage>
                
            </IonModal>

            <IonButton onClick={() => {
                setShowModal(true);
                const data = {
                    reference,
                    address,
                    names,
                    card,
                    expire,
                    securityCode
                }
                console.log(data);
            }}
                expand="block" className="mt-3">
                Finalizar
            </IonButton>
        </div>
    );
};

export default Details;