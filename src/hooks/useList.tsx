import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchList } from 'api';

const useList = () => {
  const { pathname } = useLocation();
  const [idArray, setIdArray] = useState([]);
  const response = async () => {
    try {
      const data = await fetchList(pathname.split('/')[1]);
      setIdArray(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      response();
    };
  }, []);

  return idArray;
};

export default useList;
