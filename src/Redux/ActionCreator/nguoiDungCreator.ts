import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "redux";
import { ActionProps } from "../Action/nguoiDungAction";
import {db} from '../../firebase/firebase.config';

//Load dữ liệu
export const LoadDuLieu = () => async (dispatch: Dispatch<ActionProps>) => {

    // const [account, setAccount] = useState<any>([]);

    try {
        const accountCollectionRef = collection(db, 'nhatKyHoatDong');    
        const data1 = await getDocs(accountCollectionRef);
        console.log(data1);
        dispatch({
            type: 'LOAD_DATA',
            payload: data1
        })
    }
    catch(error:any) {
        console.log('Lỗi rồi!')
    }
}


//Lấy dữ liệu   
export const LayDuLieu = (ID:string) => async (dispatch: Dispatch<ActionProps>) => {
    try {
        dispatch({
            type: 'LAY_DU_LIEU',
            payload: `${ID}`
        })
    }
    catch(error:any) {
        console.log('Lỗi rồi!')
    }
}