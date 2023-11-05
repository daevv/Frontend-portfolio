import BtnCV from "../btnCV/BtnCV";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Привет, меня зовут <em>Даня</em>
          </strong>
          <br />я фронтенд-разработчик
        </h1>
        <div className="header__text">
          <p>который любит то, чем занимается</p>
        </div>
        <BtnCV />
      </div>
    </header>
  );
};

export default Header;
