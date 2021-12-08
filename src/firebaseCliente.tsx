//Funciones de autanticacion de firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { setDoc, doc, GeoPoint} from "firebase/firestore"

//Modulo de autenticacion de firebase
import { auth } from './firebaseConfig'
import { db } from './firebaseConfig'

// Toast
import { toast } from "./components/toast"

var user:User;
var signed;

//Autenticacion de administradores
auth.onAuthStateChanged((userCredentials)=>{
    if (userCredentials) {
        signed = true;
    } else {
        signed = false;
    }
}); 

export async function createCliente(nombre: string, celular: string, email:string, password:string)
{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
        
        setDoc(doc(db, "clientes", userCredentials.user.uid),{
            uid : userCredentials.user.uid,
            email : email,
            nombre : nombre,
            celular: celular,
            password : password,
            direccion: new GeoPoint (12,1)
        });

        toast('Registro Exitoso')

        user = userCredentials.user;
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
export async function signInCliente(email:string, password:string)
{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
        user = userCredentials.user;
        console.log('Ingreso correctamente');
        console.log(user);
        signed = true;
        toast("Ingreso Exitoso")
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('Error de autenticacion de cliente');
        console.log(errorCode);
        console.log(errorMessage);
        toast('Error de autenticacion de cliente')
    });
}

export function signOutCliente()
{
    signOut(auth)
    .then(()=>{signed = false})
    .catch(()=>{});
}
export function getUser()
{
    return user;
}
export function isClienteSigned()
{
    console.log(auth.currentUser!=null)
    return auth.currentUser;
}


