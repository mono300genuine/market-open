import Twitter from "./twitter-128.png";
import Discord from "./discord-2-128.png";
import Facebook from "./facebook-48.png";
import Insta from "./InstaLogo.png";
import "./Socials.css";

const socials = [
  { href: "https://twitter.com/gear_techs", icon: Twitter },
  { href: "https://github.com/gear-tech", icon: Facebook },
  { href: "https://discord.com/invite/7BQznC9uD9", icon: Discord },
  { href: "https://medium.com/@gear_techs", icon: Insta },
];

function Socials() {
  const getItems = () =>
    socials.map(({ href, icon: Icon }) => (
      <li key={href}>
        <a href={href} target="_blank" rel="noreferrer">
          <Icon />
        </a>
      </li>
    ));

  return (
    <div className="Socials">
      <div className="redes">
        <img src={Twitter} alt="TwitterLogo" width="35px" />
      </div>
      <div className="redes">
        <img src={Facebook} alt="TwitterLogo" width="35px" />
      </div>
      <div className="redes">
        <img src={Insta} alt="TwitterLogo" width="35px" />
      </div>
      <div className="redes">
        <img src={Discord} alt="TwitterLogo" width="35px" />
      </div>
    </div>
  );
}

export { Socials };
