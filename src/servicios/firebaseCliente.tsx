//Funciones de autanticacion de firebase
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

// Agregar datos del pedido
export async function addPedido(uid: string, reference: string, coord: any, names: string, card: string, expire: string, 
                                securityCode: string, timeDelivery: number, type: string, products: any, total: number) {
    await setDoc(doc(db, "pedidos", new Date().getTime().toString()), {
        clienteUid: uid,
        referencia: reference,
        direccion: coord,
        nombres: names,
        tarjeta: card,
        expiracion: expire,
        codigo_seguridad: securityCode,
        tiempo_entrega: timeDelivery,
        tipo_entrega: type,
        productos: products,
        total: total
    });
}

export async function setDataCliente(uid: string, setUsuario: any) {
    const q = query(collection(db, "clientes"), where("uid", "==", uid));
    await getDocs(q)
        .then((doc) => {
            const data = doc.docs[0].data()
            setUsuario( 
                data.uid,
                data.nombre, 
                data.email,
                data.disponible,
                'cliente'
            )
        })
        .catch(() => {
            const q = query(collection(db, "tiendas"), where("uid", "==", uid));
            getDocs(q)
            .then((doc) => {
                const data = doc.docs[0].data()
                setUsuario( 
                    data.uid,
                    data.nombre, 
                    data.email,
                    data.disponible,
                    'tienda'
                )
            })
            .catch((e) => {
                console.log(e.message)
            })
        })

}