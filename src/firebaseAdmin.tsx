//Funciones de autanticacion de firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";

//Modulo de autenticacion de firebase
import { auth } from './firebaseConfig'

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

function createAdmin(email:string, password:string)
{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
        user = userCredentials.user;
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
export function signInAdmin(email:string, password:string)
{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
        user = userCredentials.user;
        console.log('Ingreso correctamente');
        console.log(user);
        signed = true;
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('Error de autenticacion de administrador');
        console.log(errorCode);
        console.log(errorMessage);
    });
}
export function signOutAdmin()
{
    signOut(auth)
    .then(()=>{signed = false})
    .catch(()=>{});
}
export function getUser()
{
    return user;
}
export function isAdminSigned()
{
    console.log(auth.currentUser!=null)
    return auth.currentUser;
}


