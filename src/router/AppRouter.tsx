import { Navigate, Route, Routes } from "react-router";
import { UsersPage } from "../users/pages/UsersPage";
import { WeatherPage } from "../weather";
import { useUsersStore } from "../hooks";


export function AppRouter() {
    const { activeUser } = useUsersStore();

    return ( 
        <Routes>
            <Route path="/weather" element={ ( activeUser.id !== '' )
                                                ? <WeatherPage />
                                                : <Navigate replace to={"/"} /> } 
            />
            <Route path="/*" element={ <UsersPage /> } />
        </Routes>
     );
}