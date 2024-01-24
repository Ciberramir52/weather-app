import { AddProp } from "../../helpers";


export function AddButton( { onAdd }:AddProp ) {
    return ( 
        <div  id="add-button" >
            <button onClick={ onAdd }>Añadir usuario</button>
        </div>
     );
}
