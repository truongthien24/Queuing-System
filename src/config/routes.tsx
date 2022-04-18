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
import { Dichvu } from '../component/Dichvu';
import { Home } from '../component/Home';
import { InnerContext } from '../component/InnerContext';
import { Login } from '../component/Login';
import { Profile } from '../component/Profile';
import { ResetPassword } from '../component/ResetPassword';
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
              <Route path='themThietBi' element={<ThemThietBi/>}/>
            </Route>           
            <Route path='dichvu' element={<Dichvu/>}/>           
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
