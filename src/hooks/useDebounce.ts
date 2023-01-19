import {useEffect, useState} from "react";

  const useDebounce = (value:string):[string, boolean] => {
  const [data, setData]=useState(value)
const [loading, setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
       const id=setTimeout(()=>{
           setLoading(false)
                      setData(value)
       }, 3000)
        return ()=> clearInterval(id)
    },[value])

    return  [data, loading]
}
export default useDebounce