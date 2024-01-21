import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


export function DeleteButton() {
    return ( 
        <IconButton onClick={ console.log } >
            <DeleteIcon />
        </IconButton>
     );
}