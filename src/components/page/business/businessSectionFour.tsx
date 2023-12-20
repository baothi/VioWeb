import { default as Slider } from "react-slick";
// import Slider from '../slider'
import 'slick-carousel/slick/slick.css';
import slider_content_1 from '../../../assets/images/slider_content_1.png';
import slider_content_2 from '../../../assets/images/slider_content_2.png';
import slider_content_3 from '../../../assets/images/slider_content_3.png';
import slider_content_4 from '../../../assets/images/slider_content_4.png';
import slider_content_5 from '../../../assets/images/slider_content_5.png';
import slider_content_6 from '../../../assets/images/slider_content_6.png';
import shoppingbag03 from '../../../assets/images/shopping-bag-03.png';
import calendarcheck02 from '../../../assets/images/calendar1.png';
import setting02 from '../../../assets/images/settings-02.png';
import setting04 from '../../../assets/images/settings-04.png';
import bellringing from '../../../assets/images/bell-ringing-04.png';
import calendardate from '../../../assets/images/calendar-date.png';
import img_nav_1 from '../../../assets/images/img_nav_1.png';
import img_nav_2 from '../../../assets/images/img_nav_2.png';
import img_nav_3 from '../../../assets/images/img_nav_3.png';
import img_nav_4 from '../../../assets/images/img_nav_4.png';
import img_nav_5 from '../../../assets/images/img_nav_5.png';
import img_nav_6 from '../../../assets/images/img_nav_6.png';
import { useEffect, useRef, useState } from 'react';
import { useTranslation} from 'react-i18next';
import AOS from 'aos';

const BusinessSectionFour = () => {
    const { t } = useTranslation();
    const sliderContentRef = useRef(null);
    const sliderThumbRef = useRef(null);
    const [nav1, setNav1] = useState<Slider | undefined>(undefined);
    const [nav2, setNav2] = useState<Slider | undefined>(undefined);

    useEffect(() => {
        if (sliderContentRef.current !== null) {
            setNav1(sliderContentRef.current);
        }
        if (sliderThumbRef.current !== null) {
            setNav2(sliderThumbRef.current);
        }
    }, [sliderContentRef, sliderThumbRef]);

    const sliderThumbSettings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: sliderContentRef.current,
        infinite: true,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 3000,
        // cssEase: "linear",
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 3,
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
        infinite: true,
        // asNavFor: nav2,
        arrows: false,
        ref: sliderContentRef,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 10000,
        cssEase: "linear",
      };

      // Adjust the settings within the render method
    const adjustedSliderContentSettings = {
      ...sliderContentSettings,
      asNavFor: nav2 ? nav2 : undefined, // This will be either `null` or the slider instance
    };

    const adjustedSliderThumbSettings = {
        ...sliderThumbSettings,
        asNavFor: nav1 ? nav1 : undefined, // This will be either `null` or the slider instance
    };

    type Slide = {
        img?: string,
        icon?: string
        title: string,
        content: string
    }

    const slides: Slide[] = [
        {
            img: slider_content_1,
            icon: shoppingbag03,
            title: `Open Online Store`,
            content: "From the ground up with our built-in store builder and get found by customer on Vio market place."
        },
        {
            img: slider_content_2,
            icon: calendarcheck02,
            title: "Appointment",
            content: " Say goodbye to old way, no phone call needed: Get book from clients with our seamless appointment scheduling."
        },
        {
            img: slider_content_3,
            icon: setting02,
            title: "Team member management",
            content: "Set up staff for services and manage their working shift, booking."
        },
        {
            img: slider_content_4,
            icon: bellringing,
            title: "Notification",
            content:"Notify your client with reminder to reduce cancel rate."
        },
        {
            img: slider_content_5,
            icon: setting04,
            title: "Inventory Management",
            content: "Track product, services slot and manage them among your branches."
        },
        {
            img: slider_content_6,
            icon: calendardate,
            title: "Calendar title",
            content: "All in one calendar to stay in the loop, keep track of your bookings, your event, promotion and your staff time."
        },
        {
            img: slider_content_1,
            icon: shoppingbag03,
            title: "Open Online Store",
            content: "From the ground up with our built-in store builder and get found by customer on Vio market place."
        },
        {
            img: slider_content_2,
            icon: calendarcheck02,
            title: "Appointment",
            content: " Say goodbye to old way, no phone call needed: Get book from clients with our seamless appointment scheduling."
        },
        {
            img: slider_content_3,
            icon: setting02,
            title: "Team member management",
            content: "Set up staff for services and manage their working shift, booking."
        },
        {
            img: slider_content_4,
            icon: bellringing,
            title: "Notification",
            content:"Notify your client with reminder to reduce cancel rate."
        },
        {
            img: slider_content_5,
            icon: setting04,
            title: "Inventory Management",
            content: "Track product, services slot and manage them among your branches."
        },
        {
            img: slider_content_6,
            icon: calendardate,
            title: "Calendar title",
            content: "All in one calendar to stay in the loop, keep track of your bookings, your event, promotion and your staff time."
        }
    ]
    
    const slidesData = [
        { imgSrc: img_nav_1, title: "Thumbnail Online Store" },
        { imgSrc: img_nav_2, title: "Thumbnail Appointment Scheduling" },
        { imgSrc: img_nav_3, title: "Thumbnail Manage Team Member" },
        { imgSrc: img_nav_4, title: "Thumbnail Notification" },
        { imgSrc: img_nav_5, title: "Thumbnail Inventory Management" },
        { imgSrc: img_nav_6, title: "Thumbnail Calendar" },
        { imgSrc: img_nav_1, title: "Thumbnail Online Store" },
        { imgSrc: img_nav_2, title: "Thumbnail Appointment Scheduling" },
        { imgSrc: img_nav_3, title: "Thumbnail Manage Team Member" },
        { imgSrc: img_nav_4, title: "Thumbnail Notification" },
        { imgSrc: img_nav_5, title: "Thumbnail Inventory Management" },
        { imgSrc: img_nav_6, title: "Thumbnail Calendar" },
    ];

    const SlideItem: React.FC<{ slide: Slide }> = ({ slide }) => {
        useEffect(() => {
          AOS.init({
              delay: 300, // values from 0 to 3000, with step 50ms
              duration: 700, // values from 0 to 3000, with step 50ms
              easing: 'ease', // default easing for AOS animations
              mirror: true, //
          });
        }, []);
        return (
            <div className="item">
                    <img src={slide.img} alt="" />
            <div className="box_content">
                <div className="icon">
                    <img src={slide.icon} alt="" />
                </div>
                <div className="heading_title_business" dangerouslySetInnerHTML={{ __html: t(slide.title) }} />     
                <div className="content_business" dangerouslySetInnerHTML={{ __html: t(slide.content) }} />
            </div>    
            </div>

        )
    }
    
    return (
      <section className="section business_sec_4">
        <div className="grid-container">
            <div className="grid-100">
                <div className="text_center">
                <div dangerouslySetInnerHTML={{ __html: t("Made for your business") }} />
                </div>

                <div className="slider slider-content" data-aos="fade-up">
                  <Slider {...adjustedSliderContentSettings}>
                    {slides.map((slide, index) => (
                        <SlideItem key={index} slide={slide}/>

                    ))}
                  </Slider>
                </div>
                <div className="slider slider-thumb" data-aos="fade-up">
                    <Slider {...adjustedSliderThumbSettings}>
                      {slidesData.map((slide, index) => (
                            <div className="item" key={index}>
                                <img src={slide.imgSrc} alt=""/>
                                <div dangerouslySetInnerHTML={{ __html: t(slide.title) }} />
                                
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
