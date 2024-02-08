import { useState, useEffect } from "react";

const useFakeDatabase = (key) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      localStorage.setItem(key, JSON.stringify([]));
      setData([]);
    }
  }, [key]);

  const updateData = (newData) => {
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData));
  };

  return [data, updateData];
};

export default useFakeDatabase;
