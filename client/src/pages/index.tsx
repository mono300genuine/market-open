import { Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import  {Products} from './products/Products';

const routes = [{ path: '/', Page: Home }, {path: '/products', Page: Products}];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page/>} />);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
