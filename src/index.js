import  {Provider} from "./StoreContext";
import './index.css';
import store from "./redux/redux_store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = ()=> {
    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
            <App />
            </Provider>,

        </React.StrictMode>,
        </BrowserRouter>,

    document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe(()=>{
    rerenderEntireTree()
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
