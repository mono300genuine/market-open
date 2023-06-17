import { useAccount } from "@gear-js/react-hooks";
import "./AccountCSS.css";

function AccountID() {
  const { account } = useAccount();

  return (
    <div className="Account">
      <h2>ID: {account?.address}</h2>
    </div>
  );
}
export { AccountID };
