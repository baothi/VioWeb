import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ourteam.css'

const OurTeam = () => {
  useEffect(() => {
    AOS.init({
        delay: 300, // values from 0 to 3000, with step 50ms
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
                          behindb <b>PrismTech</b>
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
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/639db738cb0a396f50acbe41/1671280442487/PeterTran1.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/6373e7d8a7da1f6ee1f10398/1668540381831/RyanEames.png/*%20GLOBAL%20*/" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/6372deb6a20ab77201291b7d/1668282486823/JuanMondragon.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
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
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/639db738cb0a396f50acbe41/1671280442487/PeterTran1.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/6373e7d8a7da1f6ee1f10398/1668540381831/RyanEames.png/*%20GLOBAL%20*/" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/6372deb6a20ab77201291b7d/1668282486823/JuanMondragon.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
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
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/639db738cb0a396f50acbe41/1671280442487/PeterTran1.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/6373e7d8a7da1f6ee1f10398/1668540381831/RyanEames.png/*%20GLOBAL%20*/" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
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
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/639db738cb0a396f50acbe41/1671280442487/PeterTran1.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
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
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/639db738cb0a396f50acbe41/1671280442487/PeterTran1.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/6373e7d8a7da1f6ee1f10398/1668540381831/RyanEames.png/*%20GLOBAL%20*/" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/6372deb6a20ab77201291b7d/1668282486823/JuanMondragon.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
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
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/639db738cb0a396f50acbe41/1671280442487/PeterTran1.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/6373e7d8a7da1f6ee1f10398/1668540381831/RyanEames.png/*%20GLOBAL%20*/" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/6372deb6a20ab77201291b7d/1668282486823/JuanMondragon.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
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
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/639db738cb0a396f50acbe41/1671280442487/PeterTran1.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="item" data-aos="fade-in">
                                  <div className="box_img">
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/6373e7d8a7da1f6ee1f10398/1668540381831/RyanEames.png/*%20GLOBAL%20*/" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
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
                                      <img src="https://static1.squarespace.com/static/6372dea9a20ab77201291938/t/639db738cb0a396f50acbe41/1671280442487/PeterTran1.png" alt="" />
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
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5d59c7f3109b63b4e0f/1667544533619/Email+Icon.png" alt="email-icon" />
                                              </a>
                                          </li>
                                          <li>
                                              <a href="">
                                                  <img src="https://static1.squarespace.com/static/6354821643389a019490e380/t/6364b5b7b118c16557f9ab83/1667544503576/LinkedIn+Icon.png" alt="linkedin-icon" />
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
                          <b>business’s account?</b>
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