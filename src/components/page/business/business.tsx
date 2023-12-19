import business_img_sec_2 from '../../../assets/images/business_img_sec_2.png';
import bg_mail from '../../../assets/images/bg_mail.jpeg';

import cr1 from '../../../assets/images/CRBarber_shop.png';
import cr2 from '../../../assets/images/CRBeauty_salon.png';
import cr3 from '../../../assets/images/CRFitness.png';
import cr4 from '../../../assets/images/CRFreelancer.png';
import cr5 from '../../../assets/images/CRMakeup.png';
import cr6 from '../../../assets/images/CRNail.png';
import cr7 from '../../../assets/images/CRNightlife.png';
import cr8 from '../../../assets/images/CROutdoor.png';
import cr9 from '../../../assets/images/CRTatoo.png';
import cr10 from '../../../assets/images/CRVet.png';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import BusinessSectionOne from './businessSectionOne';
import BusinessSectionThree from './businessSectionThree';
import BusinessSectionFour from './businessSectionFour';
import { useTranslation} from 'react-i18next';
import BusinessSection4 from './scratch';


const Business = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        mirror: true
    });
  }, []);

  useEffect(() => {
    const scrollContainer1 = document.querySelector(".left1") as HTMLElement;
    const scrollContainer2 = document.querySelector(".right1") as HTMLElement;
    const scrollContainer3 = document.querySelector(".left2") as HTMLElement;
    const scrollMain = document.querySelector(".wrapper") as HTMLElement;

    scrollMain.addEventListener("wheel", (evt) => {
    evt.preventDefault();

  // Scroll Container 1
    scrollContainer1.scrollLeft += evt.deltaY;
    if (scrollContainer1.scrollLeft >= scrollContainer1.scrollWidth - scrollContainer1.clientWidth) {
        scrollContainer1.scrollLeft = 0;
    } else if (scrollContainer1.scrollLeft < 0) {
        scrollContainer1.scrollLeft = scrollContainer1.scrollWidth - scrollContainer1.clientWidth;
    }

    // Scroll Container 2
    scrollContainer2.scrollLeft -= evt.deltaY;
    if (scrollContainer2.scrollLeft <= 0) {
        scrollContainer2.scrollLeft = scrollContainer2.scrollWidth - scrollContainer2.clientWidth;
    } else if (scrollContainer2.scrollLeft > scrollContainer2.scrollWidth - scrollContainer2.clientWidth) {
        scrollContainer2.scrollLeft = 0;
    }

    // Scroll Container 3
    scrollContainer3.scrollLeft += evt.deltaY;
    if (scrollContainer3.scrollLeft >= scrollContainer3.scrollWidth - scrollContainer3.clientWidth) {
        scrollContainer3.scrollLeft = 0;
    } else if (scrollContainer3.scrollLeft < 0) {
        scrollContainer3.scrollLeft = scrollContainer3.scrollWidth - scrollContainer3.clientWidth;
    }
});
  }, [])

  return (
    <>
      <BusinessSectionOne />
      <section className="section business_sec_2 home_sec_2">
          <div className="grid-container">
                <div className="grid-50 box_content">
                    <div dangerouslySetInnerHTML={{ __html: t("Grow Faster") }} />
                 
                </div>
                <div className="grid-50 box_img"  data-aos="fade-left">
                    <img src={business_img_sec_2} alt="" />
                </div>
            </div>
      </section>
      <BusinessSectionThree />
      <BusinessSection4 />
      <section className="section business_sec_5">
          <div className="grid-container">
              <div className="grid-100" data-aos="fade-in">
                  <div className="text_center">
                    <div dangerouslySetInnerHTML={{ __html: t("Industry") }} />
                     
                  </div>
              </div>
          </div>
          <div className='wrapper'>
          <div className="bang_chuyen_project left1 imageSlider"  data-aos="fade-in">
              <ul className="inner">
                  <li>
                      <a href="#" title="">
                          <img src={cr1} alt="" />
                          {/* <h3>Beauty Salon</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr2} alt="" />
                          {/* <h3>Nail & Eyelash</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr3} alt="" />
                          {/* <h3>Makeup Artist</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr4} alt="" />
                          {/* <h3>Veterinarian</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr5} alt="" />
                          {/* <h3>Beauty Salon</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr6} alt="" />
                          {/* <h3>Nail & Eyelash</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr1} alt="" />
                          {/* <h3>Makeup Artist</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr2} alt="" />
                          {/* <h3>Veterinarian</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr3} alt="" />
                          {/* <h3>Beauty Salon</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr4} alt="" />
                          {/* <h3>Nail & Eyelash</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr5} alt="" />
                          {/* <h3>Makeup Artist</h3> */}
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr6} alt="" />
                          {/* <h3>Veterinarian</h3> */}
                      </a>
                  </li>
              </ul>
          </div>
          <div className="bang_chuyen_project right1 imageSlider"  data-aos="fade-in">
              <ul className="inner">
                  <li>
                      <a href="#" title="">
                          <img src={cr1} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr2} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr7} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr8} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr9} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr10} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr3} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr4} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr5} alt="" />
                          <h3>Beauty Salon</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr6} alt="" />
                          <h3>Nail & Eyelash</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr7} alt="" />
                          <h3>Makeup Artist</h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr8} alt="" />
                          <h3>Veterinarian</h3>
                      </a>
                  </li>
              </ul>
          </div>
          </div>

      </section>
      <section className="section business_sec_6" style={{ backgroundImage: `url(${bg_mail})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                    <div dangerouslySetInnerHTML={{ __html: t("Ready") }} />
                      
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