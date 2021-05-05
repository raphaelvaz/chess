import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LadingPage from './pages/LadingPage';
import RoomPage from './pages/RoomPage';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LadingPage} />
                <Route path="/room" component={RoomPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;