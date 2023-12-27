import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import BS1_Mockup1_vn from '../../../assets/images/BS1_Mockup1_vn.png'
import BS1_Mockup2_vn from '../../../assets/images/BS1_Mockup2_vn.png'
import BS1_Mockup3_vn from '../../../assets/images/BS1_Mockup3_vn.png'
import BS1_Mockup4_vn from '../../../assets/images/BS1_Mockup4_vn.png'
import BS1_Mockup5_vn from '../../../assets/images/BS1_Mockup5_vn.png'
import BS1_Mockup6_vn from '../../../assets/images/BS1_Mockup6_vn.png'

import BS1_Mockup1_en from '../../../assets/images/BS1_Mockup1_en.png'
import BS1_Mockup2_en from '../../../assets/images/BS1_Mockup2_en.png'
import BS1_Mockup3_en from '../../../assets/images/BS1_Mockup3_en.png'
import BS1_Mockup4_en from '../../../assets/images/BS1_Mockup4_en.png'
import BS1_Mockup5_en from '../../../assets/images/BS1_Mockup5_en.png'
import BS1_Mockup6_en from '../../../assets/images/BS1_Mockup6_en.png'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation} from 'react-i18next';
import { detectlanguage } from '~/components/utils/langDetect.jsx';

const BusinessSectionOne = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        mirror: true
    });
  }, []);
    const settings = {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        speed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      };
    type SlideItem = {
      imgSrc: string, 
      title: string
    }
    let slidesData : SlideItem[] = []
    
    const slidesData_vn: SlideItem[] = [
        { imgSrc: BS1_Mockup1_vn, title: "Open Your Online Store" },
        { imgSrc: BS1_Mockup2_vn, title: "Appointment Scheduling" },
        { imgSrc: BS1_Mockup3_vn, title: "Manage Team Member" },
        { imgSrc: BS1_Mockup4_vn, title: "Open Your Online Store" },
        { imgSrc: BS1_Mockup5_vn, title: "Appointment Scheduling" },
        { imgSrc: BS1_Mockup6_vn, title: "Manage Team Member" },
    ];

    const slidesData_en: SlideItem[] = [
      { imgSrc: BS1_Mockup1_en, title: "Open Your Online Store" },
      { imgSrc: BS1_Mockup2_en, title: "Appointment Scheduling" },
      { imgSrc: BS1_Mockup3_en, title: "Manage Team Member" },
      { imgSrc: BS1_Mockup4_en, title: "Open Your Online Store" },
      { imgSrc: BS1_Mockup5_en, title: "Appointment Scheduling" },
      { imgSrc: BS1_Mockup6_en, title: "Manage Team Member" },
  ];

    slidesData = detectlanguage(slidesData_vn, slidesData_en);

    return (
        <section className="section business_sec_1">
        <div className="grid-container">
            <div className="grid-100">
              <div dangerouslySetInnerHTML={{ __html: t("Be Seen, Be Visible") }} />
              
                <div className="slider_banner" data-aos="fade-in">
                  <Slider {...settings}>
                      {slidesData.map((slide, index) => (
                          <div className="item" key={index}>
                              <img src={slide.imgSrc} alt=""/>
                          </div>
                      ))}
                  </Slider>
                </div>
            </div>
        </div>
      </section>
    );
};

export default BusinessSectionOne;
