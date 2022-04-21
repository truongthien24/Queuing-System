import { Breadcrumb } from 'antd';
import React  from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Image } from '../../Util/variableImage';


export const ChiTietThietBi = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const breadCrumbView = () => {
        const {pathname} = location;
        const pathnames = pathname.split('/').filter((item) => item);
        return (
          <div>
            <Breadcrumb separator=''>
              {pathnames.length > 0 ? (
                <>
                  <Breadcrumb.Item>Thiết bị</Breadcrumb.Item>
                  <Breadcrumb.Separator>
                    <img src={`${Image.separator}`}/>
                  </Breadcrumb.Separator>
                  <Breadcrumb.Item>
                    <a onClick={()=> {
                        navigate('/thietbi');
                    }}>Danh sách thiết bị</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Separator>
                    <img src={`${Image.separator}`}/>
                  </Breadcrumb.Separator>
                  <Breadcrumb.Item>
                    <span>Chi tiết thiết bị</span>
                  </Breadcrumb.Item>
                </>
              ) : (
                <>
                  <Breadcrumb.Item>Thiết bị</Breadcrumb.Item>
                  <Breadcrumb.Item>
    
                  </Breadcrumb.Item>
                </>
              )}
              {/* {pathnames.map((name,index)=> {
                const routeTo = `${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                  <Breadcrumb.Item>{name}</Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item>
                    <Link to={`${routeTo}`}>{name}</Link>
                  </Breadcrumb.Item>
                )
              })} */}
            </Breadcrumb>
          </div>
        )
      }

  return (
    <div>

        <div className='thietBi__breadcrumb'>
            {breadCrumbView()}
        </div>
        <div className='thietBi__content'>
            <h3 className='thietBi__content-heading'>
            Quản lý thiết bị
            </h3>
            <div className='thietBi__content-about'>
                <h3 className='content__about-heading'>
                    Thông tin chi tiết
                </h3>
                <div className='content__about-list'>
                    <div className='content__about-item'>
                        <div className='about__info-list'>
                            <div className='about__info-item'>
                                <p>Mã thiết bị:</p>
                                <span>KIO_01</span>
                            </div>
                            <div className='about__info-item'>
                                <p>Tên thiết bị:</p>
                                <span>kiosk</span>
                            </div>
                            <div className='about__info-item'>
                                <p>Địa chỉ IP:</p>
                                <span>128.127.308</span>
                            </div>
                        </div>
                    </div>
                    <div className='content__about-item'>
                        <div className='about__info-list'>
                            <div className='about__info-item'>
                                <p>Loại thiết bị</p>
                                <span>Kiosk</span>
                            </div>
                            <div className='about__info-item'>
                                <p>Tài khoản</p>
                                <span>KIO_01</span>
                            </div>
                            <div className='about__info-item'>
                                <p>Mật khẩu</p>
                                <span>SMS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p style={{color: '##282739', fontWeight: '600', marginBottom: '8px'}}>Dịch vụ sử dụng:</p>
                </div>
                <div>
                    <p style={{color: '#535261'}}>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</p>
                </div>
            </div>
        </div>

        <div className='thietBi__capNhat' onClick={()=> {
            navigate('/thietbi/capNhatThietBi');
        }}>
            <img src={`${Image.edit}`}/>
            <span>Cập nhật thiết bị</span>
        </div>
    </div>
  )
}
