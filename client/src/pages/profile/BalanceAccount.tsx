import "./Balance.css";

import { useAccount } from "@gear-js/react-hooks";

function Balance() {
  const { account } = useAccount();

  return (
    <div>
      <h2>Balance: {account?.balance.value}</h2>
    </div>
  );
}
export { Balance };
