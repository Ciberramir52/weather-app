import '../UsersPage.css'
import { UserSection } from '../components';
import { useAppDispatch, useUIStore, useUsersStore } from "../../hooks";
import UserModal from '../components/modal';
import { AddButton } from '../components/AddButton';
import { userNull } from '../../store';

export function UsersPage() {
    const { users, setActiveUser } = useUsersStore();

    const dispatch = useAppDispatch();

    const { startAddingNewUser } = useUIStore();

    const onAdd = () => {
        dispatch( setActiveUser( userNull ) )
        dispatch( startAddingNewUser() )
    }
        
    return ( 
        <div className="basePage">
            <h1>Weather App</h1>
            <UserModal />
            <div className='container'>
                <div className='item titles'>
                    <div className="user">
                        <h3>Name</h3>
                    </div>
                    <div className="data">
                        <h3>Data</h3>
                    </div>
                    <div className="actions">
                        <h3>Edit/ Delete</h3>
                    </div>
                </div>
                {
                    users.map( user => (
                        <UserSection key={ user.id } user={ user }/>
                    ))
                }
            </div>
            <AddButton onAdd={ onAdd } />
        </div>
     );
}