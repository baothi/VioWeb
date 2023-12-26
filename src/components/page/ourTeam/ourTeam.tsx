import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ourteam.css';
import Email_icon from '../../../assets/images/Email_Icon.png';
import LinkedIn_Icon from '../../../assets/images/LinkedIn_Icon.png';
import PeterTran1 from '../../../assets/images/PeterTran1.png';
import RyanEames from '../../../assets/images/RyanEames.png';
import JuanMondragon from '../../../assets/images/JuanMondragon.png';
import DatHuynh2 from '../../../assets/images/DatHuynh2.png';
import Ngoc_Phan from '../../../assets/images/Ngoc_Phan.jpeg';
import PlaceholderAvatarMale from '../../../assets/images/PlaceholderAvatarMale.png';
import PlaceholderAvatarFemale from '../../../assets/images/PlaceholderAvatarFemale.png';
import Tien_Nguyen from '../../../assets/images/Tien_Nguyen.jpeg';
import LyTran from '../../../assets/images/LyTran.png';
import Marco_Alvarado from '../../../assets/images/MarcoAlvarado.png';
import Will_Vong from '../../../assets/images/WillVong.png';
import Khoa_Tran from '../../../assets/images/Khoa_tran.jpeg';
import DuyTran from '../../../assets/images/Duy_Tran.jpeg';
import Trung_Nguyen from '../../../assets/images/Trung_Nguyen.jpeg';
import Hai_Dang from '../../../assets/images/Hai_Dang.jpeg';
import Cong_Nguyen from '../../../assets/images/Cong_Nguyen.jpeg';
import Nguyen_Bao from '../../../assets/images/Thi_Nguyen.jpeg';
import Vu_Vu from '../../../assets/images/Vu_Vu.jpeg';
import Brian from '../../../assets/images/BrianBacungan.png';
import Hieu_QC from '../../../assets/images/Hieu_QC.jpg'


const OurTeam = () => {
  useEffect(() => {
    AOS.init({
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        mirror: true, //
    });
  }, []);
  return(
    <>
      <section className="section home_sec_1 team_page">
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                      <span className="sub" data-aos="fade-in">
                          The team
                      </span>
                      <h1 className="heading_title" data-aos="fade-in">
                          <b>Meet</b> the team<br/>
                          behind <b>PrismTech</b>
                      </h1>
                      <div className="content" data-aos="fade-in">
                          We’re a small team that loves to create great experiences and make meaningful connections between builders and customers.
                      </div>
                  </div>
                  <div className="wrap_items">
                      <div className="box_items">
                          <h2 data-aos="fade-in">Executives</h2>
                          <div className="wrap_member">
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={PeterTran1} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                          PETER TRAN
                                      </h3>
                                      <b>
                                          FOUNDER / CEO
                                      </b>
                                      <div className="content">
                                          As an optimizer in the tech industry for over 15 years, Peter recognizes disruptions in efficiency and drives solutions through advanced technological development. Coming from a humble background, Peter understands what it takes to succeed.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={RyanEames} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                          RYAN EAMES
                                      </h3>
                                      <b>
                                          CO-FOUNDER / COO / CPO
                                      </b>
                                      <div className="content">
                                          A 20+ year entertainment and tech industry veteran turned entrepreneur, Ryan’s laser focused drive helps bring each of his projects to market. His ability to cultivate teamwork and define direction provide the tuning rod that brings the project into
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={JuanMondragon} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                          JUAN MONDRAGON

                                      </h3>
                                      <b>
                                          CFO
                                      </b>
                                      <div className="content">
                                          A CPA and an MBA with over 14 years of experience, Juan has played critical roles for young and mature companies. He brings experience as a controller, treasurer, and a partner in financial planning. He has joined PrismTech as the CFO and is excited to be a major contributor.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box_items">
                          <h2 data-aos="fade-in">Operations</h2>
                          <div className="wrap_member">
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={DatHuynh2} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        DAT HUYNH
                                      </h3>
                                      <b>
                                        DIRECTOR OF OPERATIONS - VN
                                      </b>
                                      <div className="content">
                                        As an entrepreneur, business owner, and professor, Dat has immense experience in the Vietnamese ecosystem. Equipped with a thirst for success and tenacity of getting the job done, Dat is now leading the VN Operations team and will usher Vio into the new era of optimization for daily social life in Vietnam.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Ngoc_Phan} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        NGOC PHAN (GEM)
                                      </h3>
                                      <b>
                                        PRODUCT MANAGER - VN
                                      </b>
                                      <div className="content">
                                        With over 10 years of experience, Gem shines as a proficient Product Manager. Her capabilities extend to handling challenges across aviation, banking, fintech, and technology. As a person who loves balance and harmony, she remain ready to acquire fresh insights and establish connections.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={PlaceholderAvatarMale} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        KEVIN DE ARMOND
                                      </h3>
                                      <b>
                                        PRODUCT MANAGER - US
                                      </b>
                                      <div className="content">
                                      With grit, unshakable work ethic, and a solid understanding of development and organizational opimization, Kevin joins Team Vio as our US Product Manager to help bring Vio's vision to life.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Tien_Nguyen} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        TIEN NGUYEN (ADONIS)
                                      </h3>
                                      <b>
                                        BUSINESS ANALYST
                                      </b>
                                      <div className="content">
                                        Adonis, a dedicated business analyst, introduces himself as someone who possesses a deep affinity for both numbers and human interactions. He describes himself as an ambivert, able to adapt his demeanor to the prevailing mood, whether it be reserved or outgoing. He lives by the motto: "Listen to the silence, it speaks louder than words".
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box_items">
                          <h2 data-aos="fade-in">Communications & HR</h2>
                          <div className="wrap_member">
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={LyTran} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        LY TRAN
                                      </h3>
                                      <b>
                                        DIRECTOR OF COMMUNICATIONS
                                      </b>
                                      <div className="content">
                                        Graduated from Columbia University with a successful writing career, Ly has proven to be a stellar communicator, writer, and linguist. Combining creativity with conviction, vision with execution, she takes the helm as PrismTech’s Director of Communications.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={PlaceholderAvatarFemale} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        HIEU (HR)
                                      </h3>
                                      <b>
                                        HR 
                                      </b>
                                      <div className="content">
                                        With a phenominal sales track record, Linh is ready to apply her expertiese and spearhead PrismTech's sales efforts. With Linh onboard, we're ready to grow and continue to improve the lives of our users through the expansion of our organization.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box_items">
                          <h2 data-aos="fade-in">Quality Assurance</h2>
                          <div className="wrap_member">
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Marco_Alvarado} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        MARCO ALVARADO
                                      </h3>
                                      <b>
                                        DIRECTOR OF QA
                                      </b>
                                      <div className="content">
                                        A 15 year veteran of small and Fortune 500 companies, Marco helps teams integrate an innovative blend of Agile Development and Modern Quality Assurance practices. From idea to delivery, he equally improves process and product resulting in a track record of highly-rated releases.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Hieu_QC} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        Hieu Tran
                                      </h3>
                                      <b>
                                        Senior Quality Assurance
                                      </b>
                                      <div className="content">
                                      A 7-year veteran of large corporations and startups contributes the Agile Scrum model and the Testing process to ensure the quality of products before they are delivered to customers. Hieu has a strong desire to improve processes and products to help deliver better in the future.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box_items">
                          <h2 data-aos="fade-in">Design & Content</h2>
                          <div className="wrap_member">
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Will_Vong} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        WILL VONG
                                      </h3>
                                      <b>
                                        UX/UI ADVISOR
                                      </b>
                                      <div className="content">
                                        With over 27 years of UX design and research experience, William has been at the forefront of design leadership. He holds over 70 design and utility patents over 25 years at Microsoft pioneering innovations in Xbox, Media Center, Mobile, Tablets/ Surface, Windows, Office, Azure, HoloLens and more.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Khoa_Tran} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        KHOA TRAN
                                      </h3>
                                      <b>
                                        UX/UI DESIGNER
                                      </b>
                                      <div className="content">
                                        A Information Design master's degree holder, with over 5 years of experience in UI/UX design, Khoa Tran dedicated to creating user-centered experiences that seamlessly blend functionality with aesthetics.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box_items">
                          <h2 data-aos="fade-in">Mobile Front-End</h2>
                          <div className="wrap_member">
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Trung_Nguyen} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        TRUNG NGUYEN
                                      </h3>
                                      <b>
                                        MOBILE DEVELOPER LEAD
                                      </b>
                                      <div className="content">
                                      A 10+ year of software engineer and team leadership, Trung's expertise spans multiple programming languages, particularly in the realm of mobile development. His enthusiasm is rooted in the creation of inventive, user-centric products designed to address genuine, everyday problems.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Hai_Dang} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        HAI DANG
                                      </h3>
                                      <b>
                                        MOBILE DEVELOPER
                                      </b>
                                      <div className="content">
                                        As a tech enthusiast who thrives on embracing fresh challenges, relishes opportunities for learning. Hai specializes in developing exceptional applications for both Android and iOS devices .
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Cong_Nguyen} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        CONG NGUYEN
                                      </h3>
                                      <b>
                                        MOBILE DEVELOPER
                                      </b>
                                      <div className="content">
                                      Cong Nguyen, a skilled mobile developer with a passion for creating innovative and user-friendly applications. With a strong background in mobile app development, He combines technical expertise with a keen eye for design to deliver exceptional user experience.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box_items">
                          <h2 data-aos="fade-in">Backend</h2>
                          <div className="wrap_member">
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Nguyen_Bao} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                          Nguyen Bao
                                      </h3>
                                      <b>
                                        BACKEND DEVELOPER LEAD
                                      </b>
                                      <div className="content">
                                      As the Backend Manager, Bao Thi is a dedicated and highly skilled professional with a wealth of experience in the field of technology. With a strong background in managing backend systems and teams, Bao Thi has consistently demonstrated his ability to lead and innovate.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Vu_Vu} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        VU VU
                                      </h3>
                                      <b>
                                        BACKEND DEVELOPER
                                      </b>
                                      <div className="content">
                                        As a proficient backend developer with a knack for problem-solving. Vu Trong Vu specialize in Python, Django, Flask, MongoDB, and Azure, which he adeptly employs to craft remarkable products.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box_items">
                          <h2 data-aos="fade-in">Web Front-End</h2>
                          <div className="wrap_member">
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={Brian} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        BRIAN BACUNGAN
                                      </h3>
                                      <b>
                                        LEAD WEB DEVELOPER
                                      </b>
                                      <div className="content">
                                        A multidisciplinary tech professional with over 13+ years of combined experience in fields ranging from graphic design, digital marketing, and web development. Utilizing Brian's full-stack development expertise, he now leads PrismTech's web efforts towards success with relentless passion and dedication.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box_items">
                          <h2 data-aos="fade-in">Content Creation</h2>
                          <div className="wrap_member">
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src={DuyTran} alt="" />
                                  </div>
                                  <div className="box_content">
                                      <h3>
                                        DUY TRAN
                                      </h3>
                                      <b>
                                        LEAD WEB DEVELOPER
                                      </b>
                                      <div className="content">
                                        A multidisciplinary tech professional with over 13+ years of combined experience in fields ranging from graphic design, digital marketing, and web development. Utilizing Brian's full-stack development expertise, he now leads PrismTech's web efforts towards success with relentless passion and dedication.
                                      </div>
                                      <ul className="socials">
                                          <li>
                                              <a href="">
                                                  <img src={Email_icon} alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src={LinkedIn_Icon} alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>
      <section className="section business_sec_6" style={{ backgroundImage: `url(../images/bg_mail.jpeg)` }}>
          <div className="grid-container">
              <div className="grid-100">
                  <div className="text_center">
                      <h2 className="heading_title">
                          Ready to <b>open</b> your vio <br/>
                          <b>business account?</b>
                      </h2>
                      <div className="content">
                          Be a part of a game changing AI-booking platform.
                      </div>
                      <form action="">
                          <input type="text" placeholder="Your email" />
                          <button type="submit">
                              Get Started
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default OurTeam;