import home_img_sec_1 from '../../assets/images/home_img_sec_1.png';
import home_img_sec_2 from '../../assets/images/img_home_sec_2.png';
import banner_sec_4 from '../../assets/images/banner_sec_4.png';
import bg_sec_5 from '../../assets/images/bg_sec_5.jpg';
import Rectangle_3053 from '../../assets/images/Rectangle_3053.png';
import Rectangle_3054 from '../../assets/images/Rectangle_3054.png';
import Rectangle_3055 from '../../assets/images/Rectangle_3055.png';
import Rectangle_3056 from '../../assets/images/Rectangle_3056.png';
import Rectangle_3057 from '../../assets/images/Rectangle_3057.png';
// import IMG3 from '../../assets/images/IMG-3.png';
// import IMG31 from '../../assets/images/IMG-3-1.png';
// import IMG32 from '../../assets/images/IMG-3-2.png';
import qr_code from '../../assets/images/qr_code.png';
import Google from '../../assets/images/Google.png';
import Apple from '../../assets/images/Apple.png';
import img_iphone from '../../assets/images/img_iphone.png';
import bg_app from '../../assets//images/bg_app.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HomeSectionSix from './homeSectionSix';
import HomeSectionThree from './homeSectionThree';
// the hook
import { useTranslation} from 'react-i18next';




const Home = () => {
    useEffect(() => {
        AOS.init({
            delay: 500, // values from 0 to 3000, with step 50ms
            duration: 700, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
        });
      }, []);
    const { t, i18n } = useTranslation();
  return (
    <>
      <section className="section home_sec_1">
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                      <h1 className="heading_title" data-aos="fade-in">
                          Vio<br/>
                          <div dangerouslySetInnerHTML={{ __html: t('Smart Booking') }} />
                      </h1>
                      <img src={home_img_sec_1} alt="" data-aos="fade-in"/>
                  </div>
              </div>
          </div>
      </section>
      <section className="section home_sec_2">
          <div className="grid-container">
              <div className="grid-100">
                  <h2 className="heading_title" data-aos="fade-right">
                      Book <div className="box"><b>Beauty and Spa</b></div>
                  </h2>
                  <div className="wrap">
                      <div className="box_content">
                          <h3 className="heading_title"  data-aos="fade-right">
                              Anywhere<br/>
                              Anytime!
                          </h3>
                          <ul>
                              <li  data-aos="fade-right">
                                  <a href="">
                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                          <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <defs>
                                              <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                                  <stop stopColor="#7D2EBD"/>
                                                  <stop offset="1" stopColor="#C054EE"/>
                                              </linearGradient>
                                          </defs>
                                      </svg>
                                      <b>Never miss  </b>
                                  </a>
                              </li>
                              <li  data-aos="fade-right">
                                  <a href="">
                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                          <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <defs>
                                              <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                                  <stop stopColor="#7D2EBD"/>
                                                  <stop offset="1" stopColor="#C054EE"/>
                                              </linearGradient>
                                          </defs>
                                      </svg>
                                      <b>Fast</b> and <b>smooth</b> booking
                                  </a>
                              </li>
                              <li  data-aos="fade-right">
                                  <a href="">
                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                          <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <defs>
                                              <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                                  <stop stopColor="#7D2EBD"/>
                                                  <stop offset="1" stopColor="#C054EE"/>
                                              </linearGradient>
                                          </defs>
                                      </svg>

                                      <b>Gorgeous design</b> to match you
                                  </a>
                              </li>
                              <li  data-aos="fade-right">
                                  <a href="">
                                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                          <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <defs>
                                              <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                                  <stop stopColor="#7D2EBD"/>
                                                  <stop offset="1" stopColor="#C054EE"/>
                                              </linearGradient>
                                          </defs>
                                      </svg>
                                      Automate <b>scheduling</b>
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className="box_img"  data-aos="fade-left">
                          <img src={home_img_sec_2} alt=""/>
                      </div>
                  </div>
              </div>

          </div>
      </section>
      <HomeSectionThree />
      <section className="section home_sec_4">
          <div className="grid-container">
              <div className="grid-50 box_content">
                  <h2 className="heading_title" data-aos="fade-right">
                      All<b>-</b>in<b>-</b>one <br/>
                      <div className="box"><b>Platform</b></div>
                  </h2>
                  <div className="list">
                      <div className="item" data-aos="fade-right">
                          <h3>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6499_25456)"/>
                                  <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <defs>
                                      <linearGradient id="paint0_linear_6499_25456" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                          <stop stopColor="#7D2EBD"/>
                                          <stop offset="1" stopColor="#C054EE"/>
                                      </linearGradient>
                                  </defs>
                              </svg>
                              Marketplace
                          </h3>
                          <div className="content">
                              Explore shop, services, promotion and more in vio's Marketplace.
                          </div>
                      </div>
                      <div className="item" data-aos="fade-right">
                          <h3>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6499_25456)"/>
                                  <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <defs>
                                      <linearGradient id="paint0_linear_6499_25456" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                          <stop stopColor="#7D2EBD"/>
                                          <stop offset="1" stopColor="#C054EE"/>
                                      </linearGradient>
                                  </defs>
                              </svg>
                              Calendar
                          </h3>
                          <div className="content">
                              All in one calendar to stay in the loop, keep track of your bookings, your event, activities and sync with your everyday calendar.
                          </div>
                      </div>
                      <div className="item" data-aos="fade-right">
                          <h3>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6499_25456)"/>
                                  <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <defs>
                                      <linearGradient id="paint0_linear_6499_25456" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                          <stop stopColor="#7D2EBD"/>
                                          <stop offset="1" stopColor="#C054EE"/>
                                      </linearGradient>
                                  </defs>
                              </svg>
                              Social Network Platform
                          </h3>
                          <div className="content">
                              Social media integrated: Feed, chat, livestream, review system.
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <img src={banner_sec_4} alt="" data-aos="fade-left"/>
      </section>
      <section className="section home_sec_5" style={{backgroundImage: `url(${bg_sec_5})`}}>
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                      <h2 className="heading_title" data-aos="fade-in">
                          <b>
                              Our Partners
                          </b>
                      </h2>
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
      </section>
      <HomeSectionSix />
      <section className="section home_sec_7">
          <div className="grid-container">
              <div className="box" style={{ backgroundImage: `url(${bg_app})` }}>
                  <div className="left" data-aos="fade-right">
                      <div className="wrap_title">
                          <h2 className="heading_title">
                              <b>Download</b> The<br/>
                              Vio mobile app
                          </h2>
                          <img src={qr_code} alt=""/>
                      </div>
                      <ul className="link_app">
                          <li>
                              <a href="">
                                  <img src={Apple} alt=""/>
                              </a>
                          </li>
                          <li>
                              <a href="">
                                  <img src={Google} alt=""/>
                              </a>
                          </li>
                      </ul>
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