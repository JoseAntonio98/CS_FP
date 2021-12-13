//Funciones de autanticacion de firebase
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { query, getDocs, where, collection, setDoc, doc} from "firebase/firestore"

//Modulo de autenticacion de firebase
import { auth, db } from '../firebaseConfig'
import { toast } from "../components/toast"
import { useState, useEffect } from 'react'

export async function createTienda(nombre: string, ruc: string, email:string, password:string, rubro : string)
{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
        
        setDoc(doc(db, "tiendas", userCredentials.user.uid),{
            uid : userCredentials.user.uid,
            email : email,
            nombre : nombre,
            ruc : ruc,
            password : password,
            rubro : rubro
        });

        toast('Registro Exitoso')

    }).catch((error)=>{
        console.log(error.code);
        console.log(error.message);
    });
}
export async function signInTienda(email:string, password:string)
{
    toast('Ingresando..')

    async function getClientes() 
    {
        let exist = false;
        {
            const q = query(collection(db, "tiendas"), where("email", "==", email));
            const querySnapshot = await getDocs(q);
            exist = querySnapshot.docs.length!==0
        }
        return exist;
    }
    getClientes()
        .then((exist:boolean) => {
            if (exist) {
                signInWithEmailAndPassword(auth, email, password)
                .then ((userCredentials) => {
                    toast('Ingreso Correcto')
                })
                .catch ((error) => {
                    toast('Credentials invalidas')
                })
            }
            else{
                toast('No se existe una cuenta con estas credenciales')
            }
        })
}

export function logOutCliente()
{
    return signOut(auth)
}

export function useTienda()
{
    const [currentUser, setCurrentUser] = useState <User | null>()
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, []);
    
    return currentUser;
}

export function isTiendaSigned()
{
    console.log(auth.currentUser!=null)
    return auth.currentUser;
}


