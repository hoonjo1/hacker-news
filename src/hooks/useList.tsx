import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchList } from 'api';

const useList = () => {
  const { pathname } = useLocation();

  const [idArray, setIdArray] = useState([]);

  const response = async () => {
    setIdArray(await fetchList(pathname.split('/')[1]));
  };

  useEffect(() => {
    response();
    () => {
      return;
    };
  }, []);

  return idArray;
};

export default useList;
