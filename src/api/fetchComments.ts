import axios from 'axios';
import { BASE_URL_FIREBASE } from './utils';

const fetchComments = async (idArray: number[]) => {
  const fetch = async (id: number, depth = 0) => {
    const { data } = await axios.get(`${BASE_URL_FIREBASE}/item/${id}/.json`);
    if (data?.kids) {
      return {
        ...data,
        depth,
        kids: await Promise.all(
          data.kids.map((kidsComment: number) => fetch(kidsComment, depth + 1))
        ),
      };
    }
    if (data) {
      return { ...data, depth };
    }
    return { deleted: '❌ Deleted Comment' };
  };
  return await Promise.all(idArray.map(firstComment => fetch(firstComment)));
};

export default fetchComments;
