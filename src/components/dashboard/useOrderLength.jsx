import { useState, useEffect } from "react";
import axios from "../login/axios";

export const useOrderLength = (dataUrl) => { 
    const [dataLength, setDataLength] = useState(null);

    const fetchData= async ()=> {
          const result = await axios.get(`/${dataUrl}`)
        
        if (result && result.data) setDataLength(result.data.length);
        
      }



    useEffect(() => {
        fetchData();
    });
    
    return {dataLength}
}