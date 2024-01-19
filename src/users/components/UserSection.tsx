import { User } from "../../store";

interface UserSectionProps {
    user: User;
}

export function UserSection( { user }: UserSectionProps ) {
    return ( 
        <a href="#">
            <div className="item userSection">
                <div className="user">
                    <h3>{ user.name }</h3>
                </div>
                <div className="data">
                    <h3>{ user.lat }</h3>
                </div>
                <div className="actions">
                    <h3>{ user.long }</h3>
                </div>
            </div>
        </a>
     );
}