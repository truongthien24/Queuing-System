import React, { useEffect, useState } from 'react';
import { Menu} from 'antd';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
  } from '@ant-design/icons';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../image/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../Redux';

  const { SubMenu } = Menu;

export const Home = () => {

    const dispatch = useDispatch;

    const {userLogin} = useSelector((state: State) => state.taiKhoan);
    
    const [imageProfile, setImageProfile] = useState<string>('./img/user.png');

    const [statusNotify, setStatusNotify] = useState<boolean>(false); //false là đóng, true là mở

    const [bgNotify, setBgNotify] = useState<string>('#FFF2E7'); 

    const [colorNotifyBtn, setColorNotifyBtn] = useState<string>('#FF9138');

    const navigate = useNavigate();

    useEffect(() => {
        console.log(imageProfile);
    }, []);

    useEffect(()=> {
        if(statusNotify) {
            setBgNotify('#FF7506');
            setColorNotifyBtn('#fff');
        }else {
            setBgNotify('#FFF2E7');
            setColorNotifyBtn('#FF9138')
        }
    }, [statusNotify]);
  
  return (
    <div className='layout'>
        <div className='home'> 
            <div className='home__left'>
                <Menu
                    style={{ width: 256}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    className='home__menu'
                >
                    <Menu.Item key="link" className="home__menu-logo">
                        <Link to="/">
                            <img src={`${logo}`}/>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="1" icon={<img src='./img/dashboard.png'/>}>
                        <Link to='/dashboard'>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<img src='./img/thietbi.png'/>}>
                        <Link to='/thietbi'>Thiết bị</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<img src='./img/dichvu.png'/>}>
                        <Link to='/dichvu'>Dịch vụ</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<img src='./img/capso.png'/>}>
                        <Link to='/capso'>Cấp số</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<img src='./img/baocao.png'/>}>
                        <Link to='/baocao'>Báo cáo</Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<img src='./img/setting.png'/>}>
                        <span>
                            Cài đặt hệ thống
                            <img src='./img/more.png' className='ant-menu-item-icon' style={{marginLeft: '17px'}}/>
                        </span>
                        <div className='setting__wrap'>
                            <div className='setting__wrap-item' onClick={()=> {
                                navigate('/qlVaiTro');
                            }}>Quản lý vai trò</div>
                            <div className='setting__wrap-item' onClick={()=> {
                                navigate('/qlTaiKhoan');
                            }}>Quản lý tài khoản</div>
                            <div className='setting__wrap-item' onClick={()=> {
                                navigate('/nhatKyNguoiDung');
                            }}>Nhật ký người dùng</div>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="7" className='home__menu-logOut'>
                        <button className='home__menu-logOut-btn'
                        onClick={()=> {
                            localStorage.removeItem('accessToken');
                            localStorage.removeItem('userLogin');
                            window.location.replace('/login');
                        }}>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            <span>Đăng xuất</span>
                        </button>
                    </Menu.Item>
                </Menu>
            </div>
            <div className='home__right'>
                <Outlet/>
            </div>
            <div className='home__profile'>
                <button className='profile__notify-btn' style={{backgroundColor: `${bgNotify}`}} onClick={()=> {
                    setStatusNotify(!statusNotify);
                }}>
                    <i className="fa-solid fa-bell" style={{color: `${colorNotifyBtn}`}}></i>
                </button>
                <div className='profile__content' onClick={()=> {
                    window.location.replace('/profile');
                }}>
                    <div className='profile__img' style={{backgroundImage: `url('${imageProfile}')`, backgroundSize: 'cover'}}/>
                    <div className='profile__txt'>
                        <span>Xin chào</span>
                        {/* <p>Lê Quỳnh Ái Vân</p> */}
                        <p>{userLogin[0].hoTen}</p>
                    </div>
                </div>
                {
                    statusNotify ?
                    <div className='profile__notify'>
                        <div className='profile__notify-heading'>
                            <h3>Thông báo</h3>
                        </div>
                        <div className='profile__notify-content'>
                            <ul className='profile__notify-list'>
                                <li className="profile__notify-item">
                                    <div>
                                        <span>Người dùng: Nguyễn Thị Thùy Dung</span>
                                        <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                    </div>
                                </li>
                                <li className="profile__notify-item">
                                    <div>
                                        <span>Người dùng: Nguyễn Thiên Chinh</span>
                                        <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                    </div>
                                </li>
                                <li className="profile__notify-item">
                                    <div>
                                        <span>Người dùng: Võ Thị Kim Liên</span>
                                        <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                    </div>
                                </li>
                                <li className="profile__notify-item">
                                    <div>
                                        <span>Người dùng: Hoàng Nguyễn Quốc Huy</span>
                                        <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                    </div>
                                </li>
                                <li className="profile__notify-item">
                                    <div>
                                        <span>Người dùng: Võ Ngọc Lan Anh</span>
                                        <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                    </div>
                                </li>
                                <li className="profile__notify-item">
                                    <div>
                                        <span>Người dùng: Nguyễn Thị Trúc Anh</span>
                                        <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                    </div>
                                </li>
                                <li className="profile__notify-item">
                                    <div>
                                        <span>Người dùng: Nguyễn Trung Toàn</span>
                                        <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                    </div>
                                </li>
                                <li className="profile__notify-item">
                                    <div>
                                        <span>Người dùng: Phạm Hồng Ngọc</span>
                                        <p>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                                    </div>
                                </li>
                            </ul>
                        </div>  
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    </div>
  )
}
