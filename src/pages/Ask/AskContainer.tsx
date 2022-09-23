import React from 'react';
import { Loader } from 'Components/Common';
import { useList } from 'hooks';

const AskContainer = () => {
  const list = useList('ask');
  console.log(list);
  return <div>123</div>;
};

export default AskContainer;
