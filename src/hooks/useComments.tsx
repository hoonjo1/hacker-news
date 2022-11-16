import { useEffect, useState } from 'react';
import { fetchComments } from 'api';
import { CommentType } from 'types';

const initializeState: { results: CommentType[]; loading: boolean } = {
  results: [],
  loading: true,
};

const useItems = (idArray: number[]) => {
  const [items, setItems] = useState(initializeState);

  const response = async (idArray: number[]) => {
    const data = await fetchComments(idArray);
    console.log(data);
    if (data) {
      setItems(() => ({
        results: [...data],
        loading: false,
      }));
    }
  };

  useEffect(() => {
    response(idArray);
    () => {
      return;
    };
  }, []);

  return items;
};

export default useItems;
