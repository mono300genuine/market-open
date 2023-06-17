import { Balance } from "./BalanceAccount";
import { AccountN } from "./AccountN";
import { AccountID } from "./AccountID";
import backcard from "./backcard.png";
import PFPIcon from "./profileIcon.png";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="InfoPart">
        <div className="backcard">
          <img src={backcard} alt="backcard" width="100%" className="BCcss" />
        </div>
        <div className="ImagePFP">
          <img src={PFPIcon} alt="PFP" width="300px" className="PFPcss" />
        </div>
        <div className="Data">
          <div className="ACC">
            <AccountN />
            <AccountID />
          </div>
          <div className="Bal">
            <Balance />
          </div>
        </div>
      </div>

      <hr />
      <div className="RecentlyDone">ol</div>
    </div>
  );
}

export { Profile };
