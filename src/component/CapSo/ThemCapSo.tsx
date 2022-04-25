import { Breadcrumb, Modal, Select } from 'antd';
import React, { Fragment, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '../../Util/variableImage';

const {Option} = Select;

export const ThemCapSo = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

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
                    <span>Cấp số</span>
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

    const handleChangeSelect = (event:any) => {
        console.log(`select ${event}`);
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
                <div className='capSo__content-container'>
                    <h5 className='content__container-heading'>
                        Cấp số mới
                    </h5>
                    <form className='content__container-form'>
                        <div className='content__container-form-top'>
                            <p className='form__top-title'>Dịch vụ khách hàng lựa chọn</p>
                            <Select defaultValue="Tất cả" style={{ width: 400 }} onChange={handleChangeSelect} className='form__top-select' autoFocus={false} suffixIcon={<img src={Image.select}/>} placeholder='Chọn dịch vụ'>
                                  <Option value="Tất cả">Tất cả</Option>
                                  <Option value="Hoạt động">Đang chờ</Option>
                                  <Option value="Ngưng hoạt động">Đã sử dụng</Option>
                                  <Option value="Ngưng hoạt động">Bỏ qua</Option>
                            </Select>
                        </div>
                        <div className='content__container-form-bottom'>
                            <button type='button' className='form__bottom-btn-cancel' onClick={()=> {
                                navigate('/capSo');
                            }}>
                                Hủy bỏ
                            </button>
                            <button className='form__bottom-btn-print' type='button'  onClick={showModal}>In số</button>
                        </div>
                    </form>
                </div>
            </div>
            <Modal title={<Fragment>
                <h3>Số thứ tự được cấp</h3>
                <p className='modal__capSo-number'>2001201</p>
                <p className='modal__capSo-info'>
                    DV: Khám răng hàm mặt 
                    <span> (tại quầy số 1)</span>
                </p>
            </Fragment>} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='modal__capSo'>
                <p>Thời gian cấp: 09:30 11/10/2021</p>
                <p>Hạn sử dụng: 17:30 11/10/2021</p>
            </Modal>
        </div>
    )
}
