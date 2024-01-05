import iphone14pro from '../../../assets/images/iPhone 14 Pro.png'
import { useState } from 'react';
import up from '../../../assets/images/faq_chevron-up.png';
import down from '../../../assets/images/faq_chevron-down.png';
import './faq.scss'
import Dropdown from '../dropdown/dropdown';

const FAQ= () => {
    type FAQ = {
      id: number,
      question: string;
      answer: string;
    };
    
    const faqs: FAQ[] = [
      {
        id: 1,
        question: "What is Vio?",
        answer: "Vio is a global visual schedule aggregator that connects you to the rest of the world from a personal, professional, and social standpoint."
      },
      {
        id: 2,
        question: "How do you pronounce Vio?",
        answer: "Vio is pronounced as 'Vee-oh'."
      },
      {
        id: 3,
        question: "Is there any connotation to Vio?",
        answer: "Yes, Vio: pronounced (vee-oh), is a portmanteau for Visual Optimization and a homophone for View. The foundation of our app is based on visual cues, conveying a more thorough story than just words and numbers alone."
      },
      {
        id: 4,
        question: "Is this app affiliated with Facebook?",
        answer: "No"
      },
      {
        id: 5,
        question: "Where can I find Vio?",
        answer:"Vio is currently available for download in Vietnam on both the App Store and Google Play. We are in our U.S. beta test and the Vio app will be available on both Google Play and the App Store in the U.S. and Canada upon our U.S. launch."
      },
      {
        id: 5,
        question:  "Will Vio charge a fee?",
        answer: "Creating a \"personal\" user account is free and end-users may leverage all features and functionality available. If you're a business entity and/or corporation and would like to promote an event using our platform, please contact us for more information.",
      },
      {
        id: 6,
        question: "Does Vio support multiple languages?",
        answer: "Yes, currently Vio supports Vietnamese and English. We will continue to add additional supported languages as we go.",
      },
      {
        id: 7,
        question: "Is my information secure?",
        answer: "Vio is dedicated to ensuring your privacy is our number one priority. This includes all of your information on our app.",
      },
      {
        id: 8,
        question: "Can businesses and corporations use Vio?",
        answer: "Absolutely. You may perform one of the following:\n\nContact our Sales department for more information.\nLeave us your information in the Contact section.",
      },
    ];
    
    
    const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {

      const [isOpen, setIsOpen] = useState(false);
    
      const toggle = () => {       
        setIsOpen(!isOpen);
      };

      return (
        <div className="faq-section" >
          <div className="faq-question" onClick={toggle}>
            {isOpen ? (<div>{faq.id}. {faq.question} <img src={up}/></div> ) : (<div>{faq.id}. {faq.question} <img src={down}/></div>)}
          </div>
          {isOpen && <div className="faq-answer" >{faq.answer}</div>}
        </div>
      );
    };
    
    interface UserManualItem {
      id: number;
      main_title?: string ;
      sub_title?: string;
      sub_title_child?: string;
      image?: string[];
      content?: string[];
      step_title1?: string;
      step_title2?: string;
      content_1?: string[];
      image_1?: string[];
    }
    interface MenuItem {
      name: string;
      id: number;
    }
    const tabItems: UserManualItem[] = [
      { id: 1, main_title:"I. Tài khoản cửa hàng" , sub_title: "", image: ["iphone14pro","iphone14pro","iphone14pro",], content: [""]  },
      { id: 2, main_title: "", sub_title: "1. Đăng ký tài khoản", 
      image: [iphone14pro ], 
      content: ["Tải ngay <b>ứng dụng Vio </b> – đặt lịch thông minh trên Appstore hoặc Playstore.", 
                "Chọn Tài khoản cửa hàng và nhấn Xác nhận.",
                "Nhập số điện thoại hoặc email.​",
                "Nhập mã xác nhận​ (*) và tiếp tục.",
                "Thêm thông tin cửa hàng, mật khẩu và xác nhận mật khẩu.",
                "Tick vào ô chọn, nếu bạn đã đọc và đồng ý với các điều khoản sử dụng của Vio.",
                "Chọn Tạo cửa hàng để hoàn tất."
    ],
  content_1: []},
    {id: 3, main_title: "", sub_title: "2. Tạo chi nhánh", image: [iphone14pro], 
    content: ["Chạm vào ảnh đại diện ở góc trái để mở menu phụ.",
              "Chạm vào biểu tượng​",
              "Chọn Tạo tài khoản mới.",
              "Chọn và chạm vào loại hình tài khoản bạn muốn tạo. Hãy chọn tài khoản cửa hàng để tạo thêm chi nhánh.",
              "Chọn và chạm vào cách thức đăng ký mà bạn muốn."
            ]},
    {id: 4, main_title: "", sub_title: "3. Chuyển đổi tài khoản", image:[iphone14pro],
  content: [ "Chạm vào ảnh đại diện ở góc trái để mở menu phụ.",
              "Chạm vào icon chuyển đổi.​(Hoặc chạm nhanh vào hình đại diện nhỏ ở kế icon chuyển đổi )",
              "Chọn tài khoản bạn muốn sử dụng."
            ]},
    {id: 5, main_title: "II. Cài đặt​ cửa hàng", sub_title: ""},
    {id: 6, main_title: "", sub_title: "1. Giao diện cửa hàng", image:[iphone14pro],
  content: ["Chạm vào ảnh đại diện ở góc trái để mở menu phụ.",
            "Chạm vào ảnh đại diện cửa hàng bạn để mở Giao diện cửa hàng.",
            "Chạm vào Chỉnh sửa hồ sơ để thay đổi thông tin hiển thị.",
            "Thiết lập thông tin về hồ sơ cửa hàng bạn.",
            `Chọn danh mục kinh doanh phù hợp.
             Lưu ý: điều này ảnh hưởng đến cách khách hàng có thể tìm thấy cửa hàng bạn. `,
             "Nhấn Lưu để xác nhận các thay đổi."

  ]},
    {id: 7, main_title: "", sub_title: "2. Cài đặt chung", image: [iphone14pro],
  content: ["Chạm Cài đặt chung.",
            "Tại đây bạn có thể thêm ghi chú cho khách hàng khi đặt lịch hẹn, tiền tệ cũng như múi giờ hoạt động.",
            "Thêm Chính sách huỷ lịch hẹn  cho cửa hàng bạn ",
            "Bật Cho phép nhân viên kết nối, trong trường hợp cho phép nhân viên hỗ trợ khách trực tiếp. Bật Cho phép lựa chọn nhân viên, trong trường hợp cửa hàng bạn cho phép khách chọn nhân viên phục vụ mong muốn. ",
            "Cài đặt thời gian khách hàng có thể đặt cũng như huỷ lịch hẹn",
            "Nhấn Lưu để hoàn tất.",


  ]},
    {id: 8, main_title: "", sub_title: "3. Thời gian hoạt động"},
    {id: 9, 
      sub_title_child: "i. Thiết lập thời gian hoạt động",
      image: [iphone14pro],
      content: [
        "Nhấn vào Tạo thời gian hoạt động.",
        "Chọn khung giờ bạn muốn rồi nhấn Áp dụng.",
        "Bạn cũng có chia các khung thời gian dựa vào thời gian cửa hàng bạn hoạt động.",
        "Để thêm nhiều hơn một khung giờ hoạt động, chạm icon. Để xóa một khung giờ, nhấn icon. Để thay đổi một khung giờ, nhấn icon",
        "Nhấn Lưu để xác nhận các thay đổi.",
      ],
    },
  {id: 10, sub_title_child: "ii. Thiết lập các ngày làm việc trong tuần", image: [iphone14pro],
  content: [`Chạm vào ngày trong tuần bạn muốn điều chỉnh, ví dụ bạn điều chỉnh giờ mở cửa cho chủ nhận hãy chạm vào Sun, sau đó: 
            <ul>
            <li>Để đóng cửa cả chủ nhật, chọn <b> &#160 Đóng cửa cả ngày </b>​.  </li>
            <li>Để xóa một khung giờ, nhấn <ICON>​.  </li>
            <li>Để thay đổi một khung giờ, nhấn​ <ICON>.  </li>
            <li>Nhấn <b>&#160Lưu&#160</b> để xác nhận thay đổi​ </li>
            <ul>`
  ]},
  {id: 11, sub_title_child: "iii. Thiết lập ngày nghỉ đặc biệt", image: [iphone14pro],
  content: ["Chạm Thêm ngày và giờ trong mục ngày nghỉ đặc biệt.",
            "Chọn ngày và thời gian bạn muốn nghỉ.",
            "Nhấn Lưu để hoàn tất."

  ],
  step_title1: "Thiết lập kỳ nghỉ đặc biệt (lễ, tết, cửa hàng bận…) để cho khách hàng của bạn biết khi cửa hàng đang không hoạt động",
  step_title2: "Bạn cũng có chia các khung thời gian dựa vào thời gian cửa hàng bạn hoạt động."
},
  
    {id: 12, main_title: "", sub_title: "4. Danh sách nhân sự", image: [iphone14pro],
    content: ["Tại cài đặt cửa hàng, chọn Danh sách nhân sự.",
              `Tại đây bạn có thể:
                 - Thêm. bớt hoặc điều chỉnh các nhân sự.​
                 - Liên kết tài khoản Vio nhân viên với cửa hàng​
                 - Gắn dịch vụ cho nhân viên​
                 - Niêm yết giá dịch vụ cho nhân viên​
                 - Quản lý thời gian biểu nhân viên
              `,
              `Các trạng trái nhân sự (đã kết nối với tài khoản Vio cá nhân của nhân viên).
              Đã liên kết: Đã được kết nối với một tài khoản Vio cá nhân​. Chưa liên kết:Nhân viên chưa được gán với tài khoản Vio nào​

Đang chờ: Đã gửi lời mời kết nối, đang chờ trả lời `

    ]},
    {id: 13, main_title: "", sub_title_child: "i. Thêm nhân viên ngoài Vio", image: [iphone14pro],
    content: ["Chạm vào biểu tượng     ở góc phải màn hình để mở trình nhập nhân sự.",
              "Điền thông tin nhân viên của bạn. Số điện thoại và email sẽ chỉ hiện với cửa hàng (không hiện với khách hàng)",
              "Nhấn Lưu để hoàn tất."

  ]},
    {id: 14, main_title: "", sub_title_child: "ii. Thêm nhân viên trong Vio", image: [iphone14pro],
    content: ["Tại trình nhập thông tin nhân sự chạm vào Liên kết.",
              `Tìm thông tin nhân viên, bạn có thể tìm bằng: ​

              Tên tài khoản​
              
              Số điện thoại​
              
              Địa chỉ email`,
              "Nhấn Liên kết để gửi lời mời, bạn sẽ nhận được thông báo khi người dùng đồng ý.",
              "Nhấn Lưu để hoàn tất."

    ]},
    {id: 15, main_title: "", sub_title_child: "iii. Liên kết nhân viên", image: [iphone14pro],
    content: ["Chạm vào nhân viên bạn muốn liên kết ( trạng thái Chưa liên kết)",
              `Tìm thông tin nhân viên, bạn có thể tìm bằng: ​

              Tên tài khoản​
              
              Số điện thoại​
              
              Địa chỉ email`,
              "Nhấn Liên kết để gửi lời mời, bạn sẽ nhận được thông báo khi người dùng đồng ý.",
              "Nhấn Lưu để hoàn tất."

    ]},
    {id: 16, main_title: "", sub_title_child: "iv. Chỉnh sửa nhân viên", image: [iphone14pro],
    content: ["Chạm vào nhân viên bạn muốn chỉnh sửa",
              "Thay đổi thông tin nhân viên mà bạn cần",
              `Chọn Hủy liên kết nếu bạn muốn bỏ liên kết​

              Tắt Hoạt động nếu bạn muốn đưa nhân viên vào trang thái nghỉ`,
              "Nhấn Lưu để hoàn tất"

    ]},
    {id: 17, main_title: "", sub_title_child: "v. Xóa nhân viên", image: [iphone14pro],
    content: [ "Chọn nhân viên mà bạn muốn xóa, trượt sang trái và nhấn vào Xóa"
    ]},
    {id: 18, main_title: "", sub_title: "5. Cung ứng", image: [iphone14pro],
    content: ["Tại cài đặt cửa hàng, chọn Cung ứng.",
              `Phía trên sẽ có 4 thẻ tương ứng với các mô hình mà cửa hàng bạn cung cấp cho khách hàng.​

              Dịch vụ​
              
              Sản phẩm​
              
              Bộ sưu tập​
              
              Ưu đãi`

    ]},
    {id: 19, main_title: "", sub_title_child: "i. Dịch vụ", image: [iphone14pro],
    content: ["Tại thẻ Dịch vụ, Chạm vào icon    ở góc phải màn hình",
              "Nếu cửa hàng của bạn chỉ kinh doanh 1 loại hình dịch vụ bạn nên thêm Tất cả chỗ(*)",
              "Thêm thông tin về dịch vụ mà bạn cung cấp, bạn nên nhập thông tin càng chi tiết càng tốt.",
              "Nếu dịch vụ của bạn cần nhân viên để phục vụ hãy chọn Có vào khung Cần nhân viên phục vụ",
              "Nhấn vào icon      để mở danh sách nhân viên và chọn các nhân viên mà bạn muốn gắn cho dịch vụ này, sau đó nhấn Chọn.",
              "Kiểm tra lại thông tin và nhấn Lưu để hoàn tất."

    ]},
    {id: 20, main_title: "", sub_title_child: "ii. Sản phẩm", image: [iphone14pro],
    content: ["Tại thẻ sản phẩm, nhấn vào biểu tượng ở góc phải màn hình",
              "Thêm thông tin về sản phẩm của bạn.",
              `Tại phần điền thông tin, thêm số lượng và đơn vị của sản phẩm.​

              Bạn có thể cập nhập số lượng hàng hóa liên tục để phù hợp với lượng hàng tốn bằng nút Nhập hàng và Xuất hàng`,
              "Nhấn Lưu để hoàn tất"

    ]},
    {id: 21, main_title: "", sub_title_child: "iii. Bộ sưu tập", image: [iphone14pro],
    content: ["Tại thẻ bộ sưu tập, nhấn vào biểu tượng ở góc phải màn hình",
              "Thêm tên bộ sưu tập.",
              "Chọn các dịch vụ hoặc/và hoặc các sản phẩm bạn muốn thêm.",
              "Nhấn Lưu để hoàn tất."

    ]},
    {id: 22, main_title: "", sub_title_child: "iv. Ưu đãi", image: [iphone14pro],
    content: ["Tại thẻ ưu đãi, nhấn vào biểu tượng ở góc phải màn hình",
              "Thêm tên cho ưu đãi của bạn.",
              "Chọn loại ưu đãi bạn muốn: Khuyến mãi hoặc Mua # tặng #",
              "Nhấn Lưu để hoàn tất."

    ]}
    ];

    const menuItems: MenuItem[] = [{name: "Frequently Asked Questions",id:1}, {name: "User Manual",id:2},]
    // const [activeTab, setActiveTab] = useState<number>(1);
    const [activeMenu, setActiveMenu] = useState<number>(1)

    // const handleTabClick = (id: number) => {
    //   setActiveTab(id);
    // };

    const handleMenuClick = (id: number) => {
      setActiveMenu(id)
    }

  

    return (
      <>
      <section className="section home_sec_3_faq">
        <div className='grid-container'>
          <div className='grid-100 ' >
              <div className='text_center '>
                <h3 className='heading_title'><b>How can we help you?</b></h3>
                <div className='title-sub-text'><h3 >If you’re new to Vio or looking for replatform your business, this guide will help you learn more about the platform
                  and its features.</h3></div>
                  <div>
                    <form>
                      <input placeholder='Search Information...'/>
                    </form>
                  </div>
                  </div>
               
          </div>
        </div>
        </section>

        <section className='section sec_2_faq'>
        <div className='faq-btn' >
          {menuItems.map(menuItem => (
            <button className={activeMenu === menuItem.id ? 'active' : ''} onClick={() =>handleMenuClick(menuItem.id)}>{menuItem.name}</button>
          ) )}
    
        </div>
        
        {activeMenu === 1 &&
        <div className="grid-container">
            <div className="grid-100 inner-content">
                <ul className="tab_img">
                  {tabItems.map(item => (
                    <li key={item.id} className={activeMenu === item.id ? 'active' : ''}>
                      {(item.content && activeMenu === item.id) &&                                                                                   
                            <div className='content_text'>
                            {faqs.map((faq, index) => (
                              <FAQItem key={index} faq={faq} />
                            ))}                 
                            </div>                                                   
                       }                      
                    </li>
                  ))}
                </ul>
            </div>
        </div>
}

        {activeMenu === 2 && <Dropdown/>}
      </section>
      </>
    );
};

export default FAQ;