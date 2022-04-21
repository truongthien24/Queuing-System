import React from 'react'
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import { BaoCao } from '../component/BaoCao';
import { Capso } from '../component/Capso';
import { ConfirmEmail } from '../component/ConfirmEmail';
import { Dashboard } from '../component/Dashboard/Dashboard';
import { DashboardDate } from '../component/Dashboard/DashboardDate';
import { DashboardMonth } from '../component/Dashboard/DashboardMonth';
import { DashboardWeek } from '../component/Dashboard/DashboardWeek';
import { CapNhatDichVu } from '../component/DichVu/CapNhatDichVu';
import { ChiTietDichVu } from '../component/DichVu/ChiTietDichVu';
import { DanhSachDichVu } from '../component/DichVu/DanhSachDichVu';
import { Dichvu } from '../component/DichVu/Dichvu';
import { ThemDichVu } from '../component/DichVu/ThemDichVu';
import { Home } from '../component/Home';
import { InnerContext } from '../component/InnerContext';
import { Login } from '../component/Login';
import { Profile } from '../component/Profile';
import { ResetPassword } from '../component/ResetPassword';
import { CapNhatThietBi } from '../component/ThietBi/CapNhatThietBi';
import { ChiTietThietBi } from '../component/ThietBi/ChiTietThietBi';
import { DanhSachThietBi } from '../component/ThietBi/DanhSachThietBi';
import { ThemThietBi } from '../component/ThietBi/ThemThietBi';
import { Thietbi } from '../component/ThietBi/Thietbi';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}>            
            <Route path='profile' element={<Profile/>}/> 
            <Route path='dashboard' element={<Dashboard/>}>
              <Route index element={<DashboardDate/>}/>
              <Route path='dashboardMonth' element={<DashboardMonth/>}/>
              <Route path='dashboardWeek' element={<DashboardWeek/>}/>
            </Route>           
            <Route path='thietbi' element={<Thietbi/>}>
              <Route index element={<DanhSachThietBi/>}/>
              <Route path='themThietBi' element={<ThemThietBi/>}/>
              <Route path='chiTietThietBi' element={<ChiTietThietBi/>}/>
              <Route path='capNhatThietBi' element={<CapNhatThietBi/>}/>
            </Route>           
            <Route path='dichvu' element={<Dichvu/>}>
              <Route index element={<DanhSachDichVu/>}/>  
              <Route path='chiTietDichVu' element={<ChiTietDichVu/>}/>  
              <Route path='capNhatDichVu' element={<CapNhatDichVu/>}/>  
              <Route path='themDichVu' element={<ThemDichVu/>}/>  
            </Route>           
            <Route path='capso' element={<Capso/>}/>           
            <Route path='baocao' element={<BaoCao/>}/>           
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/confirmEmail' element={<ConfirmEmail/>}/>
          <Route path='/resetPassword' element={<ResetPassword/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes;
