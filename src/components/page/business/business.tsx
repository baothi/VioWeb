import BS2_Mockup_vn from '../../../assets/images/BS2_Mockup_vn.png'
import BS2_Mockup_en from '../../../assets/images/BS2_Mockup_en.png'
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
import cr11 from '../../../assets/images/CRWorkshop.png';
import cr12 from '../../../assets/images/CRHair.png';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import BusinessSectionOne from './businessSectionOne';
import BusinessSectionThree from './businessSectionThree';
import { useTranslation} from 'react-i18next';
import BusinessSectionFour from './businessSectionFour';
import { detectlanguage } from '~/components/utils/langDetect';


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

  let BS2_Mockup = detectlanguage(BS2_Mockup_vn, BS2_Mockup_en)



  return (
    <>
      <BusinessSectionOne />
      <section className="section business_sec_2 home_sec_2">
          <div className="grid-container">
                <div className="grid-50 box_content">
                    <div dangerouslySetInnerHTML={{ __html: t("Grow Faster") }} />
                 
                </div>
                <div className="grid-50 box_img"  data-aos="fade-left">
                    <img src={BS2_Mockup} alt="" />
                </div>
            </div>
      </section>
      <BusinessSectionThree />
      <BusinessSectionFour />
      <section className="section business_sec_5">
          <div className="grid-container">
              <div className="grid-100" data-aos="fade-in">
                  <div className="text_center">
                    <div dangerouslySetInnerHTML={{ __html: t("Industry") }} />
                     
                  </div>
              </div>
          </div>
          <div className='wrapper'>
          <div className="bang_chuyen_project imageSlider"  data-aos="fade-in">
              <ul className="inner">
                  <li>
                      <a href="#" title="">
                          <img src={cr1} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Barber shop") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr2} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Beauty salon") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr3} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Gym and fitness") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr4} alt="" />                       
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Freelancer") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr5} alt="" />
                          <h3></h3>
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Make-up artist") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr6} alt="" />
                        
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Nail & eyelash") }} /></h3>
                      </a> 
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr1} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Barber shop") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr2} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Beauty salon") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr3} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Gym and fitness") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr4} alt="" />                       
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Freelancer") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr5} alt="" />
                          <h3></h3>
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Makeup artist") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr6} alt="" />
                          <h3>Nail & Eyelash</h3>
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Nail & eyelash") }} /></h3>
                      </a> 
                  </li>
              </ul>
          </div>
          <div className="bang_chuyen_project right imageSlider"  data-aos="fade-in">
              <ul className="inner">
                
                  <li>
                      <a href="#" title="">
                          <img src={cr7} alt="" />                         
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Nightlife") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr8} alt="" />                         
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Outdoor activities") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr9} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Tatoo") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr10} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Veterinarian") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr11} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Workshop") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr12} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Hair salon") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr7} alt="" />                         
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Nightlife") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr8} alt="" />                         
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Outdoor activities") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr9} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Tattoo") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr10} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Veterinarian") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr11} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Workshop") }} /></h3>
                      </a>
                  </li>
                  <li>
                      <a href="#" title="">
                          <img src={cr12} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t("Hair salon") }} /></h3>
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
                          <div dangerouslySetInnerHTML={{ __html: t("Get In Touch") }} />
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