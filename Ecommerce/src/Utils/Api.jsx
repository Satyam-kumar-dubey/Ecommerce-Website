import axios from 'axios';

const params ={

    headers: {
        Authorization: "bearer" + "5c113744048e57137b735947fbccb0d8b98d0db0c0b2d3891bf70c2dca1a3cc720b17546370d14ede6541c236de325d96e29908217159f958d1b60ab5e1125e5438db57e228c31d90c57fae64d61084c8747a93668c35be9d9e4150148c8217322fec13a1a6edc8070573d6aefa957400a4223f0c9b4fe59419b3b9b06d46caa" ,
    },

    
};



export const FetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get(
            import.meta.env.VITE_ADMIN_URL + url ,
            params ,
            
        );
        return data;
    } catch (error) {
        console.log(error); 
        return error;
        
    }
};

export const makePaymentRequest = axios.create({
    baseURL: import.meta.env.VITE_ADMIN_URL ,
    headers: {
        Authorization: "bearer" + "5c113744048e57137b735947fbccb0d8b98d0db0c0b2d3891bf70c2dca1a3cc720b17546370d14ede6541c236de325d96e29908217159f958d1b60ab5e1125e5438db57e228c31d90c57fae64d61084c8747a93668c35be9d9e4150148c8217322fec13a1a6edc8070573d6aefa957400a4223f0c9b4fe59419b3b9b06d46caa" ,
    },
})
