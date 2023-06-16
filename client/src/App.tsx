import { useApi, useAccount } from "@gear-js/react-hooks";
import { Routing } from "pages";
import { NavHeader, Footer, ApiLoader } from "components";
import { withProviders } from "hocs";
import "App.scss";

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  const links = [
    { link: "/", label: "Inicio" },
    { link: "/acerca", label: "Acerca de" },
    { link: "/contacto", label: "Contacto" },
  ];

  const isAppReady = isApiReady && isAccountReady;

  return (
    <>
      <NavHeader links={links} />
      <main>{isAppReady ? <Routing /> : <ApiLoader />}</main>
      <Footer />
    </>
  );
}

export const App = withProviders(Component);
