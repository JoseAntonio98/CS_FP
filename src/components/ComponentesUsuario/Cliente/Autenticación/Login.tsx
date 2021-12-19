import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { IonCol, IonButton, IonIcon, IonGrid, IonRow, IonTitle, IonItem, IonLabel, IonInput } from '@ionic/react';
import { signInCliente } from '../../../../servicios/firebaseCliente';
import './Login.css';

import { personCircle } from 'ionicons/icons';

interface ContainerProps { }

const Login: React.FC<ContainerProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        await signInCliente(email, password)
    }

    return (
            <IonGrid>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-top'>
                        <h1>Ingresar como Cliente</h1>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-top'>
                        <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={personCircle}
                        />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating" > Correo Electronico</IonLabel>
                            <IonInput onIonChange={(e:any) => setEmail(e.target.value)} type="email"/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating"> Contraseña</IonLabel>
                            <IonInput onIonChange={(e:any) => setPassword(e.target.value)} type="password"/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-top'>
                        <IonButton expand="block" fill="outline" onClick={login} >
                            Ingresar
                        </IonButton>
                        <p><Link to="/tienda/login">soy una tienda</Link></p>
                        <p> ¿Eres nuevo aquí? <Link to="/cliente/registro">Registrate</Link> </p>
                    </IonCol>
                </IonRow>
            </IonGrid>
    );
};

export default Login;
