import "./Header.css";
import logo from "/Users/oliveroliverio/Git/WD-Udemy_Advanced-CSS-and-SAS/advanced-css-course-reacted/src/img/logo-white.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo-box">
          <img src={logo} alt="white logo" className="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">is where life happens</span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
