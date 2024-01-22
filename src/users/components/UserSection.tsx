import { UserSectionProps } from "../../helpers";
import { useUIStore, useUsersStore } from "../../hooks";
import { useAppDispatch } from "../../hooks/hooks";
import '../UsersPage.css';
import { EditButton, DeleteButton } from "./";
import { Link } from 'react-router-dom';

export function UserSection( { user }: UserSectionProps ) {

    const dispatch = useAppDispatch();

    const { setActiveUser, startDeletingUser } = useUsersStore();
    const { startEditingUser } = useUIStore();

    const onSelect = () => {
        dispatch( setActiveUser( user ) )        
    }

    const onDelete = () => {
        dispatch( startDeletingUser( user ) )
    }

    const onEdit = () => {
        dispatch( setActiveUser( user ) )
        dispatch( startEditingUser() )
    }

    return ( 
        <div className="item userSection">
            <div className="user">
                <Link to="/weather" onClick={ onSelect }>
                    <h3>{ user.name }</h3>
                </Link>
            </div>
            <div className="data">
                <p><strong>Lat: </strong> { user.lat }</p>
                <p><strong>Long: </strong> { user.lon }</p>
            </div>
            <div className="actions">
                <EditButton onEdit={ onEdit } />
                <DeleteButton onDelete={ onDelete } />
            </div>
        </div>
     );
}