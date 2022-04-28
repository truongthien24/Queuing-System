import { createReducer } from "@reduxjs/toolkit";
import { ActionProps } from "../Action/taiKhoanAction";

const initialState = {
    taiKhoanData: {},
    taiKhoanInfo: {}
};

const taiKhoanReducer = (state:any = initialState, action:ActionProps) => {
    switch(action.type) {
        case 'LOAD_DATA': {
            state.taiKhoanData = action.payload;
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
        default: return state;
    }
}

// const taiKhoanReducer = createReducer(0, {

// })

export default taiKhoanReducer;