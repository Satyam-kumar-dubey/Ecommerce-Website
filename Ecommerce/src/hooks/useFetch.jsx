import { useEffect , useState } from "react";
import {FetchDataFromApi} from '../Utils/Api'

const useFetch = (endpoint) => {
    const[data , setData] = useState();

    useEffect(()=>{
        makeApiCalls();
    },[endpoint]);

    const makeApiCalls = async()=> {
        const res = await FetchDataFromApi(endpoint);
        setData(res);
    }

    return { data };
};

export default useFetch;