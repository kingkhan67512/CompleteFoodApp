import { useState, useEffect } from "react";

const GetAPI = (url) =>{

    const [data, setData] = useState();

    useEffect(()=>{
        getList();
    },[])

const getList = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      // console.log('JSON is =====',json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  };

  return {data}
}

export default GetAPI;
