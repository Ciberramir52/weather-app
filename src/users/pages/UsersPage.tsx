import '../UsersPage.css'
import { UserSection } from '../components/UserSection';

export function UsersPage() {
    const components = [1, 2, 3, 4, 5];
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
                    components.map( () => (
                        <UserSection />
                    ))
                }
            </div>
        </div>
     );
}