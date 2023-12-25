import banner_sec_4 from '../../assets/images/banner_sec_4.png';
import qr_code from '../../assets/images/QR2.png';
import Google from '../../assets/images/Google.png';
import Apple from '../../assets/images/Apple.png';
import img_iphone from '../../assets/images/img_iphone.png';
import bg_app from '../../assets//images/bg_app.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HomeSectionSix from './homeSectionSix';
import HomeSectionThree from './homeSectionThree';
import HomeSectionOne from './homeSectionOne';
import HomeSectionTwo from './homeSectionTwo'
import { useTranslation} from 'react-i18next';
import { isIOS, isBrowser } from 'react-device-detect';




const Home = () => {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({
            delay: 50, // values from 0 to 3000, with step 50ms
            duration: 50, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
        });
      }, []);
  return (
    <>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <section className="section home_sec_4">
          <div className="grid-container">
              <div className="grid-50 box_content">
              <div dangerouslySetInnerHTML={{ __html: t("All in one platform") }} />
                  <div className="list">
                      <div className="item" data-aos="fade-right">
                        <div dangerouslySetInnerHTML={{ __html: t("Marketplace") }} />
                      </div>
                      <div className="item" data-aos="fade-right">
                        <div dangerouslySetInnerHTML={{ __html: t("Calendar") }} />
                      </div>
                      <div className="item" data-aos="fade-right">
                      <div dangerouslySetInnerHTML={{ __html: t("Social Network Platform") }} />
                      </div>
                  </div>
              </div>
          </div>
          <img src={banner_sec_4} alt="" data-aos="fade-left"/>
      </section>
      {/* Our Partner Section */}
      {/* <section className="section home_sec_5" style={{backgroundImage: `url(${bg_sec_5})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                    <div dangerouslySetInnerHTML={{ __html: t("Our Partners") }} />
                  </div>
                  <div className="wrap">
                      <div className="item" data-aos="fade-up" data-aos-duration="3000">
                          <img src={Rectangle_3053} alt=""/>
                      </div>
                      <div className="item"  data-aos="flip-left" data-aos-duration="3000">
                          <img src={Rectangle_3054} alt=""/>
                      </div>
                      <div className="item" data-aos="fade-up" data-aos-duration="3000">
                          <img src={Rectangle_3055} alt=""/>
                      </div>
                      <div className="item" data-aos="flip-left" data-aos-duration="3000">
                          <img src={Rectangle_3056} alt=""/>
                      </div>
                      <div className="item" data-aos="fade-up" data-aos-duration="3000">
                          <img src={Rectangle_3057} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </section> */}
      <HomeSectionSix />
      <section className="section home_sec_7">
          <div className="grid-container">
              <div className="box" style={{ backgroundImage: `url(${bg_app})` }}>
                  <div className="left" data-aos="fade-right">
                      <div className="wrap_title">
                        <div dangerouslySetInnerHTML={{ __html: t("Download Vio mobile app") }} />
                          <img src={qr_code} alt=""/>
                      </div>
                      {isBrowser ? <ul className="link_app">
                          <li>
                                  <img src={Apple} alt=""/>
                              
                          </li>
                          <li>
                                  <img src={Google} alt=""/>

                          </li>
                      </ul> : isIOS ? <ul className="link_app">
                          <li>
                              <a href="https://vioapp.page.link/?efr=0&ibi=vio.app&isi=6470902258&apn=vio.app&link=https%3A%2F%2Fvioapp.page.link%3Ftype%3Dinvite_friend">
                                  <img src={Apple} alt=""/>
                              </a>
                          </li>
                          </ul> :  <ul>
                          <li>
                              <a href="https://vioapp.page.link/?efr=0&ibi=vio.app&isi=6470902258&apn=vio.app&link=https%3A%2F%2Fvioapp.page.link%3Ftype%3Dinvite_friend">
                                  <img src={Google} alt=""/>
                              </a>
                          </li>
                          </ul>}
                  </div>
                  <div className="right" data-aos="fade-left">
                      <img src={img_iphone} alt=""/>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Home;