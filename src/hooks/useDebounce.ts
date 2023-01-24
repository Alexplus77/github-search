import { useEffect, useState } from "react";

const useDebounce = (value: string): [string] => {
  const [data, setData] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setData(value);
    }, 3000);
    return () => clearInterval(id);
  }, [value]);

  return [data];
};
export default useDebounce;
