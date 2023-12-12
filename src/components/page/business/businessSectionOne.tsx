import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import img_phone_1 from '../../../assets/images/img_phone_1.png';
import img_phone_2 from '../../../assets/images/img_phone_2.png';
import img_phone_3 from '../../../assets/images/img_phone_3.png';


const BusinessSectionOne = () => {
    const settings = {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        arrows: true,
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
        { imgSrc: img_phone_1, title: "Open Your Online Store" },
        { imgSrc: img_phone_2, title: "Appointment Scheduling" },
        { imgSrc: img_phone_3, title: "Manage Team Member" },
        { imgSrc: img_phone_1, title: "Open Your Online Store" },
        { imgSrc: img_phone_2, title: "Appointment Scheduling" },
        { imgSrc: img_phone_3, title: "Manage Team Member" },
        { imgSrc: img_phone_1, title: "Open Your Online Store" },
        { imgSrc: img_phone_2, title: "Appointment Scheduling" },
        { imgSrc: img_phone_3, title: "Manage Team Member" },
    ];

    return (
        <section className="section business_sec_1">
        <div className="grid-container">
            <div className="grid-100">
                <h1 className="heading_title" data-aos="fade-in">
                    Be <b>seen</b>, be <div className="box"><b>visible</b></div>,<br/>
                    <b>attract</b> new
                </h1>
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
