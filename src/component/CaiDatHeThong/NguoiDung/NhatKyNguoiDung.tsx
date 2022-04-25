import { Breadcrumb, DatePicker, Input, Table } from 'antd';
import moment from 'moment';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '../../../Util/variableImage';

const data = [
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@13",
    "hoTen":"Nguyễn Văn B",
    "sdt":"0919256745",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Ngưng hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Ngưng hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Ngưng hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Ngưng hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Ngưng hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Ngưng hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Ngưng hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Ngưng hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Ngưng hoạt động",
  },
  {
    "tenDangNhap":"tuyetnguyen@12",
    "hoTen":"Nguyễn Văn A",
    "sdt":"0919256712",
    "email":"tuyetnguyen123@gmail.com",
    "vaiTro":"Kế toán",
    "trangThaiHD":"Hoạt động",
  }
];

export const NhatKyNguoiDung = () => {

  const [startValue,setStartValue] = useState<any>(null);
  const [endValue,setEndValue] = useState<any>(null);
  const [endOpen,setEndOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const date = new Date();

  const dateFormat = 'DD/MM/YYYY';


  const columns = [

    {
        title: 'Tên đăng nhập',
        dataIndex: 'tenDangNhap',
        width: 266,
    },
    {
        title: 'Thời gian tác động',
        dataIndex: 'hoTen',
        width: 240,
    },
    {
        title: 'IP thực hiện',
        dataIndex: 'sdt',
        width: 216,
    },
    {
        title: 'Thao tác thực hiện',
        dataIndex: 'email',
        width: 386,
    },
  ];

  const breadCrumbView = () => {
    const {pathname} = location;
    const pathnames = pathname.split('/').filter((item) => item);
    return (
        <div>
          <Breadcrumb separator=''>
            {pathnames.length > 0 ? (
              <>
                <Breadcrumb.Item>Cài đặt hệ thống</Breadcrumb.Item>
                <Breadcrumb.Separator>
                  <img src={`${Image.separator}`}/>
                </Breadcrumb.Separator>
                <Breadcrumb.Item>Nhật ký hoạt động</Breadcrumb.Item>
              </>
            ) : (
              <>
                <Breadcrumb.Item>Cài đặt hệ thống</Breadcrumb.Item>
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

  const handleChangeSelect = (event:any) => {
    console.log(`select ${event}`);
  }

const disabledStartDate = (startValue:any) => {
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

  const onChange = (e:any) => {
    console.log(e);
  }
  return (
    <div className='nguoiDung'>
      <div className='nguoiDung__breadcrumb'>
        {breadCrumbView()}
      </div>
      <div className='nguoiDung__content'>
        <div className='nguoiDung__content-top'>
          <div className='nguoiDung__content-top-list'>
            <div className='nguoiDung__content-top-item'>
              <h5 className='nguoiDung__content-top-heading'>
                  Chọn thời gian
              </h5>
              <div className='nguoiDung__content-top-select'>
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
            <div className='nguoiDung__content-top-item'>
              <h5 className='nguoiDung__content-top-heading'>
                  Từ khóa
              </h5>
              <div className='nguoiDung__content-top-select'>
                <Input
                  placeholder="Nhập từ khóa"
                  // allowClear
                  onChange={onChange}
                  style={{ width: 240 }}
                  suffix={<img src={`${Image.search}`} 
                  className='capSo__content-input'
                />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='nguoiDung__content-bottom'>
            <div className='nguoiDung__content-bottom-table'>
                <Table
                    dataSource={data}
                    columns={columns}
                    size="small"
                    pagination={{ pageSize: 10, itemRender:itemRender }}
                    bordered
                >
                </Table>
            </div>
        </div>
      </div>
    </div>
  )
}
