import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import IMG3 from '../../assets/images/IMG-3.png';
import IMG31 from '../../assets/images/IMG-3-1.png';
import IMG32 from '../../assets/images/IMG-3-2.png';


const HomeSectionSix = () => {
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
        { imgSrc: IMG3, title: "Open Your Online Store" },
        { imgSrc: IMG31, title: "Appointment Scheduling" },
        { imgSrc: IMG32, title: "Manage Team Member" },
        { imgSrc: IMG3, title: "Open Your Online Store" },
        { imgSrc: IMG31, title: "Appointment Scheduling" },
        { imgSrc: IMG32, title: "Manage Team Member" },
    ];

    return (
        <section className="section home_sec_6">
            <div className="grid-container">
                <div className="grid-100">
                    <div className="text_center">
                        <h2 className="heading_title" data-aos="fade-up">
                            Supercharge <b>your business</b>
                        </h2>
                        <div className="content top" data-aos="fade-up">
                            Online business is booming, vio packs all the tool you need to take your online shop velocity to the next level.
                        </div>
                    </div>
                    <div className="slider_business" data-aos="fade-up">
                        <Slider {...settings}>
                            {slidesData.map((slide, index) => (
                                <div className="item" key={index}>
                                    <a href="" className="style_center max"></a>
                                    <img src={slide.imgSrc} alt=""/>
                                    <h3>{slide.title}</h3>
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
