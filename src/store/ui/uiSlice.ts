import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isUserModalOpen: false,
        isEditing: false,
        isAdding: false,
    },
    reducers: {
        onOpenEditUserModal: ( state ) => {
            state.isUserModalOpen = true;
            state.isEditing = true;
            state.isAdding = false;
        },
        onOpenAddNewUserModal: ( state ) => {
            state.isUserModalOpen = true;
            state.isAdding = true;
            state.isEditing = false;
        },
        onCloseUserModal: ( state ) => {
            state.isUserModalOpen = false;
            state.isAdding = false;
            state.isEditing = false;
        }
    }
})

export const {
    onOpenAddNewUserModal,
    onOpenEditUserModal,
    onCloseUserModal
} = uiSlice.actions;