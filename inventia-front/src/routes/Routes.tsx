import {Route, Switch} from 'wouter';
import Login from '../views/login';
import Home from '../views/home';
import withLayout from '../components/layout/withLayout'; // Importa el HOC

const HomeWithLayout = withLayout(Home); // Aplica el HOC a la vista Home

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} />
            <Route path="/home" component={HomeWithLayout} />
        </Switch>
    );
}