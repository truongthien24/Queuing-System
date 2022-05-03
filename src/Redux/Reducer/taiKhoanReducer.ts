import { createReducer } from "@reduxjs/toolkit";
import { ActionProps } from "../Action/taiKhoanAction";

let usAccount = null;

if(localStorage.getItem('userLogin')) {
    usAccount = JSON.parse(localStorage.getItem('userLogin') || "");
}


const initialState = {
    taiKhoanData: {},
    taiKhoanInfo: {},
    statusLogin: false,
    taiKhoanList: [],
    userLogin: usAccount
};

const taiKhoanReducer = (state:any = initialState, action:ActionProps) => {
    switch(action.type) {
        case 'LOAD_DATA': {
            state.taiKhoanData = action.payload;
            state.taiKhoanList = state.taiKhoanData.docs.map((doc:any)=> ({...doc.data(), id: doc.id}))
            console.log('Tài khoản data', state.taiKhoanList);
            return {...state};
        };
        break;
        case 'LAY_DU_LIEU': {   
            console.log('heelo',state.taiKhoanData);
            const realData = state.taiKhoanData.docs.filter((doc:any)=> (doc._document.key.path.segments[6] === action.payload));
            state.taiKhoanInfo = realData;
            return {...state};
        };
        break;
        case 'DANG_NHAP': {
            const result = state.taiKhoanList.filter((item: any) => (item.tenDangNhap === action.payload.tenDangNhap && item.matKhau === action.payload.matKhau));
            console.log(result)
            if(result[0].tenDangNhap !== undefined) {
                state.statusLogin = true;
                localStorage.setItem('accessToken', result[0].id);
                localStorage.setItem('userLogin',JSON.stringify(result));
            }
            console.log(state.statusLogin);
            return {...state};
        }
        break;
        default: return state;
    }
}

// const taiKhoanReducer = createReducer(0, {

// })

export default taiKhoanReducer;