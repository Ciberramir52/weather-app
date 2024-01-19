import '../UsersPage.css'
import { UserSection } from '../components/UserSection';
import { useUsersStore } from "../../hooks";

export function UsersPage() {
    const { users } = useUsersStore();
    return ( 
        <div className="basePage">
            <h1>Weather App</h1>
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
        </div>
     );
}