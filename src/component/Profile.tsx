import React, { useEffect, useState } from 'react'

export const Profile = () => {

  const [bgUser, setBgUser] = useState('./img/user.png');

  return (
    <div className='profile'> 
      <h5 className='profile__heading'>Thông tin cá nhân</h5>
      <div className='profile__content'>
          <div className='profile__content-left'>
            <div className='content__left-img' style={{backgroundImage: `url(${bgUser})`}}>
              <div className='content__left-img-camera'>
                <img src='./img/mayanh.png'/>
              </div>
            </div>
            <p className='content__left-txt'>Lê Quỳnh Ái Vân</p>
          </div>
          <div className='profile__content-right'>
              <div className='profile__content-item'>
                  <h5 className='profile__content-title'>
                    Tên người dùng
                  </h5>
                  <input placeholder='Lê Quỳnh Ái Vân' disabled className='profile__content-input'/>
              </div>
              <div className='profile__content-item'>
                  <h5 className='profile__content-title'>
                    Tên đăng nhập
                  </h5>
                  <input placeholder='lequynhaivan01' disabled className='profile__content-input'/>
              </div>
              <div className='profile__content-item'>
                  <h5 className='profile__content-title'>
                    Số điện thoại
                  </h5>
                  <input placeholder='0767375921' disabled className='profile__content-input'/>
              </div>
              <div className='profile__content-item'>
                  <h5 className='profile__content-title'>
                    Mật khẩu
                  </h5>
                  <input placeholder='311940211' disabled className='profile__content-input'/>
              </div>
              <div className='profile__content-item'>
                  <h5 className='profile__content-title'>
                    Email:
                  </h5>
                  <input placeholder='adminSSO1@domain.com' disabled className='profile__content-input'/>
              </div>
              <div className='profile__content-item'>
                  <h5 className='profile__content-title'>
                    Vai trò:
                  </h5>
                  <input placeholder='Kế toán' disabled className='profile__content-input'/>
              </div>
          </div>
      </div>
    </div>
  )
}
