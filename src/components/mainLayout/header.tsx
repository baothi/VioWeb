import Vio_Logo from '../../assets/images/Vio_Logo.svg';
import logo_language from '../../assets/images/logo_language.svg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
        <header>
          <div className="grid-container">
              <div className="grid-100">
                  <div className="nav">
                      <Link to="/" className="logo"><img src={Vio_Logo} alt="" /></Link>
                      <div className="nav_right">
                          <ul className="change_language">
                              <li>
                                  <a href="">
                                      <img src={logo_language} alt="" />

                                  </a>
                                  <ul className="sub_menu">
                                      <li>
                                          <a href="">
                                              <img src={logo_language} alt="" />

                                          </a>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                          <Link to="/business" className="button_link"> FOR BUSINESS</Link>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    </>
  )
}

export default Header;