import img_change_1 from '../../assets/images/img_change_1.png';
import booking_anywhere from '../../assets/images/booking_anywhere.png';
import keep_track_of_calendar from '../../assets/images/keep_track_of_calendar.png';
import { useState } from 'react';


const HomeSectionThree = () => {
    interface ITabItem {
      id: number;
      title: string;
      image: string;
    }
    
    const tabItems: ITabItem[] = [
      { id: 1, title: "Find your favorite service", image: `${img_change_1}` },
      { id: 2, title: "Booking anywhere, anytime", image: `${booking_anywhere}` },
      { id: 3, title: "Keep track of your calendar", image: `${keep_track_of_calendar}` }
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
                <h2 className="heading_title" data-aos="fade-left" data-aos-duration="3000">
                    <b>Vio</b> simplifies<br/>
                    your <span>Life</span>
                </h2>
                <ul className="tab_content" data-aos="fade-left" data-aos-duration="3000">
                {tabItems.map(item => (
                  <li
                    key={item.id}
                    className={activeTab === item.id ? 'active' : ''}
                    data-id={item.id}
                    // data-aos="fade-left"
                    onClick={() => handleTabClick(item.id)}
                  >
                    <b>{item.title}</b>
                  </li>
                ))}
                </ul>
            </div>
        </div>
      </section>
    );
};

export default HomeSectionThree;