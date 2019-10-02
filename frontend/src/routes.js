import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/home" exact component={Home} />
        </BrowserRouter>
    );
}

