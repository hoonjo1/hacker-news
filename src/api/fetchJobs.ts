import axios from 'axios';
import { BASE_URL } from './utils';

const fetchJobs = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}jobs/1.json`);
    if (data) {
      return data;
    }
  } catch (error) {
    return { error: '❌ Api Error' };
  }
};

export default fetchJobs;
