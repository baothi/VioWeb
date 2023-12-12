import business_img_sec_2 from '../../../assets/images/business_img_sec_2.png';
import img_thumb_slide from '../../../assets/images/img_thumb_slide.png';
import shoppingbag03 from '../../../assets/images/shopping-bag-03.svg';
import img_nav_1 from '../../../assets/images/img_nav_1.png';
import img_nav_2 from '../../../assets/images/img_nav_2.png';
import img_nav_3 from '../../../assets/images/img_nav_3.png';
import img_nav_4 from '../../../assets/images/img_nav_4.png';
import img_nav_5 from '../../../assets/images/img_nav_5.png';
import img_nav_6 from '../../../assets/images/img_nav_6.png';
import IMG4 from '../../../assets/images/IMG-4.png';
import IMG41 from '../../../assets/images/IMG-4-1.png';
import IMG42 from '../../../assets/images/IMG-4-2.png';
import IMG43 from '../../../assets/images/IMG-4-3.png';
import bg_mail from '../../../assets/images/bg_mail.jpeg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import BusinessSectionOne from './businessSectionOne';
import BusinessSectionThree from './businessSectionThree';
import BusinessSectionFour from './businessSectionFour';

const Business = () => {
  useEffect(() => {
    AOS.init({
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
    });
  }, []);
  return (
    <>
      <BusinessSectionOne />
      <section className="section business_sec_2 home_sec_2">
          <div className="grid-container">
                <div className="grid-50 box_content">
                    <h2 className="heading_title" data-aos="fade-right">
                        <span>Grow</span> Faster<br/>
                        with <b>Vio</b>
                    </h2>
                    <div className="content"  data-aos="fade-right">
                        Online business is booming, Vio packs all the tool you need to take your online shop velocity to the next level.
                    </div>
                    <ul>
                        <li  data-aos="fade-right">
                            <a href="">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                    <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#7D2EBD"></stop>
                                            <stop offset="1" stopColor="#C054EE"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                Find more <b>customer</b>
                            </a>
                        </li>
                        <li  data-aos="fade-right">
                            <a href="">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                    <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#7D2EBD"></stop>
                                            <stop offset="1" stopColor="#C054EE"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                Keep <b>track of all your branches</b> in 1 account
                            </a>
                        </li>
                        <li  data-aos="fade-right">
                            <a href="">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                    <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#7D2EBD"></stop>
                                            <stop offset="1" stopColor="#C054EE"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>

                                Up-scale your <b>customer support</b> game
                            </a>
                        </li>
                        <li  data-aos="fade-right">
                            <a href="">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                    <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#7D2EBD"></stop>
                                            <stop offset="1" stopColor="#C054EE"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                Effortless mange your business
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="grid-50 box_img"  data-aos="fade-left">
                    <img src={business_img_sec_2} alt="" />
                </div>
            </div>
      </section>
      <BusinessSectionThree />
      <BusinessSectionFour />
      <section className="section business_sec_5">
          <div className="grid-container">
              <div className="grid-100" data-aos="fade-in">
                  <div className="text_center">
                      <h2 className="heading_title">
                          <b>
                              Industry
                          </b>
                      </h2>
                      <div className="content">
                          Solution for your successful business
                      </div>
                  </div>
              </div>
          </div>
          <div className="bang_chuyen_project imageSlider"  data-aos="fade-in">
              <ul className="inner">
                  <li>
                      <a href="#" title="">
                          <img src={IMG4} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG41} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG42} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG43} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG4} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG41} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG42} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG43} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG4} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG41} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG42} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG43} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="bang_chuyen_project right imageSlider"  data-aos="fade-in">
              <ul className="inner">
                  <li>
                      <a href="#" title="">
                          <img src={IMG4} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG41} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG42} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG43} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG4} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG41} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG42} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG43} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG4} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG41} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG42} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG43} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
              </ul>
          </div>
          <div className="bang_chuyen_project imageSlider"  data-aos="fade-in">
              <ul className="inner">
                  <li>
                      <a href="#" title="">
                          <img src={IMG4} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG41} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG42} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG43} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG4} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG41} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG42} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG43} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG4} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG41} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG42} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={IMG43} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
              </ul>
          </div>

      </section>
      <section className="section business_sec_6" style={{ backgroundImage: `url(${bg_mail})` }}>
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                      <h2 className="heading_title">
                          Ready to <b>open</b> your vio <br/>
                          <b>business’s account?</b>
                      </h2>
                      <div className="content">
                          Be a part of a game changing AI-booking platform.
                      </div>
                      <form action="">
                          <input type="text" placeholder="Your email" />
                          <button type="submit">
                              Get Started
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Business;