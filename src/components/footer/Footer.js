import vk from "./../../img/icons/vk.svg";
import github from "./../../img/icons/gitHub.svg";
import tg from "./../../img/icons/telegram.svg";

import "./style.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/daevvv" target="_blank" rel="noreferrer">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/daevvv" target="_blank" rel="noreferrer">
                <img src={tg} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/daevv" target="_blank" rel="noreferrer">
                <img src={github} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 daev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
