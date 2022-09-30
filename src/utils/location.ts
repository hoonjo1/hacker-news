import { useLocation } from 'react-router-dom';

const location = () => {
  const { pathname } = useLocation();
  return pathname.split('/')[1];
};

export default location;
