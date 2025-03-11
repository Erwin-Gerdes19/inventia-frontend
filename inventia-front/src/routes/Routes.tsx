import {Route, Switch} from 'wouter';
import Login from '../views/login';
import Home from '../views/home';
import ListadoProductos from '../views/ListadoProductos/listadoProductos';
import ImagenProducto from '../views/ImagenProducto/imagenProducto';
import withLayout from '../components/layout/withLayout'; // Importa el HOC

const HomeWithLayout = withLayout(Home); // Aplica el HOC a la vista Home
const ListadoProductosWithLayout = withLayout(ListadoProductos);
const ImagenProductoWithLayout = withLayout(ImagenProducto); 

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} />
            <Route path="/home" component={HomeWithLayout} />
            <Route path="/listado-productos" component={ListadoProductosWithLayout} />
            <Route path="/imagen-producto" component={ImagenProductoWithLayout} />
        </Switch>
    );
}