//Funciones de autanticacion de firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { setDoc, doc} from "firebase/firestore"

//Modulo de autenticacion de firebase
import { auth } from '../firebaseConfig'
import { db } from '../firebaseConfig'

// Toast
import { toast } from "../components/toast"

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

        user = userCredentials.user;
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
export async function signInTienda(email:string, password:string)
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

export function signOutTienda()
{
    signOut(auth)
    .then(()=>{signed = false})
    .catch(()=>{});
}
export function getUser()
{
    return user;
}
export function isTiendaSigned()
{
    console.log(auth.currentUser!=null)
    return auth.currentUser;
}


