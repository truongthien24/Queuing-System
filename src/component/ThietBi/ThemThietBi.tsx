import { Breadcrumb, Select } from 'antd';
import { useFormik } from 'formik';
import React, { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '../../Util/variableImage';

interface formikFace {
  maThietBi: string,
  loaiThietBi: string,
  tenThietBi: string,
  tenDangNhap: string,
  diaChi: string,
  matKhau: string,
  dichVuSuDung: string[],
}

export const ThemThietBi = () => {

    const { Option } = Select;
  
    const location = useLocation();

    const navigate = useNavigate();

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
                  <span>Thêm thiết bị</span>
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
            <form className='thietBi__content-add'>
                <div className='content__add-top'>
                    <h3 className='content__add-heading'>
                        Thông tin thiết bị
                    </h3>   
                    <div className='content__add-list'>
                        <div className='content__add-item'>
                            <div className='content__add-label'>
                                <span>Mã thiết bị: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <input className='content__add-input' name="maThietBi" onChange={formik.handleChange} placeholder="Nhập mã thiết bị"/>
                        </div>
                        <div className='content__add-item'>
                            <div className='content__add-label'>
                                <span>Loại thiết bị: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            {/* <input className='content__add-input' value={formik.values.loaiThietBi} name="loaiThietBi" onChange={formik.handleChange}/> */}
                            <Select
                                labelInValue
                                placeholder="Chọn loại thiết bị"
                                style={{ width: 120 }}
                                onChange={formik.handleChange}
                                suffixIcon={<img src={`${Image.select}`}/>}
                                className="content__add-item-select"
                                // open={true}
                            >
                                <Option value="Kiosk">Kiosk</Option>
                                <Option value="Display counter">Display counter</Option>
                            </Select>
                        </div>
                        <div className='content__add-item'>
                            <div className='content__add-label'>
                                <span>Tên thiết bị: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <input className='content__add-input' name="tenThietBi" onChange={formik.handleChange} placeholder="Nhập tên thiết bị"/>
                        </div>
                        <div className='content__add-item'>
                            <div className='content__add-label'>
                                <span>Tên đăng nhập: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <input className='content__add-input' name="tenDangNhap" onChange={formik.handleChange} placeholder="Nhập tên đăng nhập"/>
                        </div>
                        <div className='content__add-item'>
                            <div className='content__add-label'>
                                <span>Địa chỉ IP: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <input className='content__add-input' name="diaChi" onChange={formik.handleChange} placeholder="Nhập địa chỉ IP"/>
                        </div>
                        <div className='content__add-item'>
                            <div className='content__add-label'>
                                <span>Mật khẩu: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <input className='content__add-input' name="matKhau" onChange={formik.handleChange} placeholder="Nhập mật khẩu"/>
                        </div>
                        <div className='content__add-item'>
                            <div className='content__add-label'>
                                <span>Dịch vụ sử dụng: </span>
                                <img src={`${Image.chuY}`}/>
                            </div>
                            <Select
                                mode="multiple"
                                style={{ width: '100%'}}
                                placeholder="Nhập dịch vụ sử dụng"
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
                    <div className='content__add-warning'>
                        <img src={`${Image.chuY}`}/>
                        <span>Là trường thông tin bắt buộc</span>
                    </div>
                </div>
                <div className='content__add-bottom'>
                    <button type='button' className='content__add-btn-cancel' onClick={()=> {
                        navigate('/thietbi');
                    }}>Hủy bỏ</button>
                    <button type='button' className='content__add-btn-add'>Thêm thiết bị</button>
                </div>
            </form>  
        </div>
    </Fragment>
  )
}
