import i18n from "i18next";
import { initReactI18next } from "react-i18next";



// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      //section 1
      "Smart Booking": `<h1 class="heading_title" data-aos="fade-in" >
                        Vio
                        Smart <b>Booking</b>
                        </h1>
                        <div class="content" data-aos="fade-in">
                        Vio is the <b>only booking experience</b> you’ll ever need, and <b>your #1 source</b> to find the best services & events nearby!
                        </div>`
                        ,

      //section 2
      "Book Beauty and Spa": 
      `<h2 class='heading_title' data-aos='fade-right'>
                                Book
                                <div class='heading-box'>
                                    <div class='box-scroll-text'>
                                        <b>Beauty and Spa</b>
                                    </div>
                                </div>                                                                    
                              </h2>`,
      "Anywhere, anytime" : ` <h3 class="heading_title"  data-aos="fade-right">
                                  Anywhere<br/>
                                  Anytime!
                              </h3>`,
      "Never miss another experience": `  <a href="">
                                            <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                                <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="userSpaceOnUse">
                                                        <stop stop-color="#7D2EBD"/>
                                                        <stop offset="1" stop-color="#C054EE"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <span><b>Never </b> miss <b> another </b> experience</span>
                                          
                                         </a> `,
      "Fast and smooth booking" : `  <a href="">
                                        <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                            <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="userSpaceOnUse">
                                                    <stop stop-color="#7D2EBD"/>
                                                    <stop offset="1" stop-color="#C054EE"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span><b>Fast</b> and <b>smooth</b> booking</span>
                                      </a>`,
      "Gorgeous design to match you" : `  <a href="">
                                            <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                                <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="userSpaceOnUse">
                                                        <stop stop-color="#7D2EBD"/>
                                                        <stop offset="1" stop-color="#C054EE"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <span><b>Gorgeous design</b> to match you </span>
                                          </a>`,  
      "Automate scheduling" : `  <a href="">
                                    <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                        <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="userSpaceOnUse">
                                                <stop stop-color="#7D2EBD"/>
                                                <stop offset="1" stop-color="#C054EE"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span> <b>Automate</b> scheduling</span>
                                  </a>`,

      //section 3      
      "Vio simplifies your life": `<h2 class="heading_title" data-aos="fade-left" data-aos-duration="3000">
                                      <b>Vio</b> simplifies<br/>
                                      your <span>Life</span>
                                  </h2>`,
      "Find your favorite service": "Find your favorite service",
      "Booking anywhere, anytime": "Booking anywhere, anytime",
      "Keep track of your calendar": "Keep track of your calendar",
      
      //section 4
      "All in one platform": `<h2 class="heading_title" data-aos="fade-right">
                                  All<b>-</b>in<b>-</b>one <br/>
                                  <div class="box"><b>Platform</b></div>
                              </h2>`,
      "Marketplace": ` <h3>
                          <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6499_25456)"/>
                              <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <defs>
                                  <linearGradient id="paint0_linear_6499_25456" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="user-space-on-use">
                                      <stop stop-color="#7D2EBD"/>
                                      <stop offset="1" stop-color="#C054EE"/>
                                  </linearGradient>
                              </defs>
                          </svg>
                          Marketplace
                      </h3>
                      <div class="content">
                          <b>Explore </b> shop, services, promotion and more in <b>Vio's Marketplace.</b>
                      </div>`,
    "Calendar": ` <h3>
                      <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6499_25456)"/>
                          <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <defs>
                              <linearGradient id="paint0_linear_6499_25456" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="user-space-on-use">
                                  <stop stop-color="#7D2EBD"/>
                                  <stop offset="1" stop-color="#C054EE"/>
                              </linearGradient>
                          </defs>
                      </svg>
                      Calendar
                  </h3>
                  <div class="content">
                  <b>All in one calendar</b> to stay in the loop, keep track of your bookings, your event, activities and sync with your everyday calendar.
                  </div>`,
    "Social Network Platform": ` <h3>
                                    <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6499_25456)"/>
                                        <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_6499_25456" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="user-space-on-use">
                                                <stop stop-color="#7D2EBD"/>
                                                <stop offset="1" stop-color="#C054EE"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Social Network Platform
                                  </h3>
                                  <div class="content">
                                  Social media integrated:<b> Feed, chat, livestream, review system.</b>
                                  </div>`,

    //section 5
    "Our Partners": `<h2 class="heading_title" data-aos="fade-in">
                          <b>
                              Our Partners
                          </b>
                      </h2> `,
    //section 6
    "Supercharge your business" : `<h2 class="heading_title" data-aos="fade-up">
                                    Supercharge <b>your business</b>
                                  </h2>
                                  <div class="content top" data-aos="fade-up">
                                    Online business is booming, <b>Vio packs all the tool you need </b> to take your online shop velocity to the next level.
                                  </div>`,

    "Open Your Online Store": "Open Your Online Store",
    "Appointment Scheduling": "Appointment Scheduling",
    "Manage Team Member": "Manage Team Member",


    //section 7
    "Download Vio mobile app" :  `<h2 class="heading_title">
                                    <b>Download</b> The<br/>
                                    Vio mobile app
                                  </h2>`,

    // ******************************************BUSINESS PAGE**************************************************
    //Section 1:
    "Be Seen, Be Visible" : ` <h1 class="heading_title" data-aos="zoom-in">
                                Be <b>Seen</b>, Be <div class="box"><b>Visible</b></div>,<br/>
                                <b>Attract</b> New Clients!
                            </h1>`,
    //Section 2:
    "Grow Faster": `   <h2 class="heading_title" data-aos="fade-right">
                            <span>Grow</span> Faster<br/>
                            with <b>Vio</b>
                        </h2>
                        <div class="content"  data-aos="fade-right">
                            Online business is booming, <b> Vio packs all the tool you need </b>to take your online shop velocity to the next level.
                        </div>
                        <ul>
                            <li  data-aos="fade-right">
                                <a href="">
                                    <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                        <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="user-space-on-use">
                                                <stop stop-color="#7D2EBD"></stop>
                                                <stop offset="1" stop-color="#C054EE"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Find more <b>customer</b>
                                </a>
                            </li>
                            <li  data-aos="fade-right">
                                <a href="">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                        <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="user-space-on-use">
                                                <stop stop-color="#7D2EBD"></stop>
                                                <stop offset="1" stop-color="#C054EE"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Keep <b>track of all your branches</b> in 1 account
                                </a>
                            </li>
                            <li  data-aos="fade-right">
                                <a href="">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                        <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7D2EBD"></stop>
                                                <stop offset="1" stopColor="#C054EE"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    Up-scale your <b>customer support</b> game
                                </a>
                            </li>
                            <li  data-aos="fade-right">
                                <a href="">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                        <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7D2EBD"></stop>
                                                <stop offset="1" stopColor="#C054EE"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Effortlessly <b> manage </b> your business
                                </a>
                            </li>
                        </ul>`,
    //Section 3:
    "How it works": `<h2 class="heading_title" data-aos="fade-in">
                        How it <b>works</b>
                    </h2>`,
    //Section 4:
    "Made for your business" : `  <div class="text_center">
                                    <h2 class="heading_title" data-aos="fade-up">
                                        Made for <b>your business</b>
                                    </h2>
                                    <div class="content" data-aos="fade-up">
                                        Online business is booming, <b>Vio packs all the tool you need </b>to take your online shop velocity to the next level.
                                    </div>
                                </div>`,
    "Open Online Store" : `  
                            
                            Open <b> Online Store</b> 
                            
                        `,
    "From the ground up with our built-in store builder and get found by customer on Vio market place." : `                                                   
                                                    From the ground up with our built-in store builder and get found by customer on Vio market place.
                                                    `,
    "Appointment" : `  
                            Appointment 
                            <b>Scheduling</b>
                        `,
    "Team member management" : `
                                Manage <br>
                                <b>Team Member </b>
                                `,
    "Set up staff for services and manage their working shift, booking." :` Set up staff for services and manage their working shift, booking.
                                                                            `,
    "Notification" : `
                        <b>Notification</b>
                        `,
    "Notify your client with reminder to reduce cancel rate." : ` 
                                                                Notify your client with reminder to reduce cancel rate.
                                                                ` ,  
    "Inventory Management" : ` 
                                    Inventory <b> Management</b>
                                `, 
    "Calendar title" : ` 
                    <b> Calendar</b>
                    `,           
    "Thumbnail Online Store" : `<h3>Online Store</h3>`,
    "Thumbnail Appointment Scheduling" : `<h3>Appointment Scheduling</h3>`,
    "Thumbnail Manage Team Member" : `<h3>Manage Team Member</h3>`,
    "Thumbnail Notification" : `<h3>Notification</h3>`,
    "Thumbnail Calendar" : `<h3>Calendar</h3>`,
    "Thumbnail Inventory Management" : `<h3>Inventory Management</h3>`,

    // Made for your business:
    // Section 5:
    "Industry": `<h2 class="heading_title">
                    <b>
                        Industry
                    </b>
                </h2>
                <div class="content">
                    Solution for your successful business
                </div>`,
     //Section 6:
     "Ready" : `<h2 class="heading_title">
                    Ready to <b>open</b> your Vio <br/>
                    <b>business’s account?</b>
                </h2>
                <div class="content">
                    Be a part of a game changing AI-booking platform.
                </div>`                      


    },
    //   "Smart Booking": "Smart <b>Booking</b>",
    //   "homeSectionBook": "<h2 className='heading_title' data-aos='fade-right'>Book <div className='box'><div className='box-scroll-text'><b>Beauty and Spa</b></div></div></h2>"
  },
  vi: {
    translation: {
      //section 1
      "Smart Booking": `<h1 class="heading_title hero_home" data-aos="fade-in" >
                            Vio 
                            Đặt Lịch <b>Thông Minh</b>
                            </h1>
                            <div class=content>
                            Vio là <b> trải nghiệm duy nhất </b>mà bạn từng biết đến, và là <b>nguồn tìm kiếm số 1 </b> cho những dịch vụ tốt nhất chung quanh bạn!
                            </div>`,

      //section 2
      "Book Beauty and Spa": 
      `<h2 class='heading_title' data-aos='fade-right'>
                                Đặt 
                                <div class='heading-box'>
                                    <div class='box-scroll-text'>
                                        <b>Làm Đẹp và Spa</b>
                                    </div>
                                </div>                                                                  
                              </h2>`,

      "Anywhere, anytime" : ` <h3 class="heading_title"  data-aos="fade-right">
                                  Tại mọi lúc,<br/>
                                  ở mọi ơi!
                              </h3>`,
      "Never miss another experience": `  <a href="" >
                                           
                                            <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                                <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="userSpaceOnUse">
                                                        <stop stop-color="#7D2EBD"/>
                                                        <stop offset="1" stop-color="#C054EE"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <span><b>Không bỏ lỡ </b> bất kỳ <b> trải nghiệm nào</b></span> 
                                            </div>
                                          </a>`,
      "Fast and smooth booking" : `  <a href="">
                                      <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                          <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                          <defs>
                                              <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="userSpaceOnUse">
                                                  <stop stop-color="#7D2EBD"/>
                                                  <stop offset="1" stop-color="#C054EE"/>
                                              </linearGradient>
                                          </defs>
                                      </svg>
                                      <span><b>Nhanh chóng </b> với <b> đặt lịch </b> một chạm </span>
                                    </a>`, 
                                    
      "Gorgeous design to match you" : `  <a href="">
                                            <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                                <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <defs>
                                                    <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="userSpaceOnUse">
                                                        <stop stop-color="#7D2EBD"/>
                                                        <stop offset="1" stop-color="#C054EE"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                           <span> <b>Thiết kế </b> hướng đến bạn <span>
                                          </a>`,    
      "Automate scheduling" : `  <a href="">
                                  <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"/>
                                      <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      <defs>
                                          <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="userSpaceOnUse">
                                              <stop stop-color="#7D2EBD"/>
                                              <stop offset="1" stop-color="#C054EE"/>
                                          </linearGradient>
                                      </defs>
                                  </svg>
                                  <span><b>Tự động hoá </b>đặt lịch hẹn </span>
                                </a>`,   
    
    //section 3
    "Vio simplifies your life": `<h2 class="heading_title" data-aos="fade-left" data-aos-duration="3000">
                                      <b>Đơn giản hoá </b><br/>
                                      đặt <span>lịch</span>
                                  </h2>`,
    "Find your favorite service": "Tìm kiếm dịch vụ bạn yêu thích",  
    "Booking anywhere, anytime": "Đặt lịch mọi lúc, mọi nơi",
    "Keep track of your calendar": "Kiểm soát lịch trình thông minh",
    
    //section 4
    "All in one platform": `<h2 class="heading_title" data-aos="fade-right">
                                  Tất<b>-</b> cả <b>-</b>trong </b> <br/>
                                  <div class="box"><b>Một Nền tảng</b></div>
                              </h2>`,
    "Marketplace": ` <h3>
                          <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6499_25456)"/>
                              <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <defs>
                                  <linearGradient id="paint0_linear_6499_25456" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="user-space-on-use">
                                      <stop stop-color="#7D2EBD"/>
                                      <stop offset="1" stop-color="#C054EE"/>
                                  </linearGradient>
                              </defs>
                          </svg>
                          Marketplace
                      </h3>
                    <div class="content">
                    <b>Khám phá </b> cửa hàng, dịch vụ và tận hưởng muôn vàn khuyến mãi trong <b>Marketplace của Vio.</b>
                    </div>`,
    "Calendar": ` <h3>
                      <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6499_25456)"/>
                          <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <defs>
                              <linearGradient id="paint0_linear_6499_25456" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="user-space-on-use">
                                  <stop stop-color="#7D2EBD"/>
                                  <stop offset="1" stop-color="#C054EE"/>
                              </linearGradient>
                          </defs>
                      </svg>
                      Lịch
                  </h3>
                  <div class="content">
                  <b>Lịch trình của bạn đều tập trung một nơi,</b> luôn luôn kiểm soát được lịch hẹn, sự kiện, hoạt động và đồng bộ với lịch trình hàng ngày của bạn
                  </div>`,
    "Social Network Platform": ` <h3>
                                  <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6499_25456)"/>
                                      <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      <defs>
                                          <linearGradient id="paint0_linear_6499_25456" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="user-space-on-use">
                                              <stop stop-color="#7D2EBD"/>
                                              <stop offset="1" stop-color="#C054EE"/>
                                          </linearGradient>
                                      </defs>
                                  </svg>
                                  Mạng xã hội
                                </h3>
                                <div class="content">
                                Nền tảng tích hợp mạng xã hội dành riêng cho bạn: <b>khám phá, chat, phát trực tiếp và hơn thế nữa. </b>
                                </div>`,
                                
    //section 5
    "Our Partners": `<h2 class="heading_title" data-aos="fade-in">
                        <b>
                          Đối tác
                        </b>
                    </h2> `,

    //section 6
    "Supercharge your business" : `<h2 class="heading_title" data-aos="fade-up">
                                    Tăng trưởng cửa hàng <b> với Vio </b>
                                  </h2>
                                  <div class="content top" data-aos="fade-up">
                                  Việc kinh doanh trực tuyến ngày càng phát triển, <b>Vio cung cấp các công cụ số hoá </b> để đưa cửa hàng của bạn lên một tầm cao mới
                                    </div>`,
    "Open Your Online Store": "Mở cửa hàng trực tuyến",
    "Appointment Scheduling": "Đặt hẹn trực tuyến",
    "Manage Team Member": "Quản lý nhân sự",

    //section 7
    "Download Vio mobile app" :  `<h2 class="heading_title">
                                  <b>Tải ngay</b><br/>
                                  Ứng dụng Vio 
                                </h2>`,
    // ********************************BUSINESS PAGE ******************************************
    //Section 1: 
    "Be Seen, Be Visible" : ` <h1 class="heading_title" data-aos="zoom-in">
                            Dễ dàng <b>được</b> <div class="box"><b>tìm thấy </b></div>,<br/>
                                <b>Thu hút </b> khách hàng mới!
                            </h1>`,
    //Section 2:
    "Grow Faster": `   <h2 class="heading_title" data-aos="fade-right">
                            <span>Tăng trưởng </span> <br/>thần tốc <br/>
                            với <b>Vio</b>
                        </h2>
                        <div class="content"  data-aos="fade-right">
                        Việc kinh doanh trực tuyến ngày càng phát triển, <b> Vio cung cấp tất cả công cụ số hoá </b> để đưa cửa hàng của bạn lên một tầm cao mới.
                        </div>
                        <ul>
                            <li  data-aos="fade-right">
                                <a href="">
                                    <svg width="32" height="32" view-box="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                        <path d="M13 22L19 16L13 10" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradient-units="user-space-on-use">
                                                <stop stop-color="#7D2EBD"></stop>
                                                <stop offset="1" stop-color="#C054EE"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Tìm kiếm <b>khách hàng</b>
                                </a>
                            </li>
                            <li  data-aos="fade-right">
                                <a href="">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                        <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7D2EBD"></stop>
                                                <stop offset="1" stopColor="#C054EE"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Kiểm soát <b> các chi nhánh của bạn </b> trong 1 tài khoản
                                </a>
                            </li>
                            <li  data-aos="fade-right">
                                <a href="">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                        <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7D2EBD"></stop>
                                                <stop offset="1" stopColor="#C054EE"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Nâng cấp <b>trải nghiệm khách hàng </b>
                                </a>
                            </li>
                            <li  data-aos="fade-right">
                                <a href="">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="8" fill="url(#paint0_linear_6563_2174)"></rect>
                                        <path d="M13 22L19 16L13 10" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_6563_2174" x1="4.68629" y1="27.3137" x2="24.563" y2="7.7037" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7D2EBD"></stop>
                                                <stop offset="1" stopColor="#C054EE"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Dễ dàng <b> quản lý </b>cửa hàng của bạn
                                </a>
                            </li>
                        </ul>`,
     //Section 3:
     "How it works": `<h2 class="heading_title" data-aos="fade-in">
                        Cách thức  <b>hoạt động</b>
                    </h2>`,
    //Section 4: 
    "Made for your business" : `  <div class="text_center">
                                    <h2 class="heading_title" data-aos="fade-up">
                                    Dành riêng cho <b>Cửa hàng của bạn</b>
                                    </h2>
                                    <div class="content" data-aos="fade-up">
                                    Việc kinh doanh trực tuyến ngày càng phát triển, <b>Vio cung cấp tất cả công cụ số hoá  </b>để đưa cửa hàng của bạn lên một tầm cao mới.
                                    </div>
                                </div>`,
   
    "Open Online Store" : `  
                                    Mở cửa hàng <b>trực tuyến  </b>
                                    `,
    "From the ground up with our built-in store builder and get found by customer on Vio market place." : `<div class="content">Thiết lập và trang trí cửa hàng trực tuyến của bạn và tìm thêm nhiều khách mới trên Vio Marketplace </div>`,
    "Appointment" : ` 
                            Đặt hẹn 
                            <b>trực tuyến</b>
                        `,
                        " Say goodbye to old way, no phone call needed: Get book from clients with our seamless appointment scheduling.": `<div class=content>
                        Tạm biệt hình thức đặt hẹn thủ công, không cần gọi điện hoặc ghi sổ tay, giờ đây bạn có thể nhận đặt lịch từ khách hàng với Vio
                        </div>`,
    "Team member management" : `
                                    Quản lý 
                                    <b>nhân sự </b>
                                    `,
    "Set up staff for services and manage their working shift, booking." :`
    Thiết lập nhân sự, quản lý thời gian làm việc và lịch hẹn của nhân sự
                                                                            `,
        "Notification" : `
                                Hệ thống <b>thông báo </b>
                            `,
    "Notify your client with reminder to reduce cancel rate." : `
                            Hệ thống lời nhắn thông báo đến khách hàng để giảm tỷ lệ huỷ lịch.
                            `,
    "Inventory Management" : `Quản lý <b>cửa hàng</b>`,
    "Track product, services slot and manage them among your branches.": `Thiết lập cửa hàng, dịch vụ và quản lý tất cả chi nhánh của bạn`,
    "Calendar title": `
                            <b>Lịch trình</b>
                           `,
    "All in one calendar to stay in the loop, keep track of your bookings, your event, promotion and your staff time.": `Tất cả mọi hoạt động cửa hàng bạn và nhân viên đều được quản lý trên lịch Vio`,
    "Thumbnail Online Store" : `<h3>Cửa hàng trực tuyến</h3>`,
    "Thumbnail Appointment Scheduling" : `<h3>Đặt hẹn trực tuyến</h3>`,
    "Thumbnail Manage Team Member" : `<h3>Quản lý nhân sự</h3>`,
    "Thumbnail Notification" : `<h3>Hệ thống thông báo</h3>`,
    "Thumbnail Calendar" : `<h3>Lịch trình</h3>`,
    "Thumbnail Inventory Management" : `<h3>Quản lý hàng hóa</h3>`,
    //Section 5:
    "Industry": `<h2 class="heading_title">
                    <b>
                        Industry
                    </b>
                </h2>
                <div class="content">
                Giải pháp cho sự thành công của doanh nghiệp
                </div>`,
    //Section 6:
    "Ready" : `<h2 class="heading_title">
                    Bạn <b> đã sẵn sàng </b> để mở cửa hàng <b>với Vio? </b>
                </h2>
                <div class="content">
                Trở thành một phần của công nghệ đặt lịch với AI
                </div>` 
    
    }
  }
}
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;