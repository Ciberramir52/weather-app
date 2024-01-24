import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteProp } from "../../helpers";

export function DeleteButton( { onDelete }:DeleteProp ) {
    return ( 
        <IconButton onClick={ onDelete } >
            <DeleteIcon />
        </IconButton>
     );
}