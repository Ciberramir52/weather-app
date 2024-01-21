import '../UsersPage.css'
import { UserSection } from '../components/UserSection';
import { useUsersStore } from "../../hooks";
import { useAppDispatch } from '../../hooks/hooks';
import { useEffect } from 'react';
import { getWeather } from '../../helpers';

export function UsersPage() {
    const { users } = useUsersStore();

    const dispatch = useAppDispatch();

    useEffect( () => {
        dispatch(getWeather( { lon: -103.32, lat: 20.74 } ))
    })
        
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