import { useContext } from "react";
import { IonList, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonBadge, IonText, IonRow, IonCol, IonLabel, IonButton } from "@ionic/react";
import Sesion from "../../../../Contexto/Sesion"
import Carrito from "../../../../Contexto/Carrito";

interface ContainerProps {

}

const PedidoInfo: React.FC = () => {

    const sesion = useContext(Sesion)
    const carrito = useContext(Carrito)

    return (
        <IonList>

            <IonItemSliding>

                <IonItem>
                    <IonBadge slot="start">x3</IonBadge>
                    <IonText>{sesion.dir_lon}</IonText>
                    <IonBadge slot="end">S/.75.00</IonBadge>
                </IonItem>

                <IonItemOptions side="end">
                    <IonItemOption onClick={() => alert('seguro?')}>Borrar</IonItemOption>
                </IonItemOptions>

            </IonItemSliding>

            <IonItemSliding>

                <IonItem>
                    <IonBadge slot="start">x3</IonBadge>
                    <IonText>Segundo Elemento</IonText>
                    <IonBadge slot="end">S/.75.00</IonBadge>
                </IonItem>

                <IonItemOptions side="end">
                    <IonItemOption onClick={() => alert('seguro?')}>Borrar</IonItemOption>
                </IonItemOptions>

            </IonItemSliding>

            <IonItemSliding>

                <IonItem>
                    <IonText slot="start" ><b>Total</b></IonText>
                    <IonText slot="end">S/.75.00</IonText>
                </IonItem>

            </IonItemSliding>

            <IonButton href='/pedido' expand="block" fill="solid" >
                Hacer Pedido
            </IonButton>

        </IonList>
    )
}

export default PedidoInfo;