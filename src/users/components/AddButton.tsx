import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddProps {
    onAdd: () => void;
}

export function AddButton( { onAdd }:AddProps ) {
    return ( 
        <IconButton onClick={ onAdd }>
            <AddIcon />
        </IconButton>
     );
}
