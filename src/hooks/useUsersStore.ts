import { useDispatch } from "react-redux";
import { onAddNewUser, onDeleteUser, onSetActiveUser, type RootState, type User } from "../store";
import { useAppSelector } from "./hooks";

export const useUsersStore = () => {
    const dispatch = useDispatch();
    const { users, activeUser } = useAppSelector( ( state: RootState ) => state.users );

    const setActiveUser = ( user: User ) => {
        dispatch( onSetActiveUser( user ) );
    }

    const startSavingUser = ( user: User ) => {
        dispatch( onAddNewUser( user ) );
    }

    const startDeletingEvent = ( user: User ) => {
        dispatch( onDeleteUser( user ) );
    }

    return {
        users,
        activeUser,
        hasUserSelected: !!activeUser,

        setActiveUser,
        startDeletingEvent,
        startSavingUser,
    }
}