import { Socials } from "./socials";
import { Copyright } from "./copyright";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Socials />
      <h3>About</h3>
      <h3>Contact</h3>
      <h3>Help</h3>
      <Copyright />
    </footer>
  );
}

export { Footer };
