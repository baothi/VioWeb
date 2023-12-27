import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import HS3_Mockup1_vn from '../../assets/images/HS3_Mockup1_vn.png'
import HS3_Mockup2_vn from '../../assets/images/HS3_Mockup2_vn.png'
import HS3_Mockup3_vn from '../../assets/images/HS3_Mockup3_vn.png'
import HS3_Mockup1_en from '../../assets/images/HS3_Mockup1_en.png'
import HS3_Mockup2_en from '../../assets/images/HS3_Mockup2_en.png'
import HS3_Mockup3_en from '../../assets/images/HS3_Mockup3_en.png'
import { useRef, useState } from 'react';
import { useTranslation} from 'react-i18next';
import { detectlanguage } from '../utils/langDetect'


const HomeSectionThree = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<number>(1);

    const handleSlideChange = () => {
      activeTab < 3 ? setActiveTab(activeTab + 1) : setActiveTab(1)
    }

    const sliderRef = useRef<any>()

    const settings = {
      speed: 0,
      centerMode: false,
      centerPadding: '0px',
      slidesToShow: 1,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 4000,
      dontanimate: true,
      arrows: false,
      beforeChange: handleSlideChange,
      slickGoTo: activeTab,
      ref: sliderRef,
      responsive: [
        {
          breakpoint: 768,
          settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1,
              speed: 0,
              centerPadding: '40px',
           
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            speed: 0,
            slidesToShow: 1
          }
        }
      ]
    };


    interface ITabItem {
      id: number;
      title: string;
      image: string;
    }
    
    let tabItems: ITabItem[] = []
    const tabItems_vn: ITabItem[] = [
      { id: 1, title: "Find your favorite service", image: `${HS3_Mockup1_vn}` },
      { id: 2, title: "Booking anywhere, anytime", image: `${HS3_Mockup2_vn}` },
      { id: 3, title: "Keep track of your calendar", image: `${HS3_Mockup3_vn}` }
    ];

    const tabItems_en: ITabItem[] = [
      { id: 1, title: "Find your favorite service", image: `${HS3_Mockup1_en}` },
      { id: 2, title: "Booking anywhere, anytime", image: `${HS3_Mockup2_en}` },
      { id: 3, title: "Keep track of your calendar", image: `${HS3_Mockup3_en}` }
    ];

    tabItems = detectlanguage(tabItems_vn, tabItems_en);

    

    const handleTabClick = (id: number) => {
      setActiveTab(id);
      if(sliderRef.current) {
        sliderRef.current.slickGoTo(id)
      }
    };

    return (
      <section className="section home_sec_3">
        <div className="grid-container">
            <div className="grid-50">
                <ul className="tab_img"  data-aos="fade-right" >
                  <Slider {...settings}>
                  {tabItems.map(item => (
                    
                    <li key={item.id}>
                     
                      <img  data-aos="flip-down" src={item.image} alt={item.title}  />
                    </li>
                  ))}
                  </Slider>
                </ul>
            </div>
            <div className="grid-50 tablet-grid-50">
              <div dangerouslySetInnerHTML={{ __html: t("Vio simplifies your life") }} /> 
                <ul className="tab_content" data-aos="fade-left">
                {tabItems.map((item, index) => (
                  <li
                 
                    key={item.id}
                    className={activeTab === item.id ? 'active' : ''}
                    data-id={item.id}
                    // data-aos="fade-left"
                    onClick={() => handleTabClick(index)}
                  >
                    <b><div dangerouslySetInnerHTML={{ __html: t(item.title) }} /> </b>
                  </li>
                ))}
                </ul>
            </div>
        </div>
      </section>
    );
};

export default HomeSectionThree;