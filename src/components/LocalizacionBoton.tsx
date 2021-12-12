import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation';
import { IonButton, IonLoading, IonToast } from '@ionic/react';
import React, { useState } from 'react';
import Mapa from './Mapa'

interface LocationError {
    showError: boolean;
    message?: string;
}

interface props {
    setCoord: React.Dispatch<React.SetStateAction<number[]>>;
}

const LocalizacionBoton: React.FC<{setCoord:any}> = ({setCoord} : props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
    const [position, setPosition] = useState<Geoposition>();

    const getLocation = async () => {
        setLoading(true); 

        try {
            const position = await Geolocation.getCurrentPosition();
            setPosition(position);
            setLoading(false);
            setError({ showError: false });

            setCoord([position.coords.latitude, position.coords.longitude])

        } catch (e:any) {
            setError({ showError: true, message: e.message });
            setLoading(false);
        }
    }

    return (
        <>
            <IonLoading
                isOpen={loading}
                onDidDismiss={() => setLoading(false)}
                message={'Obteniendo Localización...'}
            />
            <IonToast
                isOpen={error.showError}
                onDidDismiss={() => setError({ message: "", showError: false })}
                message={error.message}
                duration={3000}
            />
            <IonButton slot="end" id='coord' color="success" onClick={getLocation}> {position ? `${position.coords.latitude} ${position.coords.longitude}` : "Obtener Posición"} </IonButton>
            

        </>
    );
};

export default LocalizacionBoton;