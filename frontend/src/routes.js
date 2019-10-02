import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
        </BrowserRouter>
    );
}

