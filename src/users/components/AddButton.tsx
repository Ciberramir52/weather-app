interface AddProps {
    onAdd: () => void;
}

export function AddButton( { onAdd }:AddProps ) {
    return ( 
        <div  id="add-button" >
            <button onClick={ onAdd }>Añadir usuario</button>
        </div>
     );
}
