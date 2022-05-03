import { combineReducers } from "redux";
import capSoReducer from "./capSoReducer";
import dichVuReducer from "./dichVuReducer";
import taiKhoanReducer from "./taiKhoanReducer";
import thietBiReducer from "./thietBiReducer";

const reducers = combineReducers({
    taiKhoan: taiKhoanReducer,
    thietBi: thietBiReducer,
    dichVu: dichVuReducer,
    capSo: capSoReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;