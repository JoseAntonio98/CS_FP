import React, {useContext, useState} from "react";
import { useHistory } from "react-router-dom";
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { storefrontOutline } from 'ionicons/icons';
import './Details.css';
import { addPedido, useCliente } from "../../../servicios/firebaseCliente";
import { CarritoContext } from "../../../Contexto/Carrito/Context";

const Details: React.FC<{reference: string, coord: any, names: string, card: string, expire: string, securityCode: string, timeDelivery: number}> = ({reference, coord, names, card, expire, securityCode, timeDelivery}) => {
    
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [deliveryMode, setDeliveryMode] = useState("delivery");

    const currentClient = useCliente();

    const { carrito, emptyCarrito } = useContext(CarritoContext);
    const total = carrito.total;
    const pedidos = carrito.pedidos;

    return (
        <div>
            <h6>Detalles del pedido:</h6>
            <IonList>
                <IonItem>
                    <IonLabel>
                        <p>Nombres y Apellidos</p>
                        <h2 className="ion-text-capitalize">{names}</h2>
                    </IonLabel>
                </IonItem>

                { card !== "" ?
                    <IonItem>
                        <IonLabel>
                            <p>Número de tarjeta</p>
                            <h2>{card}</h2>
                        </IonLabel>
                    </IonItem>
                    : <span></span>
                }
                
                <IonItem>
                    <IonLabel>
                        <p>Dirección de entrega</p>
                        <h2>{coord}</h2>
                    </IonLabel>
                </IonItem>

                <IonItem>
                    <IonLabel>
                        <p>Punto de referencia</p>
                        <h2>{reference}</h2>
                    </IonLabel>
                </IonItem>

                <IonItem>
                    <IonLabel>
                        <p>Tiempo estimado de entrega</p>
                        <h2>{ timeDelivery } minutos</h2>
                    </IonLabel>
                </IonItem>
            </IonList>

            <IonButton onClick={ () => {
                    setDeliveryMode("pick");
                    setShowModal(true);
                    addPedido(currentClient?.uid as string, reference, coord, names, card, expire, securityCode, timeDelivery, "recojo personal", pedidos, total);
                }} 
                fill="clear" className="mt-4">
                <IonIcon slot="end" icon={storefrontOutline}/>
                <IonLabel>Recoger en tienda</IonLabel>
            </IonButton>

            <IonModal isOpen={showModal}>
                <IonPage>
                    <IonHeader>
                        <IonToolbar color="primary" className="center">
                            <IonTitle>Pedido en camino</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div className="ion-padding">
                            
                            { deliveryMode === "delivery" 
                                ? 
                                    <div className="container">
                                        <div className="inStore"> 
                                            <IonLabel>Recogido</IonLabel>
                                        </div>
                                        <div className="coming">
                                            <IonLabel>En camino</IonLabel>
                                        </div>
                                        <div className="delivered">
                                            <IonLabel>Entregado</IonLabel>
                                        </div>
                                    </div>
                                :
                                    <div className="container pick">
                                        <div className="inStore"> 
                                            <IonLabel>Listo en tienda</IonLabel>
                                        </div>
                                        <div className="delivered">
                                            <IonLabel>Recogido</IonLabel>
                                        </div>
                                    </div>
                            }
                            
                            <IonButton onClick={() => {
                                setShowModal(false);
                                emptyCarrito();
                                history.replace("/");
                            }} 
                                expand="full" className="ion-margin">Entendido</IonButton>
                        </div>
                    </IonContent>
                </IonPage>
                
            </IonModal>

            <IonButton onClick={() => {
                setDeliveryMode("delivery");
                setShowModal(true);
                addPedido(currentClient?.uid as string, reference, coord, names, card, expire, securityCode, timeDelivery, "entrega", pedidos, total);
            }}
                expand="block" className="mt-3">
                Finalizar Pedido
            </IonButton>
        </div>
    );
};

export default Details;