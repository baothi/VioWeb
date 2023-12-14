import home_img_sec_2 from '../../assets/images/img_home_sec_2.png';
import './homeSectionTwo.scss'


const HomeSectionTwo = () => {

    return (
      <section className="section home_sec_2">
        <div className="grid-container">
            <div className="grid-100">
                <h2 className="heading_title" data-aos="fade-right">
                    Book <div className="box">
                      <div className='box-scroll-text'>
                          <b>Beauty and Spa</b>
                      </div></div>
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
    );
};

export default HomeSectionTwo;
