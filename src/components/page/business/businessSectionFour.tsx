import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import slider_content_1 from '../../../assets/images/slider_content_1.png';
import slider_content_2 from '../../../assets/images/slider_content_2.png';
import slider_content_3 from '../../../assets/images/slider_content_3.png';
import slider_content_4 from '../../../assets/images/slider_content_4.png';
import slider_content_5 from '../../../assets/images/slider_content_5.png';
import slider_content_6 from '../../../assets/images/slider_content_6.png';
import shoppingbag03 from '../../../assets/images/shopping-bag-03.svg';
import img_nav_1 from '../../../assets/images/img_nav_1.png';
import img_nav_2 from '../../../assets/images/img_nav_2.png';
import img_nav_3 from '../../../assets/images/img_nav_3.png';
import img_nav_4 from '../../../assets/images/img_nav_4.png';
import img_nav_5 from '../../../assets/images/img_nav_5.png';
import img_nav_6 from '../../../assets/images/img_nav_6.png';


const BusinessSectionFour = () => {
    const sliderThumb = {
      slidesToShow: 6,
      slidesToScroll: 6,
      asNavFor: '.slider-content',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: false,
    };
    
    const sliderContent = {
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false,
      infinite: false,
      speed: 1000,
      asNavFor: '.slider-thumb',
      arrows: false,
    }



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
                  <Slider {...sliderContent}>
                    <div className="item">
                        <img src={slider_content_1} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_2} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_3} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_4} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_5} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_6} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_1} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_2} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_3} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_4} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_5} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={slider_content_6} alt="" />
                        <div className="box_content">
                            <div className="icon">
                                <img src={shoppingbag03} alt="" />
                            </div>
                            <h3 className="heading_title">
                                Open Your
                                <b>Online Store</b>
                            </h3>
                            <div className="content">
                                From the ground up with our built-in store builder and get found by customer on <span>Vio market place</span>.
                            </div>
                            <div className="nav_slider">
                                <div className="arrow left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M20 24L12 16L20 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="arrow right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M12 24L20 16L12 8" stroke="#FAFAFA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                  </Slider>
                </div>
                <div className="slider slider-thumb" data-aos="fade-up">
                    <Slider {...sliderThumb}>
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
