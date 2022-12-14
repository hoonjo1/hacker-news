import axios from 'axios';
import { BASE_URL_FIREBASE } from './utils';

const fetchItems = async (idArray: number[]) => {
  try {
    const data = await Promise.all(
      idArray.map(async id => {
        const { data } = await axios.get(`${BASE_URL_FIREBASE}item/${id}.json`);
        if (data) {
          return data;
        }
      })
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchItems;
