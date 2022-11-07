import React from 'react';
import { useDetail } from 'hooks';

const DetailContainer = () => {
  const { results, loading } = useDetail();

  console.log(results);
  return <div>123</div>;
};

export default DetailContainer;
