import axios from 'axios';
import { BASE_URL_FIREBASE } from './utils';

const fetchDetail = async (id: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL_FIREBASE}item/${id}.json`);
    if (data) {
      return data;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDetail;
