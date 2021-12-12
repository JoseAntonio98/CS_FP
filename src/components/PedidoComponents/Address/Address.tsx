import React from "react";
import { IonItem, IonLabel, IonTextarea, IonButton, useIonToast, IonTitle, IonRow } from "@ionic/react";

import './Address.css';
import LocalizacionBoton from "../../LocalizacionBoton";
import Mapa from "../../Mapa";

const Address: React.FC<{ setPaymentDisabled: any, setCurrentTab: any, reference: string, setReference: any, coord: any, setCoord: any}> = ({setPaymentDisabled, setCurrentTab, reference, setReference, coord, setCoord}) => {
    
    const [present] = useIonToast();

    return (
        <div>
             <IonTitle className="pb-3 px-0">Datos de entrega</IonTitle>
            <IonItem>
                <IonLabel position="fixed" >Dirección:</IonLabel>
                <LocalizacionBoton setCoord={setCoord}/>
            </IonItem>
            {
                coord[0] != 0?
                <IonRow className="map">
                    <Mapa coordX={coord[0]} coordY={coord[1]} />
                </IonRow>
                : null
            }

            <IonItem>
                <IonLabel position="floating">Referencia:</IonLabel>
                <IonTextarea onIonChange={ (e) => setReference(e.detail.value)} value={reference}
                    rows={2} cols={10} placeholder="Ingrese algún punto de referencia."></IonTextarea>
            </IonItem>

            <IonButton onClick={() => {
                // Agregar validacion de direccion
                if(reference.trim() !== "" && coord[0] != 0) {
                    setPaymentDisabled(false);
                    setCurrentTab("payment");
                } else {
                    present({
                        message: "Ingrese todos los datos",
                        duration: 2000,
                        color: "light"
                    });
                }
                
            } } 
                expand="block" className="mt-3">
                Continuar
            </IonButton>
        </div>
    );
};

export default Address;