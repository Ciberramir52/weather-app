import { Route, Routes } from "react-router";
import { UsersPage } from "../users/pages/UsersPage";


export function AppRouter() {
    return ( 
        <Routes>
            <Route path="/*" element={ <UsersPage /> } />
        </Routes>
     );
}