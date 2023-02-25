import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Menu() {
  return (
    <div className="menu">
      <a
        className="social"
        target="_blank"
        href="https://github.com/eltonsantos"
      >
        <BsGithub color="#fff" size={25} />
      </a>
      <a
        className="social"
        target="_blank"
        href="https://www.linkedin.com/in/eltonmelosantos/"
      >
        <BsLinkedin color="#fff" size={25} />
      </a>
      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}
