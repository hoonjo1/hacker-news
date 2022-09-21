import axios from 'axios';
import { BASE_URL } from './utils';

const fetchData = async (category: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${category}/1.json`);
    if (data) {
      return data;
    }
  } catch (error) {
    return { error: '❌ Api Error' };
  }
};

export default fetchData;
