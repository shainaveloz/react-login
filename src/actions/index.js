import axios from 'axios';

const API = '';

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers() {
    const url = `${API}/authenticate`;
    const request = axios.get(url);

    return{
        type: FETCH_USERS,
        payload: request
    }
}