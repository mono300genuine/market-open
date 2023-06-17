import { useApi, useAccount } from "@gear-js/react-hooks";
import { Routing } from "pages";
import { NavHeader, Footer, ApiLoader } from "components";
import { withProviders } from "hocs";
import "App.css";

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  const links = [
    { link: "/", label: "Home" },
    { link: "/products", label: "Products" },
    { link: "/services", label: "Services" },
    { link: "/sales", label: "Sales" },
    { link: "/profile", label: "Profile" },
  ];

  const isAppReady = isApiReady && isAccountReady;

  return (
    <>
      <NavHeader links={links} />
      <main>{isAppReady ? <Routing /> : <ApiLoader />}</main>
    </>
  );
}

export const App = withProviders(Component);
