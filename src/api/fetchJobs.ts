import axios from 'axios';
import { BASE_URL } from './utils';

const fetchJobs = async () => {
  const { data } = await axios.get(`${BASE_URL}jobs/1.json`);
  if (data) {
    return data;
  }
};

export default fetchJobs;
