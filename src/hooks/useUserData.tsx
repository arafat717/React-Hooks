import React, { useEffect, useState } from "react";

const useUserData = () => {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [error, setError] = useState(false);
  const controller = new AbortController();

  const url = "https://jsonplaceholder.typicode.com/users";

  const getData = async () => {
    SetLoading(true);
    try {
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      SetLoading(false);
      setData(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      controller.abort();
    };
  }, []);
  return { loading, data, error };
};

export default useUserData;
