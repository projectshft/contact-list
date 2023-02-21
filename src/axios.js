import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url)
    .then(response => {
      Object.keys(response.data).forEach(function(key) {
        const needData = response.data[key]
        setData(needData)
        console.log(key, response.data[key])
      })
    })
    .catch(function (error)  {
      console.log(error.message);
    })
  }, [])

  

  return {data};
}
 
export default useAxios;