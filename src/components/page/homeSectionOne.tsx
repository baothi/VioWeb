import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Mockup1_slider from '../../assets/images/HS1_Mockup1.png'
import Mockup2_slider from '../../assets/images/HS1_Mockup2.png'
import Mockup3_slider from '../../assets/images/HS1_Mockup3.png'
import Mockup4_slider from '../../assets/images/HS1_Mockup4.png'
import Mockup5_slider from '../../assets/images/HS1_Mockup5.png'
import Mockup6_slider from '../../assets/images/HS1_Mockup6.png'

// the hook
import { useTranslation} from 'react-i18next';


const HomeSectionOne = () => {
    const { t } = useTranslation();
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
        { imgSrc: Mockup1_slider },
        { imgSrc: Mockup2_slider },
        { imgSrc: Mockup3_slider },
        { imgSrc: Mockup4_slider },
        { imgSrc: Mockup5_slider },
        { imgSrc: Mockup6_slider },
       
    ];

    return (
        <section className="section home_sec_1">
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                          <div style={{marginBottom: "20px"}} dangerouslySetInnerHTML={{ __html: t('Smart Booking') }} /> 
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
