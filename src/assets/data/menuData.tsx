import icon1 from '../images/sp_icon2.png'
import icon2 from '../images/sp_icon2.png'
import mockup1 from '../images/sp_mockup1.png'
// import icon3 from '../../../assets/images/sp_icon3.png'
// import icon4 from '../../../assets/images/sp_icon4.png'
// import icon5 from '../../../assets/images/sp_icon5.png'
// import Mockup1 from '../../../assets/images/Menu_Mockup1.png'
// import Mockup2 from '../../../assets/images/Menu_Mockup2.png'

export type ContentType = {
    subContent: string[],
    img?: string[]
}
export type SubMenuType = {
    id: number,
    title: string,
    subTitle?: string,
    content: ContentType[],
    
}

export type MenuCardType = {
    id: number,
    icon: string,
    title: string,
    sub_menu: SubMenuType[],
}

export const menuData: MenuCardType[] = [
    {id: 1, icon: icon1, title: 'Tài khoản cửa hàng', sub_menu: [
        
        {id: 1, title: 'Đăng ký tài khoản', content: [
                {subContent: ["Tải ngay ứng dụng Vio – đặt lịch thông minh trên Appstore hoặc Playstore.", 
                "Chọn Tài khoản cửa hàng và nhấn Xác nhận.",], 
                img: [mockup1,mockup1]},
                {subContent: ["Nhập số điện thoại hoặc email.​",
                "Nhập mã xác nhận​ (*) và tiếp tục.",],
                img:[mockup1,mockup1],},
                {subContent: ["Thêm thông tin cửa hàng, mật khẩu và xác nhận mật khẩu.",
                "Tick vào ô chọn, nếu bạn đã đọc và đồng ý với các điều khoản sử dụng của Vio.",
                "Chọn Tạo cửa hàng để hoàn tất."],
                img: [mockup1,mockup1]}]
                },

        {id: 2,title: 'Tạo chi nhánh', content: [
            {subContent: ["Chạm vào ảnh đại diện ở góc trái để mở menu phụ.",
                            "Chạm vào biểu tượng."], 
            img:[mockup1,mockup1]},
            {subContent: ["Chọn Tạo tài khoản mới.",
                            "Chọn và chạm vào loại hình tài khoản bạn muốn tạo. Hãy chọn tài khoản cửa hàng để tạo thêm chi nhánh.",
                        "Chọn và chạm vào cách thức đăng ký mà bạn muốn."], 
            img:[mockup1,mockup1]},
        ]},
        {id: 3,title: 'Chuyển đổi tài khoản', content: [
            {subContent:["Chạm vào ảnh đại diện ở góc trái để mở menu phụ.",
                            `Chạm vào icon chuyển đổi.
                            (Hoặc chạm nhanh vào hình đại diện nhỏ ở kế icon chuyển đổi )`,
                        "Chọn tài khoản bạn muốn sử dụng."],
            img:[mockup1,mockup1]}           
        ]},
        ]},
    {id: 2, icon: icon2, title:'Cài đặt cửa hàng', sub_menu:[
        {id: 1, title: 'Giao diện cửa hàng', content:[                    
            {subContent:["Chạm vào ảnh đại diện ở góc trái để mở menu phụ.",
                            "Chạm vào ảnh đại diện cửa hàng bạn để mở Giao diện cửa hàng.",
                        "Chạm vào Chỉnh sửa hồ sơ để thay đổi thông tin hiển thị."],
            img:[mockup1]},  
            {subContent:["Thiết lập thông tin về hồ sơ cửa hàng bạn.",
                            `Chọn danh mục kinh doanh phù hợp.
                            Lưu ý: điều này ảnh hưởng đến cách khách hàng có thể tìm thấy cửa hàng bạn.`,
                            "Nhấn Lưu để xác nhận các thay đổi."],
                img:[mockup1,mockup1]}, 
            {subContent:[],
                img:[]},          
        ]},

        {id: 2, title: 'Cài đặt chung', content:[                    
            {subContent:["Chạm Cài đặt chung.",
                        "Tại đây bạn có thể thêm ghi chú cho khách hàng khi đặt lịch hẹn, tiền tệ cũng như múi giờ hoạt động.",
                        "Thêm Chính sách huỷ lịch hẹn  cho cửa hàng bạn ."],
            img:[]},  
            {subContent:[`Bật Cho phép nhân viên kết nối, trong trường hợp cho phép nhân viên hỗ trợ khách trực tiếp.
            Bật Cho phép lựa chọn nhân viên, trong trường hợp cửa hàng bạn cho phép khách chọn nhân viên phục vụ mong muốn.`,
                        "Cài đặt thời gian khách hàng có thể đặt cũng như huỷ lịch hẹn",
                        "Nhấn Lưu để hoàn tất."],
                img:[mockup1,mockup1]}, 
            {subContent:[],
                img:[]},          
        ]},
        ]},    
    {id: 3, icon: icon1, title: 'Thời gian hoạt động', sub_menu: [
        
        {id: 1, title: 'Thiết lập giờ mở cửa', content: [
            {subContent: ["Nhấn vào Tạo thời gian hoạt động.",
                            "Chọn khung giờ bạn muốn rồi nhấn Áp dụng.",
                        ], 
            img: [mockup1,mockup1]},
            {subContent: [`	Bạn cũng có chia các khung thời gian dựa vào thời gian cửa hàng bạn hoạt động.`,
                            "Nhấn Lưu để xác nhận các thay đổi."],
            img:[mockup1,mockup1],},
            {subContent: [],
            img: [mockup1,mockup1]}]
            },

        {id: 2,title: '	Ngày làm việc trong tuần', content: [
            {subContent: ["Chạm vào ngày trong tuần bạn muốn điều chỉnh, ví dụ bạn điều chỉnh giờ mở cửa cho chủ nhận hãy chạm vào Sun, sau đó",
                        `Để đóng cửa cả chủ nhật, chọn Đóng cửa cả ngày
                        Để xóa một khung giờ, nhấn
                        Để thay đổi một khung giờ, nhấn
                        Nhấn Lưu để xác nhận thay đổi`], 
            img:[mockup1,mockup1]},
            {subContent: [], 
            img:[]},
        ]},
        {id: 3,title: 'Ngày nghỉ đặc biệt', content: [
            {subContent:["Chạm Thêm ngày và giờ trong mục ngày nghỉ đặc biệt.",
                            "Chọn ngày và thời gian bạn muốn nghỉ.",
                        "Nhấn Lưu để hoàn tất."],
            img:[]}    ,
            {subContent: ["Bạn cũng có chia các khung thời gian dựa vào thời gian cửa hàng bạn hoạt động.",
                            `Để thêm nhiều hơn một khung giờ hoạt động , chạm 
                            Để xóa một khung giờ, nhấn
                            Để thay đổi một khung giờ, nhấn`], 
                img:[mockup1,mockup1]},       
        ]},
            ]},   
    {id: 4, icon: icon1, title: 'Danh sách nhân sự', sub_menu: [
        
                {id: 1, title: 'Tổng quan', content: [
                        {subContent: ["Tại cài đặt cửa hàng, chọn Danh sách nhân sự.",
                                        `Tại đây bạn có thể:
                                        Thêm. bớt hoặc điều chỉnh các nhân sự.
                                        Liên kết tài khoản Vio nhân viên với cửa hàng
                                        Gắn dịch vụ cho nhân viên
                                        Niêm yết giá dịch vụ cho nhân viên
                                        Quản lý thời gian biểu nhân viên`,
                                        "Các trạng trái nhân sự (đã kết nối với tài khoản Vio cá nhân của nhân viên).",
                                        `Đã liên kết: Đã được kết nối với một tài khoản Vio cá nhân
                                        Chưa liên kết:Nhân viên chưa được gán với tài khoản Vio nào
                                        Đang chờ: Đã gửi lời mời kết nối, đang chờ trả lời	`], 
                        img: [mockup1,mockup1]},
                        ]
                        },
        
                {id: 2,title: 'Thêm nhân viên (chưa có tài khoản Vio)', content: [
                    {subContent: ["Chạm vào biểu tượng     ở góc phải màn hình để mở trình nhập nhân",
                                    "Điền thông tin nhân viên của bạn. Số điện thoại và email sẽ chỉ hiện với cửa hàng (không hiện với khách hàng)",
                                "Nhấn Lưu để hoàn tất."], 
                    img:[mockup1,mockup1]},
                 
                ]},
                {id: 3,title: 'Thêm nhân viên (đã có tài khoản Vio)', content: [
                    {subContent:["Tại trình nhập thông tin nhân sự chạm vào Liên kết.",
                                    `Tìm thông tin nhân viên, bạn có thể tìm bằng: 
                                    Tên tài khoản
                                    Số điện thoại
                                    Địa chỉ email`,
                                    "Nhấn Liên kết để gửi lời mời, bạn sẽ nhận được thông báo khi người dùng đồng ý.",
                                    "Nhấn Lưu để hoàn tất."
                                ],
                    img:[mockup1, mockup1]}           
                ]},

                {id: 4,title: 'Liên kết nhân viên ( nhân viên đã tạo sẵn)', content: [
                    {subContent:["Chạm vào nhân viên bạn muốn liên kết ( trạng thái Chưa liên kết)",
                                  `Tìm thông tin nhân viên, bạn có thể tìm bằng: 
                                  Tên tài khoản
                                  Số điện thoại
                                  Địa chỉ email`,
                                "Nhấn Liên kết để gửi lời mời, bạn sẽ nhận được thông báo khi người dùng đồng ý.",
                                "Nhấn Lưu để hoàn tất."
                                ],
                    img:[mockup1, mockup1]}           
                ]},
                {id: 5, title: 'Chỉnh sửa nhân viên', content: [
                    {subContent: ["Chạm vào nhân viên bạn muốn chỉnh sửa",
                                    "Thay đổi thông tin nhân viên mà bạn cần",
                                "Chọn Hủy liên kết nếu bạn muốn bỏ liên kết",
                            "Tắt Hoạt động nếu bạn muốn đưa nhân viên vào trang thái nghỉ",
                        "Nhấn Lưu để hoàn tất"], 
                    img: [mockup1,mockup1]},
                   
    

                ]}, 
    ]},

    {id: 5, icon: icon1, title: 'Cung ứng', sub_menu: [
        
        {id: 1, title: 'Tổng quan', content: [
                {subContent: ["Tại cài đặt cửa hàng, chọn Cung ứng.",
                               `Phía trên sẽ có 4 thẻ tương ứng với các mô hình mà cửa hàng bạn cung cấp cho khách hàng.
                               Dịch vụ
                               Sản phẩm
                               Bộ sưu tập
                               Ưu đãi` ], 
                img: [mockup1,mockup1]},
                ]
                },
        {id: 2, title: 'Dịch vụ', content: [
            {subContent: ["Tại thẻ Dịch vụ, Chạm vào icon	   ở góc phải màn hình",
                            "Nếu cửa hàng của bạn chỉ kinh doanh 1 loại hình dịch vụ bạn nên thêm Tất cả chỗ(*)",
                            "Thêm thông tin về dịch vụ mà bạn cung cấp, bạn nên nhập thông tin càng chi tiết càng tốt."], 
            img: [mockup1,mockup1]},
            {subContent: ["Nếu dịch vụ của bạn cần nhân viên để phục vụ hãy chọn Có vào khung Cần nhân viên phục vụ",
                            "Nhấn vào icon      để mở danh sách nhân viên và chọn các nhân viên mà bạn muốn gắn cho dịch vụ này, sau đó nhấn Chọn.",
                        "Kiểm tra lại thông tin và nhấn Lưu để hoàn tất."],
            img: [mockup1, mockup1]},
            {subContent: ["Chọn dịch vụ bạn muốn hiện thị, trượt sang trái và nhấn vào  Hiện",
                        "Chọn dịch vụ bạn muốn ẩn, trượt sang trái và nhấn vào Ẩn",
                            "Chọn dịch vụ bạn muốn xóa, trượt sang trái và nhấn vào Xóa"],
            img: [mockup1, mockup1]},
            {subContent: ["Khi đang tạo dịch vụ, bạn có thể chạm vào biểu tượng      để ẩn dịch vụ, lúc này sau khi tạo dịch vụ xong, dịch vụ sẽ tự động để ở chế độ ẩn"],
            img: [mockup1]}
            ]
            },
        {id: 3, title: 'Sản phẩm', content: [
            {subContent: ["Tại thẻ sản phẩm, nhấn vào biểu tượng	 ở góc phải màn hình",
                            "Thêm thông tin về sản phẩm của bạn.",
                        ], 
            img: [mockup1,mockup1]},
            {subContent: [`Tại phần điền thông tin, thêm số lượng và đơn vị của sản phẩm.
            Bạn có thể cập nhập số lượng hàng hóa liên tục để phù hợp với lượng hàng tốn bằng nút Nhập hàng và Xuất hàng`,
                    "Nhấn Lưu để hoàn tất"], 
            img: [mockup1,mockup1]},
            {subContent: ["Chọn sản phẩm bạn muốn hiện thị, trượt sang trái và nhấn vào  Hiện.",
        "Chọn sản phẩm bạn muốn ẩn, trượt sang trái và nhấn vào Ẩn.",
        "Chọn sản phẩm bạn muốn xóa, trượt sang trái và nhấn vào Xóa."], 
            img: [mockup1,mockup1]},
            {subContent: ["Khi đang tạo sản phẩm, bạn có thể chạm vào biểu tượng      để ẩn dịch vụ, lúc này sau khi tạo dịch vụ xong, dịch vụ sẽ tự động để ở chế độ ẩn."], 
                img: [mockup1]},
            ]
            },
        {id: 4, title: 'Bộ sưu tập', content: [
            {subContent: ["Tại thẻ bộ sưu tập, nhấn vào biểu tượng	 ở góc phải màn hình",
        "Thêm tên bộ sưu tập.",
    "Chọn các dịch vụ hoặc/và hoặc các sản phẩm bạn muốn thêm.",
"Nhấn Lưu để hoàn tất."], 
            img: [mockup1,mockup1]},
            {subContent: ["Chạm vào icon	  ở Bộ sưu tập bạn muốn tùy chỉnh. ",
        "Chọn/Bỏ chọn ở các sản phẩm, dịch vụ bạn muốn.",
    "Nhấn Lưu để hoàn tất."], 
                img: [mockup1,mockup1]},
            ]
            },
        {id: 5, title: 'Ưu đãi', content: [
            {subContent: ["Tại thẻ ưu đãi, nhấn vào biểu tượng	 ở góc phải màn hình",
        "Thêm tên cho ưu đãi của bạn.",
    "Chọn loại ưu đãi bạn muốn: Khuyến mãi hoặc Mua # tặng #",
"Nhấn Lưu để hoàn tất."], 
            img: [mockup1,mockup1]},
            ]
            },

        
        
]},

]
