import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../../../../firebaseConfig';
import { IonSelect, IonContent, IonSelectOption, IonCol, IonButton, IonGrid, IonRow, IonItem, IonLabel, IonInput } from '@ionic/react';
import { createTienda } from '../../../../servicios/firebaseUsuario'
import { toast } from '../../../toast'
import LocalizacionBoton from "../../../LocalizacionBoton";
import Mapa from "../../../Mapa";

const Registro: React.FC = () => {

    const [nombre, setNombre] = useState('')
    const [ruc, setRuc] = useState('')
    const [rubro, setRubro] = useState('')
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const [coord, setCoord] = useState([0,0])

    const [arrayRubros, setArrayRubros] = useState([{}])

    async function Registro () {
        if(password !== cpassword){
            toast('contraseñas diferentes')
        }
        else {
            await createTienda(nombre, ruc, email, password, rubro, coord)
        } 
    }

    const rubrosCollectionRef = collection(db, 'rubros')
    useEffect(()=>{
        async function obtenerRubros()
        {
            const data = await getDocs(rubrosCollectionRef);
            setArrayRubros(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
        }
        obtenerRubros()
    },[])

    return (
        <IonContent scrollY={true} fullscreen>
            <IonGrid>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4" className='ion-text-center'>
                        <h2>Crear nueva Tienda</h2>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating" > Nombre</IonLabel>
                            <IonInput onIonChange={(e:any) => setNombre(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating"> RUC</IonLabel>
                            <IonInput onIonChange={(e:any) => setRuc(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating" > Correo Electronico</IonLabel>
                            <IonInput onIonChange={(e:any) => setemail(e.target.value)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating"> Contraseña</IonLabel>
                            <IonInput onIonChange={(e:any) => setpassword(e.target.value)} type="password" />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating">Confirmar Contraseña</IonLabel>
                            <IonInput onIonChange={(e:any) => setcpassword(e.target.value)} type="password" />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg="4" sizeLg="4">
                        <IonItem>
                            <IonLabel position="floating">Rubro</IonLabel>
                            <IonSelect interface="popover" onIonChange={(e:any) => setRubro(e.detail.value)}>
                                {
                                    arrayRubros?
                                    arrayRubros.map((item:any, index:Number) => {
                                        return <IonSelectOption key={index.toString()} value={item.rubro}> {item.rubro} </IonSelectOption>
                                    }) : <>No hay ningún rubro actualmente</>
                                }
                            </IonSelect>
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
                        <IonButton expand="block" fill="outline" onClick={Registro} >
                            Registrar
                        </IonButton>
                        <p><Link to="/">soy cliente</Link></p>
                        <p> ¿Ya tienes una cuenta? <Link to="/tienda/login">Ingresa aquí</Link> </p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Registro;
