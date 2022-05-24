import { memo } from 'react';

import fb from '../../assets/home/footer/fb.svg';
import ytb from '../../assets/home/footer/ytb.svg';
import zalo from '../../assets/home/footer/zalo.svg';
import visa from '../../assets/home/footer/visa.svg';
import acb from '../../assets/home/footer/acb.svg';
import atm from '../../assets/home/footer/atm.svg';

const Footer = () => {
    return (
        <footer className='footer__container'>
            <div className='footer__top wrapper'>
                <div className='footer__top__menu'>
                    <div className='footer__top__menu__item'>
                        <p>Giới thiệu về công ty</p>
                        <p>Câu hỏi thường gặp mua hàng</p>
                        <p>Chính sách bảo mật</p>
                        <p>Quy chế hoạt động</p>
                        <p>Kiểm tra hóa đơn điện tử</p>
                        <p>Tra cứu thông tin bảo hành</p>
                    </div>
                    <div className='footer__top__menu__item'>
                        <p>Tin tuyển dụng</p>
                        <p>Tin khuyến mãi</p>
                        <p>Hướng dẫn mua online</p>
                        <p>Hướng dẫn mua trả góp</p>
                        <p>Chính sách trả góp</p>
                    </div>
                    <div className='footer__top__menu__item'>
                        <p>Hệ thống cửa hàng</p>
                        <p>Hệ thống bảo hành</p>
                        <p>Bán hàng doanh nghiệp</p>
                        <p>Giới thiệu máy đổi trả</p>
                        <p>Chính sách đổi trả</p>
                    </div>

                    <div className='footer__top__menu__item'>
                        <p>Quy chế hoạt động Sàn GDTMĐT</p>
                        <p>Bán hàng cùng Tiki</p>
                    </div>
                </div>
                <div className='footer__top__payment'>
                    <p className='footer__top__payment__title'>
                        Phương thức thanh toán
                    </p>
                    <div className='footer__top__payment__icons'>
                        <img src={visa} alt='visa' />
                        <img src={acb} alt='acb' />
                        <img src={atm} alt='atm' />
                    </div>
                    <div className='footer__top__payment__sp'>
                        <p className='footer__top__payment__sp__title'>
                            Tư vấn mua hàng (Miễn phí)
                        </p>
                        <p className='footer__top__payment__sp__phone'>
                            1800 6601 (Nhánh 1)
                        </p>
                    </div>
                    <div className='footer__top__payment__sp'>
                        <p className='footer__top__payment__sp__title'>
                            Tư vấn mua hàng (Miễn phí)
                        </p>
                        <p className='footer__top__payment__sp__phone'>
                            1800 6601 (Nhánh 2)
                        </p>
                    </div>
                </div>
                <div className='footer__top__connect'>
                    <p className='footer__top__connect__title'>
                        Kết nối với chúng tôi
                    </p>
                    <div className='footer__top__connect__icons'>
                        <img src={fb} alt='fb' />
                        <img src={ytb} alt='ytb' />
                        <img src={zalo} alt='zalo' />
                    </div>
                    <span
                        style={{
                            display: 'inline-block',
                            margin: '10px 0',
                            fontSize: 14,
                            fontWeight: 600,
                        }}
                    >
                        Tải ứng dụng trên điện thoại
                    </span>
                    <div
                        className='footer__top__connect__downloads'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png'
                            width='80'
                            height='80'
                            alt='qr'
                            style={{
                                marginRight: 5,
                            }}
                        />
                        <div
                            className='footer__top__connect__downloads__os'
                            style={{
                                height: 80,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png'
                                width='122'
                                alt='appstore'
                            />
                            <img
                                src='https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png'
                                width='122'
                                alt='playstore'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <p className='footer__bottom__copyright'>
                    © 2007 - 2021 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số 03 / Địa
                    chỉ: 261 - 263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh / GPĐKKD
                    số 0311609355 do Sở KHĐT TP.HCM cấp ngày 08/03/2012. GP số
                    47/GP-TTĐT do sở TTTT TP HCM cấp ngày 02/07/2018. Điện
                    thoại: (028)73023456. Website:tiki.vn. Chịu trách nhiệm nội
                    dung: Nguyễn Trịnh Nhật Linh.
                </p>
            </div>
        </footer>
    );
};

export default memo(Footer);
