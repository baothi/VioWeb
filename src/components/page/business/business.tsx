import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import BS2_Mockup_vn from '../../../assets/images/BS2_Mockup_vn.png'
import BS2_Mockup_en from '../../../assets/images/BS2_Mockup_en.png'
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
import BusinessSectionSix from './businessSectionSix';


const Business = () => {
  const { t } = useTranslation();

  const settings1 = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
  };

  const settings2 = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: -1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
  };

  type AutoCarousel = {
    content: string,
    imgSrc: string,
  }

  const carousel1: AutoCarousel[] = [
    {content: 'Barber shop', imgSrc: cr1},
    {content: 'Beauty salon', imgSrc: cr2},
    {content: 'Gym and fitness', imgSrc: cr3},
    {content: 'Freelancer', imgSrc: cr4},
    {content: 'Make-up artist', imgSrc: cr5},
    {content: 'Nail & eyelash', imgSrc: cr6},
  ]

  const carousel2: AutoCarousel[] = [
    {content: 'Nightlife', imgSrc: cr7},
    {content: 'Outdoor activities', imgSrc: cr8},
    {content: 'Tattoo', imgSrc: cr9},
    {content: 'Veterinarian', imgSrc: cr10},
    {content: 'Workshop', imgSrc: cr11},
    {content: 'Hair salon', imgSrc: cr12},
  ]

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
            
                  <ul className="inner" style={{display: 'inline'}}>
                  <Slider {...settings1}>
                {carousel1.map((slide) => 
                  <li>
                      <a>
                          <img src={slide.imgSrc} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t(slide.content) }} /></h3>
                      </a>
                  </li>
                 
                
                )}
            </Slider>
            </ul>
          </div>
          <div className="bang_chuyen_project right imageSlider"  data-aos="fade-in">
          <ul className="inner" style={{display: 'inline'}}>
                  <Slider {...settings2}>
                {carousel2.map((slide) => 
                  <li>
                      <a>
                          <img src={slide.imgSrc} alt="" />
                          <h3><div dangerouslySetInnerHTML={{ __html: t(slide.content) }} /></h3>
                      </a>
                  </li>
                 
                
                )}
            </Slider>
            </ul>
          </div>
          </div>

      </section>
      <BusinessSectionSix />
    </>
  )
}

export default Business;