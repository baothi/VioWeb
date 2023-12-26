import { useState, useEffect } from 'react';
import Vio_Logo from '../../assets/images/Vio Full Logo_2.svg';
import USA from '../../assets/images/USA.png';
import vietnam from '../../assets/images/VietNam.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  // Retrieve the language from localStorage or default to USA
  const { t } = useTranslation();
  const initialLanguage = localStorage.getItem('language') || 'vi';

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>(initialLanguage);
  const { i18n } = useTranslation();

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const changeLanguage = (languageImage: string) => {
    const newLang = languageImage === `${USA}` ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
    setShowSubMenu(false);

    // Store the selected language in localStorage
    localStorage.setItem('language', newLang);
  };

  // This effect runs when the component mounts and updates the language
  // based on the stored value in localStorage.
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    console.log("StoredLanguage: " , storedLanguage);
    if (storedLanguage) {
      const langCode = storedLanguage === 'en' ? 'en' : 'vi';
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
                <ul className={showSubMenu ?"change_language expanded_menu" : "change_language"}>
                  <li onClick={toggleSubMenu}>
                    <img src={ currentLanguage === 'en' ? USA : vietnam} alt="" />
                    {showSubMenu && (
                      <ul className="sub_menu">                     
                        {currentLanguage === 'en' ?
                        <li onClick={() => changeLanguage(vietnam)}>
                        <img src={vietnam} alt="Vietnam" />
                      </li>
                        :
                        <li onClick={() => changeLanguage(USA)}>
                        <img src={USA} alt="USA" />
                      </li> 
                        }
                      </ul>
                    )}
                  </li>
                </ul>
                <Link to="/business" className="button_link">
                <div dangerouslySetInnerHTML={{ __html: t("FOR BUSINESS") }} />
                  
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
