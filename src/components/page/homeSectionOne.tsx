import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Mockup_1_slider from '../../assets/images/Mockup_1_slider.png';
import Mockup_2_slider from '../../assets/images/Mockup_2_slider.png';
import Mockup_3_slider from '../../assets/images/Mockup_3_slider.png';
// the hook
import { useTranslation} from 'react-i18next';


const HomeSectionOne = () => {
    const { t, i18n } = useTranslation();
    const settings = {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        focusOnSelect: true,
        speed: 1000,
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


    const slidesData = [
        { imgSrc: Mockup_1_slider },
        { imgSrc: Mockup_2_slider },
        { imgSrc: Mockup_3_slider },
        { imgSrc: Mockup_1_slider },
        { imgSrc: Mockup_2_slider },
        { imgSrc: Mockup_3_slider },
       
    ];

    return (
        <section className="section home_sec_1">
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                      <h1 className="heading_title" data-aos="fade-in">
                          Vio<br/>
                          <div dangerouslySetInnerHTML={{ __html: t('Smart Booking') }} />
                      </h1>
                      <div className="slider_top" data-aos="fade-in">
                            <Slider {...settings}>
                                {slidesData.map((slide, index) => (
                                    <div className="item" key={index}>
                                        <div className="box_img">
                                            <img src={slide.imgSrc} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default HomeSectionOne;
