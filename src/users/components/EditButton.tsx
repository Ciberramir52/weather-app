import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

interface EditProps {
    onEdit: () => void;
}

export function EditButton( { onEdit }: EditProps ) {
    return ( 
        <IconButton onClick={ onEdit }>
            <EditIcon />
        </IconButton>
     );
}