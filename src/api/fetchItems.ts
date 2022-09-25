import axios from 'axios';
import { BASE_URL_FIREBASE } from './utils';

const fetchItem = async (id: number) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL_FIREBASE}/item/${id}/.json?print=pretty`
    );
    if (data) {
      return data;
    }
  } catch (error) {
    return { error: '❌ Api Error' };
  }
};

export default fetchItem;
