import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      //section 1
      "Smart Booking": "Smart <b>Booking</b>",

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
                                            <b>Never </b> miss <b> another </b> experience
                                          
                                          </a>`,
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
                                        <b>Fast</b> and <b>smooth</b> booking
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
                                            <b>Gorgeous design</b> to match you
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
                                    <b>Automate</b> scheduling
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
                          Explore shop, services, promotion and more in vio's Marketplace.
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
                  All in one calendar to stay in the loop, keep track of your bookings, your event, activities and sync with your everyday calendar.
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
                                  Social media integrated: Feed, chat, livestream, review system.
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
                                    Online business is booming, vio packs all the tool you need to take your online shop velocity to the next level.
                                  </div>`,

    "Open Your Online Store": "Open Your Online Store",
    "Appointment Scheduling": "Appointment Scheduling",
    "Manage Team Member": "Manage Team Member",


    //section 7
    "Download Vio mobile app" :  `<h2 class="heading_title">
                                    <b>Download</b> The<br/>
                                    Vio mobile app
                                  </h2>`
    

    },
      "Smart Booking": "Smart <b>Booking</b>",
      "homeSectionBook": "<h2 className='heading_title' data-aos='fade-right'>Book <div className='box'><div className='box-scroll-text'><b>Beauty and Spa</b></div></div></h2>"
  },
  vi: {
    translation: {
      //section 1
      "Smart Booking": "Đặt Lịch <b>Thông Minh<b>",

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
                                            <b>Không bỏ lỡ </b> bất kỳ <b> trải nghiệm nào</b>
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
                                      <b>Nhanh chóng </b> với <b> đặt lịch </b> một chạm
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
                                            <b>Thiết kế </b> hướng đến bạn
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
                                  <b>Tự động hoá </b>đặt lịch hẹn
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
                    Khám phá cửa hàng, dịch vụ và tận hưởng muôn vàn khuyến mãi trong Marketplace của Vio.
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
                  Lịch trình của bạn đều tập trung một nơi, luôn luôn kiểm soát được lịch hẹn, sự kiện, hoạt động và đồng bộ với lịch trình hàng ngày của bạn
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
                                Nền tảng tích hợp mạng xã hội dành riêng cho bạn: khám phá, chat, phát trực tiếp và hơn thế nữa
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
                                  Việc kinh doanh trực tuyến ngày càng phát triển, Vio cung cấp các công cụ số hoá để đưa cửa hàng của bạn lên một tầm cao mới
                                    </div>`,
    "Open Your Online Store": "Mở cửa hàng trực tuyến",
    "Appointment Scheduling": "Đặt hẹn trực tuyến",
    "Manage Team Member": "Quản lý nhân sự",

    //section 7
    "Download Vio mobile app" :  `<h2 class="heading_title">
                                  <b>Tải ngay</b><br/>
                                  Ứng dụng Vio
                                </h2>`
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