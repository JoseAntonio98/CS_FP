import { IonCol, IonLabel } from '@ionic/react';
import './CategoryInfo.css';

//Interfaz de datos del componente
interface ContainerProps 
{
    categoryName:string
    categoryDesc:string
    docId:string
}

//Este componente renderiza los datos de una categoria
const CategoryInfo: React.FC<ContainerProps> = (props) => {
    return (
        <IonCol size="10">
            <div>
                <strong>{props.categoryName}</strong>
            </div>
            <div>
                <IonLabel>{props.categoryDesc}</IonLabel>
            </div>
        </IonCol>
  );
};

export default CategoryInfo;
