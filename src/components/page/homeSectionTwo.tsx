import { useTranslation } from 'react-i18next';
import home_img_sec_2 from '../../assets/images/img_home_sec_2.png';
import './homeSectionTwo.scss'


const HomeSectionTwo = () => {
    const { t } = useTranslation();
    return (
      <section className="section home_sec_2">
        <div className="grid-container">
            <div className="grid-100">
                <div dangerouslySetInnerHTML={{ __html: t("Book Beauty and Spa") }} />
                <div className="wrap">
                    <div className="box_content">
                        <div dangerouslySetInnerHTML={{ __html: t("Anywhere, anytime") }} />                     
                        <ul>                          
                            <li  data-aos="fade-right">
                                <div dangerouslySetInnerHTML={{ __html: t("Never miss another experience") }} />                            
                            </li>
                            <li  data-aos="fade-right">
                                <div dangerouslySetInnerHTML={{ __html: t("Fast and smooth booking") }} />
                            </li>
                            <li  data-aos="fade-right">
                                <div dangerouslySetInnerHTML={{ __html: t("Gorgeous design to match you") }} />
                            </li>
                            <li  data-aos="fade-right">
                                <div dangerouslySetInnerHTML={{ __html: t("Automate scheduling") }} />
                            </li>
                        </ul>
                    </div>
                    <div className="box_img"  data-aos="fade-left">
                        <img src={home_img_sec_2} alt=""/>
                    </div>
                </div>
            </div>

        </div>
      </section>
    );
};

export default HomeSectionTwo;
