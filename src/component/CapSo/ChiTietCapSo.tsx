import { Breadcrumb } from 'antd';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '../../Util/variableImage';

export const ChiTietCapSo = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const breadCrumbView = () => {
        const {pathname} = location;
        const pathnames = pathname.split('/').filter((item) => item);
        return (
          <div>
            <Breadcrumb separator=''>
              {pathnames.length > 0 ? (
                <>
                  <Breadcrumb.Item>Cấp số</Breadcrumb.Item>
                  <Breadcrumb.Separator>
                    <img src={`${Image.separator}`}/>
                  </Breadcrumb.Separator>
                  <Breadcrumb.Item>
                    <a onClick={()=> {
                        navigate('/capSo');
                    }}>Danh sách cấp số</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Separator>
                    <img src={`${Image.separator}`}/>
                  </Breadcrumb.Separator>
                  <Breadcrumb.Item>
                    <span>Chi tiết</span>
                  </Breadcrumb.Item>
                </>
              ) : (
                <>
                  <Breadcrumb.Item>Cấp số</Breadcrumb.Item>
                  <Breadcrumb.Item>
    
                  </Breadcrumb.Item>
                </>
              )}
            </Breadcrumb>
          </div>
        )
    }
    
    return (
        <div>
            <div className='capSo__breadcrumb'>
                {breadCrumbView()}
            </div>
            <div className='capSo__content'>
                <h3 className='capSo__content-heading'>
                Quản lý cấp số
                </h3>
                <div className='capSo__content-about'>
                    <h3 className='content__about-heading'>
                        Thông tin cấp số
                    </h3>
                    <div className='content__about-list'>
                        <div className='content__about-item'>
                            <div className='about__info-list'>
                                <div className='about__info-item'>
                                    <p>Họ tên:</p>
                                    <span>Nguyễn Thị Dung</span>
                                </div>
                                <div className='about__info-item'>
                                    <p>Tên dịch vụ:</p>
                                    <span>Khám tim mạch</span>
                                </div>
                                <div className='about__info-item'>
                                    <p>Số thứ tự: </p>
                                    <span>2001201</span>
                                </div>
                                <div className='about__info-item'>
                                    <p>Thời gian cấp: </p>
                                    <span>14:35 - 07/11/2021</span>
                                </div>
                                <div className='about__info-item'>
                                    <p>Hạn sử dụng: </p>
                                    <span>18:00 - 07/11/2021</span>
                                </div>
                            </div>
                        </div>
                        <div className='content__about-item'>
                            <div className='about__info-list'>
                                <div className='about__info-item'>
                                    <p>Nguồn cấp</p>
                                    <span>Kiosk</span>
                                </div>
                                <div className='about__info-item'>
                                    <p>Trạng thái</p>
                                    <span className='d-flex align-items-center'>
                                        <img src={Image.dangthuchien} style={{marginRight: '3px'}}/>
                                        Đang chờ
                                    </span>
                                </div>
                                <div className='about__info-item'>
                                    <p>Số điện thoại</p>
                                    <span>0948523623</span>
                                </div>
                                <div className='about__info-item'>
                                    <p>Địa chỉ Email: </p>
                                    <span>nguyendung@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='capSo__return' onClick={()=> {
                navigate('/capSo');
            }}>
                <img src={`${Image.returnImage}`}/>
                <span>Quay lại</span>
            </div>
        </div>
    )
}
