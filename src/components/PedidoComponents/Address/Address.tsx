import React from "react";
import { IonItem, IonLabel, IonTextarea, IonButton, useIonToast, IonTitle, IonRow } from "@ionic/react";

import './Address.css';
import LocalizacionBoton from "../../LocalizacionBoton";
import Mapa from "../../Mapa";

const Address: React.FC<{ setPaymentDisabled: any, setCurrentTab: any, reference: string, setReference: any, coord: any, setCoord: any}> = ({setPaymentDisabled, setCurrentTab, reference, setReference, coord, setCoord}) => {
    
    const [present] = useIonToast();

    return (
        <div>
            <h6>Datos de entrega</h6>
            <IonItem>
                <IonLabel position="fixed" >Dirección:</IonLabel>
                <LocalizacionBoton setCoord={setCoord}/>
            </IonItem>
            {
                coord[0] != 0?
                <IonRow className="map">
                    <Mapa tipo='search' o_lat={coord[0]} o_lon={coord[1]} d_lat={0} d_lon={0}/>
                </IonRow>
                : null
            }

            <IonItem>
                <IonLabel position="floating">Referencia:</IonLabel>
                <IonTextarea onIonChange={ (e) => setReference(e.detail.value)} value={reference}
                    rows={2} cols={10} placeholder="Ingrese algún punto de referencia (Opcional)"></IonTextarea>
            </IonItem>

            <IonButton onClick={() => {
                if(coord[0] != 0) {
                    setPaymentDisabled(false);
                    setCurrentTab("payment");
                } else {
                    present({
                        message: "Su dirección es un campo obligatorio",
                        duration: 2000,
                        color: "dark"
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