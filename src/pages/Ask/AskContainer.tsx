import React from 'react';
import { Loader } from 'Components/Common';
import { useList } from 'hooks';

const AskContainer = () => {
  const { results } = useList('ask');
  console.log(results);
  return <div>123</div>;
};

export default AskContainer;
