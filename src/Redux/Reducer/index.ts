import { combineReducers } from "redux";
import taiKhoanReducer from "./taiKhoanReducer";
import thietBiReducer from "./thietBiReducer";

const reducers = combineReducers({
    taiKhoan: taiKhoanReducer,
    thietBi: thietBiReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;