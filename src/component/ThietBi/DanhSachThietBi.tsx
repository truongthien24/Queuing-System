import React, { Fragment, useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Image } from '../../Util/variableImage';
import { Select } from 'antd';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import * as Data from '../../data/ThietBiData.json';



const data = [
    {
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "loaiThietBi": "Kiosk",
        "tenDangNhap": "Linhkyo011",
        "Mật khẩu": "CMS",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "key": 0
    },
    {
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "key": 1,
    },
    {
        "key": 2,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      "key": 3,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
    },
    {
      "key": 4,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
      "key": 5,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
      "key": 6,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
      "key": 7,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
      "key": 8,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {    
      "key": 9,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {    
      "key": 10,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {    
      "key": 11,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "key": 0
    },
    {
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "key": 1,
    },
    {
        "key": 2,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
      "key": 3,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
      "key": 4,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
      "key": 5,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
      "key": 6,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
      "key": 7,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {
      "key": 8,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
    {    
      "key": 9,
        "maThietBi": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát"
    },
  ];
  const { Option } = Select;
  
  const { Search } = Input;

export const DanhSachThietBi = () => {


    // const [chiTiet, setChiTiet] = useState(false);

    const location = useLocation();
  
    const navigate = useNavigate();
  
    // useEffect(()=>{
    //   if(chiTiet) {
    //     navigate('/thietbi/chiTietThietBi');
    //   }else {
    //     navigate('/thietbi');
    //   }
    // },[chiTiet]);
  
    const columns = [
  
      {
        title: 'Mã thiết bị',
        dataIndex: 'maThietBi',
        width: 120,
      },
      {
        title: 'Tên thiết bị',
        dataIndex: 'tenThietBi',
        width: 119,
      },
      {
        title: 'Địa chỉ IP',
        dataIndex: 'diaChi',
        width: 138,
      },
      {
        title: 'Trạng thái hoạt động',
        dataIndex: 'trangThaiHD',
        width: 171,
        render: (dataIndex:string) => {
    
            if(dataIndex === 'Hoạt động') {
                return <div className='d-flex align-items-center' style={{fontSize: '14px'}}>
                  <img src={`${Image.hoatdong}`} style={{marginRight: '4px', transform: 'translateY(-1px)'}}/>
                  {dataIndex}
                </div>
            }
            else {
                return <div className='d-flex align-items-center' style={{fontSize: '14px'}}>
                  <img src={`${Image.ngunghoatdong}`} style={{marginRight: '4px', transform: 'translateY(-1px)'}}/>
                  {dataIndex}
                </div>
            }
          
        }
      },
      {
        title: 'Trạng thái kết nối',
        dataIndex: 'trangThaiKN',
        width: 145,
        render: (dataIndex:string) => {
    
          if(dataIndex === 'Kết nối') {
              return <div className='d-flex align-items-center' style={{fontSize: '14px'}}>
                <img src={`${Image.hoatdong}`} style={{marginRight: '4px', transform: 'translateY(-1px)'}}/>
                {dataIndex}
              </div>
          }
          else {
              return <div className='d-flex align-items-center' style={{fontSize: '14px'}}>
                <img src={`${Image.ngunghoatdong}`} style={{marginRight: '4px', transform: 'translateY(-1px)'}}/>
                {dataIndex}
              </div>
          }
        
        }
      },
      {
        title: 'Dịch vụ sử dụng',
        dataIndex: 'dichVu',
        width: 268,
        render: (dataIndex:string) => {
            return <Fragment>
              <p className='ant-table-cell-content'>{dataIndex}</p>
              <div className='ant-table-cell-more'>
                <button className='more'>Xem thêm</button>
                <div className='ant-table-cell-dichvu'>
                  <p>{dataIndex} </p> 
                </div>     
              </div>
                  
            </Fragment>
        }
      },
      {
        title: ' ',
        dataIndex: 'Chi tiết',
        render: () => {
          return (
            <button onClick={()=> {
              navigate('/thietbi/chiTietThietBi');
            }}>
              Chi tiết
            </button>
          )
        }
      },
      {
        title: ' ',
        dataIndex: 'Cập nhật',
        render: () => {
          return (
            <button onClick={()=> {
                navigate('/thietbi/capNhatThietBi');
              }}>
                Cập nhật
              </button>
          )
        }
      }
    
    ];

    const handleChangeSelect = (event:any) => {
        console.log(`select ${event}`);
      }
    
    const onChange = (value:any) => console.log(value.target.value);

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
                  <Breadcrumb.Item>Danh sách thiết bị</Breadcrumb.Item>
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

      function itemRender(current:any, type:any, originalElement:any) {
        if (type === 'prev') {
          return <a><img src={Image.prev}/></a>;
        } else if (type === 'next') {
          return <a><img src={Image.next}/></a>;
        }
        return originalElement;
      }

  return (
    <div>

        <div className='thietBi__breadcrumb'>
            {breadCrumbView()}
        </div>
        <div className='thietBi__content'>
            <h3 className='thietBi__content-heading'>
            Danh sách thiết bị
            </h3>
            <div className='thietBi__content-menu'>
            <div className='thietBi__content-list thietBi__content-option'>
                <div className='thietBi__content-item'>
                <span>Trạng thái hoạt động</span>
                <Select defaultValue="Tất cả" style={{ width: 120 }} onChange={handleChangeSelect} className='thietBi__content-select' autoFocus={false} suffixIcon={<img src={Image.select}/>}>
                    <Option value="Tất cả">Tất cả</Option>
                    <Option value="Hoạt động">Hoạt động</Option>
                    <Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
                </Select>
                </div>
                <div className='thietBi__content-item'>
                <span>Trạng thái kết nối</span>
                <Select defaultValue="Tất cả" style={{ width: 120 }} onChange={handleChangeSelect} className='thietBi__content-select' autoFocus={false} suffixIcon={<img src={Image.select}/>}>
                    <Option value="Tất cả">Tất cả</Option>
                    <Option value="Kết nối">Kết nối</Option>
                    <Option value="Mất kết nối">Mất kết nối</Option>
                </Select>
                </div>
            </div>
            <div className='thietBi__content-list thietBi__content-search'>
                <div className='thietBi__content-item'>
                <span>Từ khóa</span>
                <Input
                    placeholder="Nhập từ khóa"
                    // allowClear
                    onChange={onChange}
                    style={{ width: 304 }}
                    suffix={<img src={`${Image.search}`} 
                    className='thietBi__content-input'
                    />}
                />
                </div>
            </div>
            </div>
            <div className='thietBi__content-table'>
            <Table
                dataSource={data}
                columns={columns}
                size="small"
                pagination={{ pageSize: 9, itemRender:itemRender }}
                bordered
            >
            </Table>
            </div>
        </div>
        <div className='thietBi__addThietBi' onClick={()=>{
            navigate('/thietbi/themThietBi');
        }}>
            <img src={`${Image.create}`}/>
            <span>Thêm thiết bị</span>
        </div>
    </div>
  )
}
