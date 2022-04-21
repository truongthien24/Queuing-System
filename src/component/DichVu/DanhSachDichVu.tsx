import React, { Fragment, useEffect, useState } from 'react';
import { Breadcrumb, DatePicker } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Image } from '../../Util/variableImage';
import { Select } from 'antd';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import moment from 'moment';
// import * as Data from '../../data/dichVuData.json';



const data = [
    {
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "loaiDichVu": "Kiosk",
        "tenDangNhap": "Linhkyo011",
        "Mật khẩu": "CMS",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",
        "key": 0
    },
    {
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",
        "key": 1,
    },
    {
        "key": 2,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",
    },
    {
      "key": 3,
      "maDichVu": "KIO_01",
      "tenDichVu": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
      "moTa": "Đang hoạt động",

    },
    {
      "key": 4,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {
      "key": 5,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {
      "key": 6,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {
      "key": 7,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {
      "key": 8,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {    
      "key": 9,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {    
      "key": 10,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {    
      "key": 11,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "key": 0,
        "moTa": "Đang hoạt động",

    },
    {
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "key": 1,
        "moTa": "Đang hoạt động",

    },
    {
        "key": 2,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {
      "key": 3,
      "maDichVu": "KIO_01",
      "tenDichVu": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
      "moTa": "Đang hoạt động",

    },
    {
      "key": 4,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {
      "key": 5,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {
      "key": 6,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {
      "key": 7,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {
      "key": 8,
        "maDichVu": "KIO_01",
        "tenDichVu": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
    {    
      "key": 9,
        "maDichVu": "KIO_01",
        "tenThietBi": "Kiosk",
        "diaChi": "192.168.1.10",
        "trangThaiHD": "Ngưng hoạt động",
        "trangThaiKN": "Mất kết nối",
        "dichVu": "Khám tim mạch, Khám Sản - Phụ Khoa, Khám răng hàm mặt. Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
        "moTa": "Đang hoạt động",

    },
  ];
  const { Option } = Select;
  
  const { Search } = Input;


export const DanhSachDichVu = () => {
    // const [chiTiet, setChiTiet] = useState(false);

    const location = useLocation();
  
    const navigate = useNavigate();

    const [startValue,setStartValue] = useState<any>(null);
    const [endValue,setEndValue] = useState<any>(null);
    const [endOpen,setEndOpen] = useState<boolean>(false);

    const date = new Date();

    const dateFormat = 'DD/MM/YYYY';

    const { RangePicker } = DatePicker;

  
    const columns = [
  
      {
        title: 'Mã dịch vụ',
        dataIndex: 'maDichVu',
        width: 150,
      },
      {
        title: 'Tên dịch vụ',
        dataIndex: 'tenDichVu',
        width: 224,
      },
      {
        title: 'Mô tả',
        dataIndex: 'moTa',
        width: 230,
      },
      {
        title: 'Trạng thái hoạt động',
        dataIndex: 'trangThaiHD',
        width: 253,
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
        title: ' ',
        dataIndex: 'Chi tiết',
        width: 125,
        render: () => {
          return (
            <button onClick={()=> {
              navigate('/dichVu/chiTietDichVu');
            }}>
              Chi tiết
            </button>
          )
        }
      },
      {
        title: ' ',
        dataIndex: 'Cập nhật',
        width: 125,
        render: () => {
          return (
            <button onClick={()=> {
                navigate('/dichVu/capNhatDichVu');
              }}>
                Cập nhật
              </button>
          )
        }
      }
    
    ];

    console.log((current:any) => current.isBefore(moment().subtract(1,"day")));

    const handleChangeSelect = (event:any) => {
        console.log(`select ${event}`);
      }

    const disabledStartDate = (startValue:any) => {
        // const day = (current:any) => current.isBefore(moment().subtract(1,"day"));
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() > endValue.valueOf();
      };
    
    const  disabledEndDate = (endValue:any) => {
        if (!endValue || !(startValue - 1)) {
          return false;
        } else if(!startValue) {
          return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
      };
    
    const onStartChange = (value:any) => {
        setStartValue(value);
        console.log(value);
      };
    
    const onEndChange = (value:any) => {
        setEndValue(value);
        console.log(value)
      };
    
    const handleStartOpenChange = (open:any) => {
        if (!open) {
        setEndOpen(true);
        }
      };
    
    const handleEndOpenChange = (open:any) => {
        setEndOpen(open);
      };
    
    const onChange = (value:any) => console.log(value.target.value);

    function onOk(value:any) {
        console.log('onOk: ', value);
    }

    const breadCrumbView = () => {
        const {pathname} = location;
        const pathnames = pathname.split('/').filter((item) => item);
        return (
          <div>
            <Breadcrumb separator=''>
              {pathnames.length > 0 ? (
                <>
                  <Breadcrumb.Item>Dịch vụ</Breadcrumb.Item>
                  <Breadcrumb.Separator>
                    <img src={`${Image.separator}`}/>
                  </Breadcrumb.Separator>
                  <Breadcrumb.Item>Danh sách dịch vụ</Breadcrumb.Item>
                </>
              ) : (
                <>
                  <Breadcrumb.Item>Dịch vụ</Breadcrumb.Item>
                  <Breadcrumb.Item>
    
                  </Breadcrumb.Item>
                </>
              )}
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

            <div className='dichVu__breadcrumb'>
                {breadCrumbView()}
            </div>
            <div className='dichVu__content'>
                <h3 className='dichVu__content-heading'>
                Danh sách dịch vụ
                </h3>
                <div className='dichVu__content-menu'>
                    <div className='dichVu__content-list dichVu__content-option'>
                        <div className='dichVu__content-item'>
                            <span>Trạng thái hoạt động</span>
                            <Select defaultValue="Tất cả" style={{ width: 120 }} onChange={handleChangeSelect} className='dichVu__content-select' autoFocus={false} suffixIcon={<img src={Image.select}/>}>
                                <Option value="Tất cả">Tất cả</Option>
                                <Option value="Hoạt động">Hoạt động</Option>
                                <Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
                            </Select>
                        </div>
                        <div className='dichVu__content-item'>
                            <span>Chọn thời gian</span>
                            <div>
                                <DatePicker
                                    disabledDate={(current) => current.isBefore(moment().subtract(1,"day"))}
                                    value={startValue}
                                    placeholder={`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                                    onChange={onStartChange}
                                    format={dateFormat}
                                    onOpenChange={handleStartOpenChange}    
                                    suffixIcon={<img src={`${Image.date}`}/>}
                                    superNextIcon={<></>}
                                    superPrevIcon={<></>}
                                />
                                <img src={`${Image.separatorDate}`} className="ant-picker-img"/>
                                <DatePicker
                                    disabledDate={disabledEndDate}
                                    value={endValue}
                                    placeholder={`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                                    format={dateFormat}
                                    suffixIcon={<img src={`${Image.date}`}/>}
                                    onChange={onEndChange}
                                    open={endOpen}
                                    onOpenChange={handleEndOpenChange}
                                    superNextIcon={<></>}
                                    superPrevIcon={<></>}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='dichVu__content-list dichVu__content-search'>
                        <div className='dichVu__content-item'>
                            <span>Từ khóa</span>
                            <Input
                                placeholder="Nhập từ khóa"
                                // allowClear
                                onChange={onChange}
                                style={{ width: 304 }}
                                suffix={<img src={`${Image.search}`} 
                                className='dichVu__content-input'
                                />}
                            />
                        </div>
                    </div>
                </div>
                <div className='dichVu__content-table'>
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
            <div className='dichVu__adddichVu' onClick={()=>{
                navigate('/dichVu/themdichVu');
            }}>
                <img src={`${Image.create}`}/>
                <span>Thêm dịch vụ</span>
            </div>
    </div>
        
    )
}

