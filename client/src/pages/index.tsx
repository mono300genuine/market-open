import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Products } from "./products/Products";
import { Profile } from "./profile/Profile";
import { Services } from "./servicess/Services";

const routes = [
  { path: "/", Page: Home },
  { path: "/products", Page: Products },
  { path: "/Profile", Page: Profile },
  { path: "/sales", Page: Products },
  { path: "/services", Page: Services}
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
