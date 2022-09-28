import axios from 'axios';
import { BASE_URL_FIREBASE } from './utils';

const fetchList = async (category: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL_FIREBASE}${category}stories.json`
    );
    if (data) {
      return data;
    }
  } catch (error) {
    return { error: '❌ Api Error' };
  }
};

export default fetchList;
