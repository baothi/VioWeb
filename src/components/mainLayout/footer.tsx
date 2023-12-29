import appstore from '../../assets/images/Icon_Appstore.png'
import googleplay from '../../assets/images/Icon_google_play.png'
import { Link } from 'react-router-dom';
import logo_slogan from '../../assets/images/Logo_with_Slogan.svg'
import { isAndroid, isIOS, isBrowser } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer>
        <div className="grid-container">
            <div className="grid-35 icon_download">
                <div className="logo_footer">
                    <img src={logo_slogan} alt="" />
                </div>
                
                {isAndroid && 
                  <a href="https://play.google.com/store/apps/details?id=vio.app" target="_blank" rel="noopener noreferrer">
                    <div className="box">
                        <b>
                        <div dangerouslySetInnerHTML={{ __html: t("GET IT ON") }} />
                        </b>
                        <ul>
                          <li>
                          <img src={googleplay} alt="googleplay"/>
                          </li>
                          <li>
                          <img src={appstore} alt="appstore"/>
                          </li>
                      </ul>
                    </div>
                  </a>
                }
                {isIOS && 
                  <a href="https://apps.apple.com/us/app/vio-smart-booking/id6470902258" target="_blank" rel="noopener noreferrer">
                    <div className="box">
                        <b>
                        <div dangerouslySetInnerHTML={{ __html: t("GET IT ON") }}/>
                        </b>
                        <ul>
                          <li>
                          <img src={googleplay} alt="googleplay"/>
                          </li>
                          <li>
                          <img src={appstore} alt="appstore"/>
                          </li>
                      </ul>
                    </div>
                  </a>
                }
                {isBrowser && 
                  <div className="box">
                    
                      <b><div dangerouslySetInnerHTML={{ __html: t("GET IT ON") }} /> </b>
                      <ul>
                          <li>
                          <img src={googleplay} alt="googleplay"/>
                          </li>
                          <li>
                          <img src={appstore} alt="appstore"/>
                          </li>
                      </ul>
                  </div>
                }
                
            </div>
           
            <div className="grid-20 footer_2">
                <ul>
                    {/* <li>
                        <a href="">
                            Why Vio
                        </a>
                    </li> */}
                    <li>
                        <Link to="/business">
                        <div dangerouslySetInnerHTML={{ __html: t("For business") }}/>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={e => e.preventDefault()} to="" >
                        <div dangerouslySetInnerHTML={{ __html: t("Careers") }}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/faq" className="">
                        <div dangerouslySetInnerHTML={{ __html: t("Guidelines") }}/>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="grid-20 footer_3">
                <ul className="footer_menu">
                    <li>
                        <Link onClick={e => e.preventDefault()} to="">
                        <div dangerouslySetInnerHTML={{ __html: t("About us") }}/>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={e => e.preventDefault()} to="" className="">
                        <div dangerouslySetInnerHTML={{ __html: t("Mobile app") }}/>
                        </Link>
                    </li>
                    <li>
                        <a href="mailto:contact@prismtechinc.io">
                        <div dangerouslySetInnerHTML={{ __html: t("Contact us") }}/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="grid-20 footer_4">
                <ul className="footer_menu">
                    
                    <li>
                        <a href="mailto:support@prismtechinc.io">
                        <div dangerouslySetInnerHTML={{ __html: t("Support") }}/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:support@prismtechinc.io">
                        <div dangerouslySetInnerHTML={{ __html: t("Report issue") }}/>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
        <div className="grid-container footer_nav">
            <div className="wrap">
                <div className="grid-80 copyright">
                    Copyright © 2023 Prismtechinc. All rights reserved
                    <Link to="/terms-of-service" className="chinh_sach">
                    <div dangerouslySetInnerHTML={{ __html: t("Terms & Condition") }}/>
                    </Link>
                    <Link to="/privacy-policy" className="chinh_sach">
                    <div dangerouslySetInnerHTML={{ __html: t("Privacy Policy") }}/>
                    </Link>
                    support@prismtechinc.io
                    
                </div>
                <div className="grid-20">
                    <ul className="socials">
                        <li>
                            <a href="https://www.facebook.com/share/5softSaw15RBKcFN/?mibextid=WC7FNe" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.3327 10.0001C18.3327 5.3977 14.6017 1.66675 9.99935 1.66675C5.39697 1.66675 1.66602 5.3977 1.66602 10.0001C1.66602 14.1595 4.7134 17.607 8.69727 18.2322V12.4089H6.58138V10.0001H8.69727V8.16414C8.69727 6.0756 9.94137 4.92195 11.8449 4.92195C12.7566 4.92195 13.7103 5.08471 13.7103 5.08471V7.1355H12.6595C11.6243 7.1355 11.3014 7.77786 11.3014 8.43688V10.0001H13.6126L13.2432 12.4089H11.3014V18.2322C15.2853 17.607 18.3327 14.1595 18.3327 10.0001Z" fill="#FAFAFA"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/prismtechinc/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.3327 2.89224V17.1079C18.3327 17.4329 18.2036 17.7447 17.9737 17.9745C17.7439 18.2043 17.4322 18.3334 17.1072 18.3334H2.89151C2.56649 18.3334 2.25478 18.2043 2.02495 17.9745C1.79513 17.7447 1.66602 17.4329 1.66602 17.1079V2.89224C1.66602 2.56722 1.79513 2.25551 2.02495 2.02569C2.25478 1.79586 2.56649 1.66675 2.89151 1.66675L17.1072 1.66675C17.4322 1.66675 17.7439 1.79586 17.9737 2.02569C18.2036 2.25551 18.3327 2.56722 18.3327 2.89224ZM6.56798 8.0393H4.117V15.8824H6.56798V8.0393ZM6.78856 5.34322C6.78986 5.15782 6.75462 4.97399 6.68486 4.80221C6.6151 4.63043 6.5122 4.47407 6.38201 4.34207C6.25183 4.21006 6.09691 4.10499 5.92612 4.03286C5.75533 3.96072 5.572 3.92293 5.3866 3.92165H5.34249C4.96546 3.92165 4.60388 4.07142 4.33729 4.33802C4.07069 4.60461 3.92092 4.9662 3.92092 5.34322C3.92092 5.72024 4.07069 6.08182 4.33729 6.34842C4.60388 6.61502 4.96546 6.76479 5.34249 6.76479C5.5279 6.76935 5.71239 6.73733 5.88542 6.67057C6.05845 6.6038 6.21663 6.5036 6.35092 6.37568C6.48522 6.24776 6.59299 6.09464 6.66808 5.92505C6.74317 5.75547 6.78411 5.57275 6.78856 5.38734V5.34322ZM15.8817 11.1177C15.8817 8.75989 14.3817 7.84322 12.8915 7.84322C12.4036 7.81879 11.9178 7.92271 11.4826 8.14462C11.0473 8.36653 10.6779 8.69868 10.4111 9.10792H10.3425V8.0393H8.03857V15.8824H10.4895V11.7109C10.4541 11.2836 10.5887 10.8597 10.864 10.5311C11.1394 10.2025 11.5333 9.99582 11.9601 9.95596H12.0533C12.8327 9.95596 13.4111 10.4462 13.4111 11.6815V15.8824H15.8621L15.8817 11.1177Z" fill="#FAFAFA"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;