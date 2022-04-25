import { combineReducers } from "redux";
import taiKhoanReducer from "./taiKhoanReducer";

const reducers = combineReducers({
    taiKhoan: taiKhoanReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;