import { useUsersStore } from "../../hooks";

export function WeatherPage() {

    const { activeUser } = useUsersStore();

    return ( 
        <>
            <h3>Hello { activeUser.name }</h3> 
        </>
     );
}