import React from 'react';
import AskPresenter from './AskPresenter';
import { Loader } from 'Components/Common';
import { useList, useItems } from 'hooks';

const AskContainer = () => {
  const idArray = useList();
  const { results, loading } = useItems(idArray.slice(0, 4));

  return loading && results.length === 0 ? (
    <Loader />
  ) : (
    <AskPresenter results={results} />
  );
};

export default AskContainer;
