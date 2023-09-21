import {useEffect,useState } from "react";
import axios from "../login/axios";

export const useAttendance = ({orderNumber}) => { //data=會員編號
    const [attdata, setAttdata] = useState(null)
    const fetchData = async () => {
        try {
            const response = await axios.post("/member/orderdonetime", {orderNumber})
            return setAttdata(response.data.data)
        }
        catch (error) {
            console.error("Error fetching data:", error);
          }
      }
      useEffect(() => {
          fetchData();
        },[]);
        return {attdata}
}