import axios from 'axios';
import { BASE_URL_FIREBASE } from './utils';

const fetchItems = async (idArray: number[]) => {
  const data = await Promise.all(
    idArray.map(async id => {
      const { data } = await axios.get(`${BASE_URL_FIREBASE}item/${id}.json`);
      return data;
    })
  );
  return data;
};

export default fetchItems;
