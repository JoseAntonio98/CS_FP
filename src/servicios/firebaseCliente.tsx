//Funciones de autanticacion de firebase
import { setPersistence, createUserWithEmailAndPassword, browserSessionPersistence, getAuth, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { setDoc, doc, GeoPoint, getFirestore} from "firebase/firestore"

//Modulo de autenticacion de firebase
import { app } from '../firebaseConfig'

// Toast
import { toast } from "../components/toast"

var user : User;
var signed;

const db = getFirestore(app);
const auth = getAuth()

auth.setPersistence(browserSessionPersistence)

//Autenticacion de administradores
auth.onAuthStateChanged((userCredentials)=>{
    if (userCredentials) {
        signed = true;
    } else {
        signed = false;
    }
});

export function createCliente(nombre: string, celular: string, email:string, password:string)
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

        //user = userCredentials.user;
    }).catch((error)=>{
        console.log(error.code);
        console.log(error.message);
    });
}
export async function signInCliente(email:string, password:string)
{
    setPersistence(auth, browserSessionPersistence)
    .then(async () => {
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
            const user = userCredentials.user;
            console.log('Ingreso correctamente');
            console.log('auth', auth)
            console.log('user', user)
            signed = true;
            toast("Ingreso Exitoso");
            
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
    
            console.log('Error de autenticacion de cliente');
            console.log(errorCode);
            console.log(errorMessage);
            toast('Error de autenticacion de cliente')
        });
    })
    .catch((error) => {
        console.log(error.message)
        console.log(error.message)        
    })
}

export function signOutCliente()
{
    signOut(auth)
    .then(()=>{
        console.log('Cierre de Sesión Exitoso')
    })
    .catch(()=>{});
}

export function getUser()
{
    return auth.currentUser;
}

export function isClienteSigned()
{
    console.log(auth.currentUser?.uid)
    //     console.log('auth ', auth)
    console.log('usuer current ', auth.currentUser)
    return auth.currentUser == null
    

}

// Agregar datos del pedido
export async function addPedido(reference: string, address: string, names: string, card: string, expire: string, securityCode: string)
{
    await setDoc(doc(db, "pedidos", new Date().getTime().toString()),{
        referencia: reference,
        direccion: address,
        nombres: names,
        tarjeta: card,
        expiracion: expire,
        codigo_seguridad: securityCode
    });    
}
