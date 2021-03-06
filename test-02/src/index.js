import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import Main from './containers/main/main';
import Login from './containers/login/login'
import Register from './containers/register/register'

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/register' component={Register}></Route>
                <Route path='/Login' component={Login}></Route>
                <Route component={Main}></Route>
            </Switch>
        </HashRouter>
    </Provider>),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

