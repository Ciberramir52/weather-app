import { onAddNewUser, onDeleteUser, onSetActiveUser, onUpdateUser, type RootState, type User } from "../store";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useUsersStore = () => {
    const dispatch = useAppDispatch();
    const { users, activeUser } = useAppSelector( ( state: RootState ) => state.users );

    const setActiveUser = ( user: User ) => () => dispatch( onSetActiveUser( user ) )

    const startAddingUser = ( user: User ) => () => dispatch( onAddNewUser( user ) )

    const startUpdatingUser = ( user: User ) => () => dispatch( onUpdateUser( user ) )

    const startDeletingUser = ( user: User ) => dispatch( onDeleteUser( user ) )

    return {
        users,
        activeUser,
        hasUserSelected: !!activeUser,

        setActiveUser,
        startDeletingUser,
        startAddingUser,
        startUpdatingUser
    }
}