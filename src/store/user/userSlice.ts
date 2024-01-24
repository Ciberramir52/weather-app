import { createSlice } from "@reduxjs/toolkit";
import { User, initialUsers, userNull } from "./";

interface UserState {
    isLoadingUsers: boolean;
    users: User[];
    activeUser: User,
}

const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 9);
};

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoadingUsers: true,
        users: initialUsers,
        activeUser: userNull,
    },
    reducers: {
        onSetActiveUser: ( state, { payload }) => {
            state.activeUser = payload;
        },
        onAddNewUser: ( state, { payload }) => {
            state.users.push( {...payload, id: generateUniqueId() } );
            state.activeUser = userNull;
        },
        onUpdateUser: ( state, { payload }) => {
            state.users = state.users.map( user => {
                if ( user.id === payload.id ) return payload;
                return user;
            });
            state.activeUser = userNull;
        },
        onDeleteUser: ( state, { payload }) => {
            state.users = state.users.filter( user => user.id !== payload.id );
            state.activeUser = userNull;
        },
    }
});

export const {
    onAddNewUser,
    onDeleteUser,
    onSetActiveUser,
    onUpdateUser
} = userSlice.actions;

