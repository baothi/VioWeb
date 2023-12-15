import { useState, useEffect } from 'react';
import Vio_Logo from '../../assets/images/Vio_Logo.svg';
import USA from '../../assets/images/USA.png';
import vietnam from '../../assets/images/VietNam.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  // Retrieve the language from localStorage or default to USA
  const initialLanguage = localStorage.getItem('language') || USA;
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);
  const { i18n } = useTranslation();

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const changeLanguage = (languageImage: string) => {
    console.log(languageImage);
    const newLang = languageImage === '/src/assets/images/USA.png' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
    setCurrentLanguage(languageImage);
    setShowSubMenu(false);

    // Store the selected language in localStorage
    localStorage.setItem('language', languageImage);
  };

  // This effect runs when the component mounts and updates the language
  // based on the stored value in localStorage.
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      const langCode = storedLanguage === '/src/assets/images/USA.png' ? 'en' : 'vi';
      i18n.changeLanguage(langCode);
    }
  }, [i18n]);

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
