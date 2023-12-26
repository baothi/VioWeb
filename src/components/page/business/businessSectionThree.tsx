import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Mockup_1_vn from '../../../assets/images/BS3_Mockup1_vn.png';
import Mockup_2_vn from '../../../assets/images/BS3_Mockup2_vn.png';
import Mockup_3_vn from '../../../assets/images/BS3_Mockup3_vn.png';

import Mockup_1_en from '../../../assets/images/BS3_Mockup1_en.png';
import Mockup_2_en from '../../../assets/images/BS3_Mockup2_en.png';
import Mockup_3_en from '../../../assets/images/BS3_Mockup3_en.png';

import { useTranslation} from 'react-i18next';
import { detectlanguage } from '~/components/utils/langDetect';


const BusinessSectionThree = () => {
    const { t } = useTranslation();
    const settings = {
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 3,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 1500,
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


    const slidesData_vn: SlideItem[] = [
        { imgSrc: Mockup_1_vn, title: "Open Your Online Store" },
        { imgSrc: Mockup_2_vn, title: "Appointment Scheduling" },
        { imgSrc: Mockup_3_vn, title: "Manage Team Member" },
        { imgSrc: Mockup_1_vn, title: "Open Your Online Store" },
        { imgSrc: Mockup_2_vn, title: "Appointment Scheduling" },
        { imgSrc: Mockup_3_vn, title: "Manage Team Member" },
    ];

    const slidesData_en: SlideItem[] = [
        { imgSrc: Mockup_1_en, title: "Open Your Online Store" },
        { imgSrc: Mockup_2_en, title: "Appointment Scheduling" },
        { imgSrc: Mockup_3_en, title: "Manage Team Member" },
        { imgSrc: Mockup_1_en, title: "Open Your Online Store" },
        { imgSrc: Mockup_2_en, title: "Appointment Scheduling" },
        { imgSrc: Mockup_3_en, title: "Manage Team Member" },
    ];

    let slidesData = detectlanguage(slidesData_vn, slidesData_en);

    return (
      <section className="section business_sec_3">
        <div className="grid-container">
            <div className="grid-100">
                <div className="text_center">
                    <div dangerouslySetInnerHTML={{ __html: t("How it works") }} />
                    
                </div>

                <div className="slider_banner" data-aos="fade-left" >
                    <Slider {...settings}>
                      {slidesData.map((slide:any, index:any) => (
                          <div className="item"  key={index}>
                              <img src={slide.imgSrc}  alt=""/>
                          </div>
                      ))}
                  </Slider>
                </div>
            </div>
        </div>
      </section>
    );
};

export default BusinessSectionThree;