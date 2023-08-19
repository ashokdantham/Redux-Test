import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import { GET_USERS_FETCH, updateUsers} from '../Actions';


function getUsersFromApi() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .catch(error => error)

}

function postCrudUsersFromApi() {
    // const data =  fetch('https://crudcrud.com/api/98d08d4aa516461c93cb6a94d07280bf/users', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         name: 'hello',
    //         email: 'a@gmail.com'})
    // })

    axios
        .post('https://crudcrud.com/api/98d08d4aa516461c93cb6a94d07280bf/users', {
                     name: 'hello',
                     email: 'a@gmail.com'})
        .then((response) => {
         console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
function* postCrudUsers() {
    const users = yield call(postCrudUsersFromApi);
    console.log(users)
}
function* getUsers() {
    const users = yield call(getUsersFromApi);
    yield put(updateUsers(users));
}

function* mySaga() {
   
    yield takeEvery(GET_USERS_FETCH, getUsers)

}

export default mySaga;