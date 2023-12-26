import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import HS6_Mockup1 from '../../assets/images/HS6_Mockup1.png';
import HS6_Mockup2 from '../../assets/images/HS6_Mockup2.png';
import HS6_Mockup3 from '../../assets/images/HS6_Mockup3.png';
import HS6_Mockup4 from '../../assets/images/HS6_Mockup4.png'
import HS6_Mockup5 from '../../assets/images/HS6_Mockup5.png'
import HS6_Mockup6 from '../../assets/images/HS6_Mockup6.png'
import { useTranslation} from 'react-i18next';

const HomeSectionSix = () => {
    const { t } = useTranslation();
    const settings = {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        arrows: true,
        autoplay: true,
        infinite: true,
        slidesToScroll: 1,
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
        { imgSrc: HS6_Mockup1, title: "Open Your Online Store" },
        { imgSrc: HS6_Mockup2, title: "Appointment Scheduling" },
        { imgSrc: HS6_Mockup3, title: "Manage Team Member" },
        { imgSrc: HS6_Mockup4, title: "CRM System" },
        { imgSrc: HS6_Mockup5, title: "Notification" },
        { imgSrc: HS6_Mockup6, title: "Calendar title" },
    ];

    return (
        <section className="section home_sec_6">
            <div className="grid-container">
                <div className="grid-100">
                    <div className="text_center">
                    <div dangerouslySetInnerHTML={{ __html: t("Supercharge your business") }} />
                    </div>
                    <div className="slider_business" data-aos="fade-up" data-aos-duration="3000">
                        <Slider {...settings}>
                            {slidesData.map((slide, index) => (
                                <div className="item" key={index}>
                                    <a href="" className="style_center max"></a>
                                    <img src={slide.imgSrc} alt=""/>
                                    <h3><div dangerouslySetInnerHTML={{ __html: t(slide.title) }} /></h3>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionSix;
