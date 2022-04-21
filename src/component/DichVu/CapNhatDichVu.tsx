import { Breadcrumb, Checkbox } from 'antd';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '../../Util/variableImage';

export const CapNhatDichVu = () => {

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
              <Breadcrumb.Item>Thiết bị</Breadcrumb.Item>
              <Breadcrumb.Separator>
                <img src={`${Image.separator}`}/>
              </Breadcrumb.Separator>
              <Breadcrumb.Item>
                <a onClick={()=> {
                    navigate('/dichvu');
                }}>Danh sách dịch vụ</a>
              </Breadcrumb.Item>
              <Breadcrumb.Separator>
                <img src={`${Image.separator}`}/>
              </Breadcrumb.Separator>
              <Breadcrumb.Item>
                <a onClick={()=> {
                    navigate('/dichvu/chiTietDichVu');
                }}>Chi tiết</a>
              </Breadcrumb.Item>
              <Breadcrumb.Separator>
                <img src={`${Image.separator}`}/>
              </Breadcrumb.Separator>
              <Breadcrumb.Item>
                <span>Cập nhật</span>
              </Breadcrumb.Item>
            </>
          ) : (
            <>
              <Breadcrumb.Item>Thiết bị</Breadcrumb.Item>
              <Breadcrumb.Item>

              </Breadcrumb.Item>
            </>
          )}
        </Breadcrumb>
      </div>
    )
  }

    // Checkbox
    function onChange(e:any) {
      console.log(`checked = ${e.target.checked}`);
    }
  return (
    <div>
        <div className='dichVu__breadcrumb'>
          {breadCrumbView()}
        </div>
        <div className='dichVu__content'>
            <h3 className='dichVu__content-heading'>
            Quản lý dịch vụ
            </h3>
            <form className='dichVu__content-update'>
                <div className='content__update-top'>
                  <div className='content__update-list'>
                    <div className='content__update-item'>
                      <h3 className='content__update-heading'>
                        Thông tin dịch vụ
                      </h3>
                      <div className='content__update-content'>
                        <div className='content__update-input'>
                          <span className='update__input-title'>
                            Mã dịch vụ: 
                            <img src={Image.chuY}/>
                          </span>
                          <input placeholder='201' className='update__input-input'/>
                        </div>
                        <div className='content__update-input moTa'>
                          <span className='update__input-title'>
                            Mô tả: 
                          </span>
                          <textarea placeholder='Mô tả dịch vụ' className='update__input-input'/>
                        </div>
                        <div className='content__update-input'>
                          <span className='update__input-title'>
                            Tên dịch vụ: 
                            <img src={Image.chuY}/>
                          </span>
                          <input placeholder='Khám tim mạch' className='update__input-input'/>
                        </div>
                      </div>
                    </div>
                    <div className='content__update-item'>
                      <h3 className='content__update-heading'>
                        Quy tắc cấp số
                      </h3>
                      <div className='content__update-content check'>
                        <div className='content__update-check'>
                          <div className='content__update-check-left'>
                            <Checkbox onChange={onChange}>
                              <span className='content__update-title'>Tăng tự động từ: 2</span>
                            </Checkbox>
                          </div>
                          <div className='content__update-check-right'>
                            <div className='content__update-check-number'>
                              0001
                            </div>
                            <span>đến</span>
                            <div className='content__update-check-number'>
                              9999
                            </div>
                          </div>
                        </div>
                        <div className='content__update-check'>
                          <div className='content__update-check-left'>
                            <Checkbox onChange={onChange}>
                              <span className='content__update-title'>Prefix: </span>
                            </Checkbox>
                          </div>
                          <div className='content__update-check-right'>
                            <div className='content__update-check-number'>
                              0001
                            </div>
                          </div>
                        </div>
                        <div className='content__update-check'>
                          <div className='content__update-check-left'>
                            <Checkbox onChange={onChange}>
                              <span className='content__update-title'>Surfix: </span>
                            </Checkbox>
                          </div>
                          <div className='content__update-check-right'>
                            <div className='content__update-check-number'>
                              0001
                            </div>
                          </div>
                        </div>
                        <div className='content__update-check'>
                          <div className='content__update-check-left'>
                            <Checkbox onChange={onChange}>
                              <span className='content__update-title'>Reset mỗi ngày</span>
                            </Checkbox>
                          </div>
                        </div>
                        <div className='content__update-check'>
                          <img src={Image.chuY}/>
                          <span>Là trường thông tin bắt buộc</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='content__update-bottom'>
                    <button className='content__update-bottom-button dichVu__cancel' type="button" onClick={()=> {
                        navigate('/dichVu');
                    }}>
                        <span>Hủy bỏ</span>
                    </button>
                    <button className='content__update-bottom-button dichVu__add' type="button">
                        <span>Cập nhật</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
