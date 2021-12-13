//Funciones de autanticacion de firebase
import React from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { query, collection, where, getDocs, setDoc, doc, GeoPoint } from "firebase/firestore"

//Modulo de autenticacion de firebase
import { auth, db } from '../firebaseConfig'
import { toast } from "../components/toast"
import { useState, useEffect } from 'react'

export function createCliente(nombre: string, celular: string, email: string, password: string, coord: number[]) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {

            setDoc(doc(db, "clientes", userCredentials.user.uid), {
                uid: userCredentials.user.uid,
                email: email,
                nombre: nombre,
                celular: celular,
                password: password,
                disponible: true,
                direccion: new GeoPoint(coord[0], coord[1])
            });

            toast('Registro Exitoso')

        }).catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}
export async function signInCliente(email: string, password: string) {
    toast('Ingresando..')

    async function getClientes() {
        let exist = false;
        {
            const q = query(collection(db, "clientes"), where("email", "==", email));
            const querySnapshot = await getDocs(q);
            exist = querySnapshot.docs.length !== 0
        }
        return exist;
    }
    getClientes()
        .then((exist: boolean) => {
            if (exist) {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredentials) => {
                        toast('Ingreso Correcto')
                    })
                    .catch((error) => {
                        toast('Credentials invalidas')
                    })
            }
            else {
                toast('No se existe una cuenta con estas credenciales')
            }
        })
}

export function logOutCliente() {
    return signOut(auth)
}

export function useCliente() {
    const [currentUser, setCurrentUser] = useState<User | null>()
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, []);

    return currentUser;
}

export function isClienteSigned() {
    console.log(auth.currentUser?.uid)
    //     console.log('auth ', auth)
    console.log('usuer current ', auth.currentUser)
    return auth.currentUser == null


}

// Agregar datos del pedido
export async function addPedido(reference: string, coord: any, names: string, card: string, expire: string, securityCode: string, timeDelivery: number, type: string) {
    await setDoc(doc(db, "pedidos", new Date().getTime().toString()), {
        referencia: reference,
        direccion: coord,
        nombres: names,
        tarjeta: card,
        expiracion: expire,
        codigo_seguridad: securityCode,
        tiempo_entrega: timeDelivery,
        tipo_entrega: type
    });
}

export async function setDataCliente(uid: string, setUsuario: any) {
    const q = query(collection(db, "clientes"), where("uid", "==", uid));
    await getDocs(q)
        .then((doc) => {
            const data = doc.docs[0].data()
            setUsuario(
                {
                    uid: data.uid,
                    disponible: data.disponible,
                    nombre: data.nombre,
                    correo: data.email,
                    dir_lat: data.direccion._lat,
                    dir_lon: data.direccion._long
                }
            )
            return true;
        })
        .catch((e) => {
            console.log(e.message)
            return false
        })

}