
import { useEffect, useState } from 'react';

const UseAPI = () => {

    const [data, setData] = useState([]);

    const getProducts = async () => {
        try {
          const response = await fetch('https://simple-grocery-store-api.online/products');
          const json = await response.json();
          console.log(json)
          setData(json);
        } catch (error) {
          console.error(error);
        } finally {
          // setLoading(false);
        }
      };
      
      useEffect(()=>{
        console.log('useEffect []');
        getProducts();
      },[])

      return {data}
}

export default UseAPI;
