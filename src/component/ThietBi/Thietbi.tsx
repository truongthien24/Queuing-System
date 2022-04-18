import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Image } from '../../Util/variableImage';
import { Select } from 'antd';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import * as Data from '../../data/ThietBiData.json';
 
type ItemProps = {
  maThietBi: string,
  tenThietBi: string,
  diaChi: string,
  trangThaiHD: string,
  trangThaiKN: string,
  dichVu: string,
}

const data = [
  {
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng",
      "key": 0
  },
  {
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng",
      "key": 1,
  },
  {
      "key": 2,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 3,
    "maThietBi": "KIO_01",
    "tenThietBi": "Kiosk",
    "diaChi": "192.168.1.10",
    "trangThaiHD": "Ngưng hoạt động",
    "trangThaiKN": "Kết nối",
    "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 4,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 5,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 6,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 7,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 8,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {    
    "key": 9,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {    
    "key": 10,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {    
    "key": 11,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng",
      "key": 0
  },
  {
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng",
      "key": 1,
  },
  {
      "key": 2,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 3,
    "maThietBi": "KIO_01",
    "tenThietBi": "Kiosk",
    "diaChi": "192.168.1.10",
    "trangThaiHD": "Ngưng hoạt động",
    "trangThaiKN": "Kết nối",
    "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 4,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 5,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 6,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 7,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {
    "key": 8,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
  {    
    "key": 9,
      "maThietBi": "KIO_01",
      "tenThietBi": "Kiosk",
      "diaChi": "192.168.1.10",
      "trangThaiHD": "Ngưng hoạt động",
      "trangThaiKN": "Mất kết nối",
      "dichVu": "Khám tim mạch, khám mắt, khám tai mũi họng"
  },
];

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
  },
  {
    title: ' ',
    dataIndex: 'Chi tiết',
    render: () => {
      return (
        <span>Chi tiết</span>
      )
    }
  },
  {
    title: ' ',
    dataIndex: 'Cập nhật',
    render: () => {
      return (
        <span>Cập nhật</span>
      )
    }
  }

];

const { Option } = Select;

const { Search } = Input;

export const Thietbi = () => {

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

  const handleChangeSelect = (event:any) => {
    console.log(`select ${event}`);
  }

  const onChange = (value:any) => console.log(value.target.value);



  return (
    <div className='thietBi'>
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
            pagination={{ pageSize: 9 }}
            bordered
          >
          </Table>
        </div>
      </div>
    </div>
  )
}
