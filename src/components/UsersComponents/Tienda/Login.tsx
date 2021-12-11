import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {IonCol, IonIcon, IonButton, IonGrid, IonRow, IonItem, IonLabel, IonInput } from '@ionic/react';
import { signInTienda } from '../../../servicios/firebaseTienda'
import './Login.css';

import { business } from 'ionicons/icons'

interface ContainerProps { }

const Login: React.FC<ContainerProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        await signInTienda(email, password)
    }

    return (
        <div className="Login">
            <IonGrid>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-top'>
                        <h1>Ingresar como Tienda</h1>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-top'>
                        <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={business}
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
                        <p><Link to="/">soy cliente</Link></p>
                        <p> ¿Eres nuevo aquí? <Link to="/tienda/registro">Registrate</Link> </p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default Login;
