import axios from 'axios';

const fetchTest = async () => {
  try {
    const { data } = await axios.get(`/data/data.json`);
    if (data) {
      return data.data;
    }
  } catch (error) {
    return { error: '❌ Api Error' };
  }
};

export default fetchTest;
