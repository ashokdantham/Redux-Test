import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import firstReducer from './Reducers'
import mySaga from './Sagas'
import reportWebVitals from './reportWebVitals';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({firstReducer})


// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
})
sagaMiddleware.run(mySaga)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
