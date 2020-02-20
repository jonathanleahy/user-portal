import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from "./Pages/Login";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './reducers'
import Dashboard from "./Pages/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <ToastContainer/>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <App/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
