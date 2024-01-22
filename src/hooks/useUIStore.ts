import { onCloseUserModal, onOpenAddNewUserModal, onOpenEditUserModal, type RootState} from "../store";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useUIStore = () => {
    const dispatch = useAppDispatch();

    const { isUserModalOpen, isEditing, isAdding } = useAppSelector( ( state: RootState ) => state.ui );

    const startEditingUser = () => () => dispatch( onOpenEditUserModal() );
    const startAddingNewUser = () => () => dispatch( onOpenAddNewUserModal() );
    const startClosingModal = () => () => dispatch( onCloseUserModal() );

    return {
        isUserModalOpen,
        isEditing,
        isAdding,
        startAddingNewUser,
        startEditingUser,
        startClosingModal
    }
}