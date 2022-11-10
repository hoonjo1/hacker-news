import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetail } from 'api';
import { DetailType } from 'types';

const initializeState: { results: DetailType; loading: boolean } = {
  results: {
    by: '',
    descendants: 0,
    id: 0,
    kids: [0],
    score: 0,
    text: '',
    time: 0,
    title: '',
    type: '',
    url: '',
  },
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
