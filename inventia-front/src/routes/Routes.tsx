import {Route, Switch} from 'wouter';
import Login from '../views/login';
import Home from '../views/home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
        </Switch>
    );
}