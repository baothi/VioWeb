import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import slider_content_1 from '../../../assets/images/slider_content_1.png';
import slider_content_2 from '../../../assets/images/slider_content_2.png';
import slider_content_3 from '../../../assets/images/slider_content_3.png';
import slider_content_4 from '../../../assets/images/slider_content_4.png';
import slider_content_5 from '../../../assets/images/slider_content_5.png';
import slider_content_6 from '../../../assets/images/slider_content_6.png';
import shoppingbag03 from '../../../assets/images/shopping-bag.svg';
import calendarcheck02 from '../../../assets/images/calendar-check.svg';
import setting02 from '../../../assets/images/settings-02.svg';
import setting04 from '../../../assets/images/settings-04.svg';
import bellringing from '../../../assets/images/bell-ringing-03.svg';
import calendardate from '../../../assets/images/calendar-date.svg';
import img_nav_1 from '../../../assets/images/img_nav_1.png';
import img_nav_2 from '../../../assets/images/img_nav_2.png';
import img_nav_3 from '../../../assets/images/img_nav_3.png';
import img_nav_4 from '../../../assets/images/img_nav_4.png';
import img_nav_5 from '../../../assets/images/img_nav_5.png';
import img_nav_6 from '../../../assets/images/img_nav_6.png';
import { useEffect, useRef, useState } from 'react';


const BusinessSectionFour = () => {
    const sliderContentRef = useRef(null);
    const sliderThumbRef = useRef(null);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect(() => {
        setNav1(sliderContentRef.current);
        setNav2(sliderThumbRef.current);
    }, [sliderContentRef.current, sliderThumbRef.current]);

    const sliderThumbSettings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: sliderContentRef.current,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
        ref: sliderThumbRef,
      };
    
      const sliderContentSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        infinite: false,
        speed: 1000,
        asNavFor: nav2,
        arrows: false,
        ref: sliderContentRef,
      };


    const slidesData = [
        { imgSrc: img_nav_1, title: "Online Store" },
        { imgSrc: img_nav_2, title: "Appointment Scheduling" },
        { imgSrc: img_nav_3, title: "Manage Team Member" },
        { imgSrc: img_nav_4, title: "Notification" },
        { imgSrc: img_nav_5, title: "Inventory Management" },
        { imgSrc: img_nav_6, title: "Calendar" },
        { imgSrc: img_nav_1, title: "Online Store" },
        { imgSrc: img_nav_2, title: "Appointment Scheduling" },
        { imgSrc: img_nav_3, title: "Manage Team Member" },
        { imgSrc: img_nav_4, title: "Notification" },
        { imgSrc: img_nav_5, title: "Inventory Management" },
        { imgSrc: img_nav_6, title: "Calendar" },
    ];

    const sliderContent = [
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_1} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${shoppingbag03} alt="" />
                </div>
                <h3 class="heading_title">
                    Open Your
                    <b>Online Store</b>
                </h3>
                <div class="content">
                    From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_2} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${calendarcheck02} alt="" />
                </div>
                <h3 class="heading_title">
                    Appointment
                    <b>Scheduling</b>
                </h3>
                <div class="content">
                Say goodbye to old way, no phone call needed: Get book from clients with our seamless appointment scheduling.
                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_3} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${setting02} alt="" />
                </div>
                <h3 class="heading_title">
                    Manage
                    <b>Team Member</b>
                </h3>
                <div class="content">
                Set up staff for services and manage their working shift, booking.
                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_4} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${bellringing} alt="" />
                </div>
                <h3 class="heading_title">
                    Notification
                </h3>
                <div class="content">
                Notify your client with reminder to reduce cancel rate.
                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_5} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${setting04} alt="" />
                </div>
                <h3 class="heading_title">
                    Inventory
                    <b>Management</b>
                </h3>
                <div class="content">
                Track product, services slot and manage them among your branches.                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_6} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${calendardate} alt="" />
                </div>
                <h3 class="heading_title">
                    Calendar
                </h3>
                <div class="content">
                All in one calendar to stay in the loop, keep track of your bookings, your event, promotion and your staff time.                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },

        {
            htmlContent: `<div class="item">
            <img src=${slider_content_1} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${shoppingbag03} alt="" />
                </div>
                <h3 class="heading_title">
                    Open Your
                    <b>Online Store</b>
                </h3>
                <div class="content">
                    From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_2} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${calendarcheck02} alt="" />
                </div>
                <h3 class="heading_title">
                    Appointment
                    <b>Scheduling</b>
                </h3>
                <div class="content">
                Say goodbye to old way, no phone call needed: Get book from clients with our seamless appointment scheduling.
                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_3} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${setting02} alt="" />
                </div>
                <h3 class="heading_title">
                    Manage
                    <b>Team Member</b>
                </h3>
                <div class="content">
                Set up staff for services and manage their working shift, booking.
                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_4} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${bellringing} alt="" />
                </div>
                <h3 class="heading_title">
                    Notification
                </h3>
                <div class="content">
                Notify your client with reminder to reduce cancel rate.
                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_5} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${setting04} alt="" />
                </div>
                <h3 class="heading_title">
                    Inventory
                    <b>Management</b>
                </h3>
                <div class="content">
                Track product, services slot and manage them among your branches.                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
        {
            htmlContent: `<div class="item">
            <img src=${slider_content_6} alt="" />
            <div class="box_content">
                <div class="icon">
                    <img src=${calendardate} alt="" />
                </div>
                <h3 class="heading_title">
                    Calendar
                </h3>
                <div class="content">
                All in one calendar to stay in the loop, keep track of your bookings, your event, promotion and your staff time.                </div>
                <div class="nav_slider">
                    <div class="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div class="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
        },
    ]


    return (
      <section className="section business_sec_4">
        <div className="grid-container">
            <div className="grid-100">
                <div className="text_center">
                    <h2 className="heading_title" data-aos="fade-up">
                        Made for <b>your business</b>
                    </h2>
                    <div className="content" data-aos="fade-up">
                        Online business is booming, Vio packs all the tool you need to take your online shop velocity to the next level.
                    </div>
                </div>

                <div className="slider slider-content" data-aos="fade-up">
                  <Slider {...sliderContentSettings}>
                    {sliderContent.map((slide, index) => (
                        <div key={index} dangerouslySetInnerHTML={{ __html: slide.htmlContent }} />
                    ))}
                  </Slider>
                </div>
                <div className="slider slider-thumb" data-aos="fade-up">
                    <Slider {...sliderThumbSettings}>
                      {slidesData.map((slide, index) => (
                            <div className="item" key={index}>
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

export default BusinessSectionFour;
