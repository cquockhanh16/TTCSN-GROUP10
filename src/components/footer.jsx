import React from 'react'
import qrcode from '../assest/images/home/qrcode.png';
import ggplay from '../assest/images/home/dowload-ggplay.png'
import appstore from '../assest/images/home/dowload-appstore.png'
import credit from '../assest/images/home/credit.svg'
import mark from '../assest/images/home/mark.png'

export const Footer = () => {
  return (
    <footer>
        <section className="footer-content container">
            <div>
                <ul>
                    <li className="title">CÔNG TY CỔ PHẦN CANIFA</li>
                    <li>SỐ ĐKKD: 0107574310, nhày cấp: 23/09/2016, nơi cấp: Sở Kế Hoạch và đàu tư Hà Nội</li>
                    <li>Trụ sở chính: Số 688, Đường Quang Trung, Phường La Khê, Quận Hà Đông, Hà Nội, Việt Nam</li>
                    <li>Địa chỉ liên hệ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội</li>
                    <li>Số điện thoại: +8424 - 7303.0222</li>
                    <li>Fax: +8424 - 6277.6419</li>
                    <li>Địa chỉ email: hello@canifa.com</li>
                </ul>
                <ul>
                    <li className="title">THƯƠNG HIỆU</li>
                    <li>Giới thiệu</li>
                    <li>Tin tức</li>
                    <li>Tuyển dụng</li>
                    <li>Với cộng đồng</li>
                    <li>Hệ thống cửa hàng</li>
                    <li>Liên hệ</li>
                </ul>
                <ul>
                    <li className="title">HỖ TRỢ</li>
                    <li>Hơi đáp</li>
                    <li>Chính sách KHTT</li>
                    <li>Điều kiện - Điều khoản Chính sách KHTT</li>
                    <li>Chương trình dành cho KH mới</li>
                    <li>Chính sách vận chuyển</li>
                    <li>Hướng dẫn chọn size</li>
                    <li>Kiểm tra đơn hàng</li>
                    <li>Tra ca điểm thẻ</li>
                    <li>Chính sách bảo mật thông tin KH</li>
                </ul>
                <ul>
                    <li className="title">TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</li>
                    <li className="group-img dowload">
                        <img src={qrcode}   alt="ảnh qrcode dowload app"/>
                        <img src={ggplay}  alt="tải trên google play"/>
                        <img src={appstore}  alt="tải trên app store"/>
                    </li>
                    <li className="title">
                        PHƯƠNG THỨC THANH TOÁN
                    </li>
                    <li className="group-img card">
                        <img src={credit} alt=""/>
                    </li>
                    <li>
                        <img src={mark} alt=""/>
                    </li>
                </ul>
            </div>
        </section>
        <hr />
        <div className="footer-bottom container">
            <div>© 2023 CANIFA</div>
            <div>
                <p>Visit us</p>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </footer>
  )
}
