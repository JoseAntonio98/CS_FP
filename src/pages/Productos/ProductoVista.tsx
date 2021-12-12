import React from "react";
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import ContentVista from '../../components/ComponentesUsuario/Productos/Producto/ContentVista'


interface ContainerProps {
    
}

const ProductoVista: React.FC<ContainerProps> = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Aplicación
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <ContentVista/>
                
            </IonContent>
        </IonPage>
    );
}

export default ProductoVista