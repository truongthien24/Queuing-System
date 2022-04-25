import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "redux";
import { ActionProps } from "../Action/taiKhoanAction";
import {db} from '../../firebase/firebase.config';
import { useState } from "react";

//Load dữ liệu
export const LoadDuLieu = () => async (dispatch: Dispatch<ActionProps>) => {

    // const [account, setAccount] = useState<any>([]);

    try {

        const accountCollectionRef = collection(db, 'taiKhoan');
        const data = await getDocs(accountCollectionRef);
        dispatch({
            type: 'LOAD_DATA',
            payload: data
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