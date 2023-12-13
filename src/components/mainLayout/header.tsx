import React, { useState } from 'react';
import Vio_Logo from '../../assets/images/Vio_Logo.svg';
import USA from '../../assets/images/USA.png';
import vietnam from '../../assets/images/VietNam.png';
import { Link } from 'react-router-dom';
// the hook
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(USA);
  const { i18n } = useTranslation();

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const changeLanguage = (languageImage) => {
    console.log(languageImage)
    if(languageImage === '/src/assets/images/USA.png')
    {
      i18n.changeLanguage('en')
    }else{
      i18n.changeLanguage('vi')
    }
    setCurrentLanguage(languageImage);
    setShowSubMenu(false);
  };

  return (
    <>
      <header>
        <div className="grid-container">
          <div className="grid-100">
            <div className="nav">
              <Link to="/" className="logo"><img src={Vio_Logo} alt="" /></Link>
              <div className="nav_right">
                <ul className="change_language">
                  <li onClick={toggleSubMenu}>
                    <img src={currentLanguage} alt="" />
                    {showSubMenu && (
                      <ul className="sub_menu">
                        <li onClick={() => changeLanguage(USA)}>
                          <img src={USA} alt="USA" />
                        </li>
                        <li onClick={() => changeLanguage(vietnam)}>
                          <img src={vietnam} alt="Vietnam" />
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
                <Link to="/business" className="button_link">FOR BUSINESS</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
