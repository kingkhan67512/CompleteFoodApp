import { useState,useEffect } from "react";

const GetAPICustomHook = (url) =>{

    const [data, setData] = useState();

    useEffect(()=>{
        getProducts();
    },[])

const getProducts = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json)
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  };

  return {data}

}

export default GetAPICustomHook