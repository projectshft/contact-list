import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortControl = new AbortController();

    setTimeout(() => {
      axios.get(url)
      .then(response => {
        Object.keys(response.data).forEach(function(key) {
          const needData = response.data[key]
          setData(needData)
        })
      })
      .catch(function(error) {
        console.log(error.message)
      })
    });
    return () => abortControl.abort()
  },[url])

  
  return {data};
}
 
export default useAxios;