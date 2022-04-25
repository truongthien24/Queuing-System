import { ActionProps } from "../Action/taiKhoanAction";

const initialState = {
    data: {},
    taiKhoanInfo: {}
};

const taiKhoanReducer = (state:any = initialState, action:ActionProps) => {
    switch(action.type) {
        case 'LOAD_DATA': {
            state.data = action.payload;
            return {...state};
        };
        break;
        case 'LAY_DU_LIEU': {
            console.log('heelo',state.data);
            const realData = state.data.docs.filter((doc:any)=> (doc._document.data.value.mapValue.fields.ID.stringValue === action.payload));
            state.taiKhoanInfo = realData;
            console.log(state.taiKhoanInfo);
            return {...state};
        };
        break;
        default: return state;
    }
}

export default taiKhoanReducer;