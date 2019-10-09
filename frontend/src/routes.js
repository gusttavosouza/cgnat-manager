import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Logs from './pages/Logs/Log';
import Setting from './pages/Setting/Setting';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/logs" exact component={Logs} />
            <Route path="/setting" exact component={Setting} />
        </BrowserRouter>
    );
}

