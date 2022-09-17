import React, { useState, useEffect } from 'react';
import fetchJobs from 'api/fetchJobs';
import { Type } from 'types';

const initializeState: {
  results: Type[];
  loading: boolean;
} = {
  results: [],
  loading: true,
};

const useFetch = () => {
  const [items, setItems] = useState(initializeState);

  const response = async () => {
    try {
      const data = await fetchJobs();
      setItems(({ results }) => ({
        results: [...results, ...data],
        loading: false,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    response();
  }, []);

  return items;
};

export default useFetch;
