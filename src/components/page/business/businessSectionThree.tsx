import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Mockup_1 from '../../../assets/images/Mockup_1.png';
import Mockup_2 from '../../../assets/images/Mockup_2.png';
import Mockup_3 from '../../../assets/images/Mockup_3.png';


const BusinessSectionThree = () => {
    const settings = {
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
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
        { imgSrc: Mockup_1, title: "Open Your Online Store" },
        { imgSrc: Mockup_2, title: "Appointment Scheduling" },
        { imgSrc: Mockup_3, title: "Manage Team Member" },
        { imgSrc: Mockup_1, title: "Open Your Online Store" },
        { imgSrc: Mockup_2, title: "Appointment Scheduling" },
        { imgSrc: Mockup_3, title: "Manage Team Member" },
        { imgSrc: Mockup_1, title: "Open Your Online Store" },
        { imgSrc: Mockup_2, title: "Appointment Scheduling" },
        { imgSrc: Mockup_3, title: "Manage Team Member" },
        { imgSrc: Mockup_1, title: "Open Your Online Store" },
        { imgSrc: Mockup_2, title: "Appointment Scheduling" },
        { imgSrc: Mockup_3, title: "Manage Team Member" },
        { imgSrc: Mockup_1, title: "Open Your Online Store" },
        { imgSrc: Mockup_2, title: "Appointment Scheduling" },
        { imgSrc: Mockup_3, title: "Manage Team Member" },
    ];

    return (
      <section className="section business_sec_3">
        <div className="grid-container">
            <div className="grid-100">
                <div className="text_center">
                    <h2 className="heading_title" data-aos="fade-in">
                        How it <b>works</b>
                    </h2>
                </div>

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

export default BusinessSectionThree;