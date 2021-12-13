import React, { useContext, useState } from "react";
import LocalizacionBoton from '../../LocalizacionBoton'
import Mapa from '../../Mapa'
import { Link } from 'react-router-dom';
import { IonCol, IonButton, IonContent, IonGrid, IonRow,IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { createCliente} from '../../../servicios/firebaseCliente';
import { toast } from '../../toast';

const Registro: React.FC = () => {

    const [nombre, setNombre] = useState('')
    const [celular, setCelular] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [coord, setCoord] = useState([0,0])

    async function registro () {
        if(password !== cpassword){
            toast('contraseñas diferentes')
        }
        else {
            createCliente(nombre, celular, email, password, coord)
        }
        
    }

    return (
            <IonContent scrollY={true} fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol offsetLg="4" sizeLg="4" className='ion-text-center'>
                            <h2>Registrar un nuevo Cliente</h2>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol offsetLg="4" sizeLg="4" >
                            <IonItem>
                            <IonLabel position="floating" > Nombre</IonLabel>
                            <IonInput onIonChange={(e:any) => setNombre(e.target.value)}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol offsetLg="4" sizeLg="4" >
                            <IonItem>
                                <IonLabel position="floating"> Celular</IonLabel>
                                <IonInput onIonChange={(e:any) => setCelular(e.target.value)}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol offsetLg="4" sizeLg="4" >
                            <IonItem>
                                <IonLabel position="floating" > Correo Electronico</IonLabel>
                                <IonInput onIonChange={(e:any) => setEmail(e.target.value)}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol offsetLg="4" sizeLg="4" >
                            <IonItem>
                                <IonLabel position="floating"> Contraseña</IonLabel>
                                <IonInput onIonChange={(e:any) => setPassword(e.target.value)} type="password" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol offsetLg="4" sizeLg="4" >
                            <IonItem>
                                <IonLabel position="floating">Confirmar Contraseña</IonLabel>
                                <IonInput onIonChange={(e:any) => setCPassword(e.target.value)} type="password" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol offsetLg="4" sizeLg="4" >
                            <IonItem>
                                <IonLabel position="fixed" >Dirección</IonLabel>
                                <LocalizacionBoton setCoord={setCoord}/>
                            </IonItem>
                            {
                                coord[0] != 0?
                                <IonRow>
                                    <Mapa tipo='search' o_lat={coord[0]} o_lon={coord[1]} d_lat={0} d_lon={0} />
                                </IonRow>
                                : null
                            }
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol offsetLg="4" sizeLg="4" className='ion-text-center ion-margin-top'>
                            <IonButton expand="block" fill="outline" onClick={registro} >
                                Registrar
                            </IonButton>
                            <p><Link to="/tienda/login">Ingresar como tienda</Link></p>
                            <p> ¿Ya tienes una cuenta? <Link to="/">Ingresa aquí</Link> </p>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
    );
};

export default Registro;
