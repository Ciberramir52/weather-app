import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { EditProp } from "../../helpers";

export function EditButton( { onEdit }:EditProp ) {
    return ( 
        <IconButton onClick={ onEdit }>
            <EditIcon />
        </IconButton>
     );
}