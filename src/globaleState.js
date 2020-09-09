import React from 'react';

export const globaleState = React.createContext();

export function Provider(props) {

    const [users, setUsers] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    const state = {
        searchValue,
        users,
        usersInfo: [],
        usersSize: 5,
        next: null,
        searchChange: (e) => {
            setSearchValue(e.target.value);
        },
        getUsers: () => {getUsersCl(state.next, state.usersSize, setUsers, state.usersInfo)},
        userSetSize: (size) => {
            setUsers([]);
            state.usersSize = size;
            state.getUsers();
        },
        nextPage: (nextNumber) => {
            setUsers([]);
            state.next = {
                page: nextNumber + 1,
                seed: state.usersInfo.seed
            };
            state.getUsers()
        },
        userDelete: (email) => {
            state.users = state.users.filter(e => e.email != email);
            if (state.users.length === 0) {
                state.getUsers();
            }
        }
    }

    return (
        <globaleState.Provider value={state}>
            {props.children}
        </globaleState.Provider>
    )
}

function getUsersCl(next, usersSize, setUsers, usersInfo) {

    const url = `https://randomuser.me/api?results=${usersSize}
        ${next ? `&page=${next.page}&seed=${next.seed}` : ''}`;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            setUsers(json.results);
            usersInfo = json.info;
        })
        .catch(() => console.log('Malumot  olishda xato yuz berdi!!!'))
}