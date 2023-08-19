import { GET_USERS_SUCCESS } from '../Actions';
const firstReducer = (state = {users:[]}, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
        return {
            ...state,
            users: action.users
        };
        case 'CLEAR_USERS':
        return {
            ...state,
            users: []
        }
        default:
        return state;
    }
}
export default firstReducer;