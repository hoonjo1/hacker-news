import React from 'react';
import AskPresenter from './AskPresenter';
import { Loader } from 'Components/Common';
import { useList, useItems, useTest } from 'hooks';
import { fetchItems } from 'api';

const AskContainer = () => {
  const idArray = useList();
  const a = useTest(idArray.slice(0, 4));

  // return loading && results.length === 0 ? (
  //   <Loader />
  // ) : (
  //   <AskPresenter results={results} />
  // );

  return (
    <div>
      {idArray.map(x => (
        <div key={x}>{x}</div>
      ))}
    </div>
  );
};

export default AskContainer;
