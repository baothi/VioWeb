import Vio_Logo from '../../assets/images/Vio_Logo.svg'
import logo_language from '../../assets/images/logo_language.svg'


const Header = () => {
  return (
    <>
        <header>
        <div className="grid-container">
            <div className="grid-100">
                <div className="nav">
                    <a href="" className="logo">
                        <img src={Vio_Logo} alt="" />
                    </a>
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
                        <a href="#" className="button_link">
                            FOR BUSINESS
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header;