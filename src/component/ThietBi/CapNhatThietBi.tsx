import { Breadcrumb, Select } from 'antd';
import React, { Fragment } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '../../Util/variableImage';
import {Formik, useFormik, FormikProps, Form, Field} from 'formik';

interface formikFace {
    maThietBi: string,
    loaiThietBi: string,
    tenThietBi: string,
    tenDangNhap: string,
    diaChi: string,
    matKhau: string,
    dichVuSuDung: string[],
}

export const CapNhatThietBi = () => {

    const { Option } = Select;

    const navigate = useNavigate();

    const location = useLocation();

    const initialValues: formikFace = {
        maThietBi: 'KIO_01',
        loaiThietBi: 'Kiosk',
        tenThietBi: 'Kiosk',
        tenDangNhap: 'Linhkyo011',
        diaChi: '128.172.308',
        matKhau: 'CMS',
        dichVuSuDung: ['Khám tim mạch'],
    }

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
        }
    })

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
                    <span>Cập nhật thiết bị</span>
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

  return (
    <Fragment>
        <div className='thietBi__breadcrumb'>
            {breadCrumbView()}
        </div>
        <div className='thietBi__content'>
            <h3 className='thietBi__content-heading'>
            Quản lý thiết bị
            </h3>
            <form className='thietBi__content-update'>
                <div className='content__update-top'>
                    <h3 className='content__update-heading'>
                        Thông tin thiết bị
                    </h3>   
                    <div className='content__update-list'>
                        <div className='content__update-item'>
                            <div className='content__update-label'>
                                <span>Mã thiết bị: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <input className='content__update-input' value={formik.values.maThietBi} name="maThietBi" onChange={formik.handleChange}/>
                        </div>
                        <div className='content__update-item'>
                            <div className='content__update-label'>
                                <span>Loại thiết bị: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            {/* <input className='content__update-input' value={formik.values.loaiThietBi} name="loaiThietBi" onChange={formik.handleChange}/> */}
                            <Select
                                labelInValue
                                defaultValue={{ value: `${formik.values.loaiThietBi}` }}
                                style={{ width: 120 }}
                                onChange={formik.handleChange}
                                suffixIcon={<img src={`${Image.select}`}/>}
                                className="content__update-item-select"
                            >
                                <Option value="Kiosk">Kiosk</Option>
                                <Option value="Display counter">Display counter</Option>
                            </Select>
                        </div>
                        <div className='content__update-item'>
                            <div className='content__update-label'>
                                <span>Tên thiết bị: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <input className='content__update-input' value={formik.values.tenThietBi} name="tenThietBi" onChange={formik.handleChange}/>
                        </div>
                        <div className='content__update-item'>
                            <div className='content__update-label'>
                                <span>Tên đăng nhập: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <input className='content__update-input' value={formik.values.tenDangNhap} name="tenDangNhap" onChange={formik.handleChange}/>
                        </div>
                        <div className='content__update-item'>
                            <div className='content__update-label'>
                                <span>Địa chỉ IP: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <input className='content__update-input' value={formik.values.diaChi} name="diaChi" onChange={formik.handleChange}/>
                        </div>
                        <div className='content__update-item'>
                            <div className='content__update-label'>
                                <span>Mật khẩu: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <input className='content__update-input' value={formik.values.matKhau} name="matKhau" onChange={formik.handleChange}/>
                        </div>
                        <div className='content__update-item'>
                            <div className='content__update-label'>
                                <span>Dịch vụ sử dụng: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="select one country"
                                defaultValue={[`${formik.values.dichVuSuDung}`]}
                                onChange={formik.handleChange}
                                optionLabelProp="label"
                            >
                                <Option value="All" label="Tất cả">
                                    <div className="demo-option-label-item">
                                        Tất cả
                                    </div>
                                </Option>
                                <Option value="Khám tim mạch" label="Khám tim mạch">
                                    <div className="demo-option-label-item">
                                        Khám tim mạch
                                    </div>
                                </Option>
                                <Option value="Khám sản phụ khoa" label="Khám sản phụ khoa">
                                    <div className="demo-option-label-item">
                                        Khám sản phụ khoa
                                    </div>
                                </Option>
                                <Option value="Khám răng hàm mặt" label="Khám răng hàm mặt">
                                    <div className="demo-option-label-item">
                                        Khám răng hàm mặt
                                    </div>
                                </Option>
                                <Option value="Khám tai mũi họng" label="Khám tai mũi họng">
                                    <div className="demo-option-label-item">
                                        Khám tai mũi họng
                                    </div>
                                </Option>
                                <Option value="Khám hô hấp" label="Khám hô hấp">
                                    <div className="demo-option-label-item">
                                        Khám hô hấp
                                    </div>
                                </Option>
                                <Option value="Khám tổng quát" label="Khám tổng quát">
                                    <div className="demo-option-label-item">
                                        Khám tổng quát
                                    </div>
                                </Option>
                            </Select>
                        </div>
                    </div>
                    <div className='content__update-warning'>
                        <img src={`${Image.chuY}`}/>
                        <span>Là trường thông tin bắt buộc</span>
                    </div>
                </div>
                <div className='content__update-bottom'>
                    <button type='button' className='content__update-btn-cancel' onClick={()=> {
                        navigate('/thietbi');
                    }}>Hủy bỏ</button>
                    <button type='button' className='content__update-btn-update'>Cập nhật</button>
                </div>
            </form>  
        </div>
    </Fragment>
  )
}
