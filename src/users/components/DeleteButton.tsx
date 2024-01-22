import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface DeleteProps {
    onDelete: () => void;
}

export function DeleteButton( { onDelete }: DeleteProps ) {
    return ( 
        <IconButton onClick={ onDelete } >
            <DeleteIcon />
        </IconButton>
     );
}