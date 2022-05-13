import { useState, useCallback } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setisShow] = useState(true);

  const handleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((prevcount) => prevcount + 1);
      }
    },
    [count]
  );

  const handleDisplay = useCallback(() => {
    setisShow((previsShow) => !previsShow);
    console.log("aa");
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
