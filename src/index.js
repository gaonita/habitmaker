import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './components/App';
import {store} from "./store";


import * as firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCUcEQ8fc5_GFISwQvjKPd0yzXeFUxWVpc",
    authDomain: "store-aa4e1.firebaseapp.com",
    databaseURL: "https://store-aa4e1.firebaseio.com",
    projectId: "store-aa4e1",
    storageBucket: "store-aa4e1.appspot.com",
    messagingSenderId: "1059367698619",
    appId: "1:1059367698619:web:e256fdc05c381668"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, document.querySelector('#root')
);


