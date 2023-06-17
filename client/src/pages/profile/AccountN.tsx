import { useAccount } from "@gear-js/react-hooks";
import "./AccountCSS.css";

function AccountN() {
  const { account } = useAccount();

  return (
    <div className="Account1">
      <h2>{account?.meta.name}</h2>
    </div>
  );
}
export { AccountN };
