export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const CLEAR_USERS = 'CLEAR_USERS';
export const GET_CRUD_USERS = 'GET_CRUD_USERS';
export const POST_CRUD_USERS = 'POST_CRUD_USERS';
export const UPDATE_CRUD_USERS = 'UPDATE_CRUD_USERS';
export const DELETE_CRUD_USERS = 'DELETE_CRUD_USERS';

export const getUsersFetch = () => ({
    type: GET_USERS_FETCH
})

export const clearUsers = () => ({
    type: CLEAR_USERS
})

export const updateUsers = (users) => ({
    type: GET_USERS_SUCCESS,
    users: users
})

// export const getCrudUsers = () => ({
//     type: GET_CRUD_USERS
// })
// export const postCrudUsers = () => ({
//     type: POST_CRUD_USERS
// })
// export const updateCrudUsers = () => ({
//     type: UPDATE_CRUD_USERS
// })
// export const deleteCrudUsers = () => ({
//     type: DELETE_CRUD_USERS
// })
