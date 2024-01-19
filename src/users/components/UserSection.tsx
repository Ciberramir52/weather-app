import { UserSectionProps } from "../../helpers";
import '../UsersPage.css';

export function UserSection( { user }: UserSectionProps ) {
    return ( 
        <div className="item userSection">
            <div className="user">
                <a href="#">
                    <h3>{ user.name }</h3>
                </a>
            </div>
            <div className="data">
                <p><strong>Lat: </strong> { user.lat }</p>
                <p><strong>Long: </strong> { user.long }</p>
            </div>
            <div className="actions">
                <h3>{ user.long }</h3>
            </div>
        </div>
     );
}