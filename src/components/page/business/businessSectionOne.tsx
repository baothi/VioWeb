import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import BS1_Mockup1 from '../../../assets/images/BS1_Mockup1.png'
import BS1_Mockup2 from '../../../assets/images/BS1_Mockup2.png'
import BS1_Mockup3 from '../../../assets/images/BS1_Mockup3.png'
import BS1_Mockup4 from '../../../assets/images/BS1_Mockup4.png'
import BS1_Mockup5 from '../../../assets/images/BS1_Mockup5.png'
import BS1_Mockup6 from '../../../assets/images/BS1_Mockup6.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation} from 'react-i18next';

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
        autoplaySpeed: 2000,
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


    const slidesData = [
        { imgSrc: BS1_Mockup1, title: "Open Your Online Store" },
        { imgSrc: BS1_Mockup2, title: "Appointment Scheduling" },
        { imgSrc: BS1_Mockup3, title: "Manage Team Member" },
        { imgSrc: BS1_Mockup4, title: "Open Your Online Store" },
        { imgSrc: BS1_Mockup5, title: "Appointment Scheduling" },
        { imgSrc: BS1_Mockup6, title: "Manage Team Member" },
    ];

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
