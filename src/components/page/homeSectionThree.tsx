import HS3_Mockup1 from '../../assets/images/HS3_Mockup1.png'
import HS3_Mockup2 from '../../assets/images/HS3_Mockup2.png'
import HS3_Mockup3 from '../../assets/images/HS3_Mockup3.png'
import { useState } from 'react';
import { useTranslation} from 'react-i18next';

const HomeSectionThree = () => {
    const { t } = useTranslation();
    interface ITabItem {
      id: number;
      title: string;
      image: string;
    }
    
    const tabItems: ITabItem[] = [
      { id: 1, title: "Find your favorite service", image: `${HS3_Mockup1}` },
      { id: 2, title: "Booking anywhere, anytime", image: `${HS3_Mockup2}` },
      { id: 3, title: "Keep track of your calendar", image: `${HS3_Mockup3}` }
    ];
    const [activeTab, setActiveTab] = useState<number>(1);

    const handleTabClick = (id: number) => {
      setActiveTab(id);
    };

    return (
      <section className="section home_sec_3">
        <div className="grid-container">
            <div className="grid-50" data-aos="fade-right" data-aos-duration="3000">
                <ul className="tab_img">
                  {tabItems.map(item => (
                    <li key={item.id} className={activeTab === item.id ? 'active' : ''}>
                      <img src={item.image} alt={item.title} />
                    </li>
                  ))}
                </ul>
            </div>
            <div className="grid-50 tablet-grid-50">
              <div dangerouslySetInnerHTML={{ __html: t("Vio simplifies your life") }} /> 
                <ul className="tab_content" data-aos="fade-left" data-aos-duration="3000">
                {tabItems.map(item => (
                  <li
                    key={item.id}
                    className={activeTab === item.id ? 'active' : ''}
                    data-id={item.id}
                    // data-aos="fade-left"
                    onClick={() => handleTabClick(item.id)}
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