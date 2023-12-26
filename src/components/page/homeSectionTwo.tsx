import 'slick-carousel/slick/slick.css';
import { default as Slider } from "react-slick";
import Mockup1_en from '../../assets/images/HS2_Mockup1_en.png';
import Mockup1_vn from '../../assets/images/HS2_Mockup1_vn.png'
// the hook
import { useTranslation} from 'react-i18next';
import './homeSectionTwo.scss'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { detectlanguage } from '../utils/langDetect';


const HomeSectionTwo = () => {
    const { t } = useTranslation();
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed:2000,
        speed: 500,
        slidesToShow: 1,
        
        arrows: false,
        slidesToScroll: -1,
        vertical: true, // Set to true for vertical sliding
        verticalSwiping: false, // Enable vertical swiping
      };
    
    let mockup1 = detectlanguage(Mockup1_vn, Mockup1_en);
    
    type TitleSlide = {
        title: string
    }

    const titleSlides: TitleSlide[] = [
        {title: "Spa"},
        {title: "Hair Salon"},
        {title: "Personal Trainer"},
        {title: "Make-up artist hs1"},
        {title: "Nail & eyelash hs1"},
        {title: "Badminton court"},
        {title: "Photographer"},
        {title: "Karaoke"},
        {title: "Restaurants"},
        {title: "Pet care"},
        {title: "Car Maintainance"},
    ]

    const SlideItem = () => {
        useEffect(() => {
          AOS.init({
              delay: 500, // values from 0 to 3000, with step 50ms
              duration: 700, // values from 0 to 3000, with step 50ms
              easing: 'ease', // default easing for AOS animations
              mirror: true, //
          });
        }, []);
        return (
            <div className="vertical-word-carousel" data-aos="fade-left">
      <Slider {...settings}>
        {titleSlides.map((titleSlide, index) => (
          <div key={index} className="word-slide">
            
        <h2 className='heading_title'>
            <div dangerouslySetInnerHTML={{ __html: t(titleSlide.title) }} />
        </h2>
          </div>
        ))}
      </Slider>
    </div>
            
          
        )
    }
    return (
      <section className="section home_sec_2">
        <div className="grid-container">
            <div className="grid-100">
                <div className="vertical_carousel_wrapper">
                    <div dangerouslySetInnerHTML={{ __html: t("Book") }} />
                    <SlideItem/>
                </div>
                
                <div className="wrap">
                    <div className="box_content">
                        <div dangerouslySetInnerHTML={{ __html: t("Anywhere, anytime") }} />                     
                        <ul>                          
                            <li  data-aos="fade-right">
                                <div dangerouslySetInnerHTML={{ __html: t("Never miss another experience") }} />                            
                            </li>
                            <li  data-aos="fade-right">
                                <div dangerouslySetInnerHTML={{ __html: t("Fast and smooth booking") }} />
                            </li>
                            <li  data-aos="fade-right">
                                <div dangerouslySetInnerHTML={{ __html: t("Gorgeous design to match you") }} />
                            </li>
                            <li  data-aos="fade-right">
                                <div dangerouslySetInnerHTML={{ __html: t("Automate scheduling") }} />
                            </li>
                        </ul>
                    </div>
                    <div className="box_img"  data-aos="fade-left">
                        <img src={mockup1} alt=""/>
                    </div>
                </div>
            </div>

        </div>
      </section>
    );
};

export default HomeSectionTwo;
