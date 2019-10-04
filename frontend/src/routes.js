import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Logs from './pages/Log/Log';
import Configura from './pages/Setting/Setting';
import Administra from './pages/Setting/Setting';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/logs" exact component={Logs} />
            <Route path="/config" exact component={Configura} />
            <Route path="/admin" exact component={Administra} />
        </BrowserRouter>
    );
}

