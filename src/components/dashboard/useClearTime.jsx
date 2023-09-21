import {useEffect } from "react";
import axios from "../login/axios";

export const useClearTime = (data) => { 

    const fetchData = async () => {
        try {
            await axios.put(`/updata/cleartime`, {data})
        }
        catch (error) {
            console.error("Error fetching data:", error);
          }
      }

    useEffect(() => {
        fetchData();
    });
}