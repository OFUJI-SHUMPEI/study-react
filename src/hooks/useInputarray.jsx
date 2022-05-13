import { useState, useCallback } from "react";

export const useInputarray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([1.2]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length >= 5) {
      alert("5文字以下にしてください");
      return;
    }
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    return setArray((prevarray) => {
      if (prevarray.some((item) => item === text)) {
        alert("同じアイテムが含まれています");
        return prevarray;
      }

      return [...prevarray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
