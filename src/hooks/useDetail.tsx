import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetail } from 'api';
import { ItemType } from 'types';

const initializeState: { results: ItemType[]; loading: boolean } = {
  results: [],
  loading: true,
};

const useDetail = () => {
  const { id } = useParams();
  const [items, setItems] = useState(initializeState);

  const response = async () => {
    if (id) {
      try {
        const data = await fetchDetail(id);
        setItems(() => ({
          results: data,
          loading: false,
        }));
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    response();
    () => {
      return;
    };
  }, []);

  return items;
};

export default useDetail;
