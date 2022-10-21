import React from 'react';
import { useList, useItems } from 'hooks';
import { Loader } from 'Components/Common';

import AskPresenter from './AskPresenter';

const AskContainer = () => {
  const idArray = useList();
  const {
    items: { results, loading },
    isLastPage,
    handleLoadmore,
  } = useItems(idArray);
  console.log(loading);

  return loading && results.length === 0 ? (
    <Loader />
  ) : (
    <AskPresenter
      results={results}
      loading={loading}
      isLastPage={isLastPage}
      handleLoadmore={handleLoadmore}
    />
  );
};

export default AskContainer;
