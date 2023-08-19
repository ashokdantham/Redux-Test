import './App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux';
import { getUsersFetch, clearUsers } from './Actions';

function App() {
   const dispatch = useDispatch();
  const users = useSelector(state => state?.firstReducer?.users);
  return (
    <div className="App">
      <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      <button onClick={() => dispatch(clearUsers())}>Clear Users</button>
      {users?.map((user, index) => (
        <div key={index}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
