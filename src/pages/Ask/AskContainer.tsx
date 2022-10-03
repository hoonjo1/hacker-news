import React from 'react';
import { useList, useItems } from 'hooks';

import AskPresenter from './AskPresenter';

const AskContainer = () => {
  const idArray = useList();
  const {
    items: { results, loading },
    isLastPage,
    handleLoadmore,
  } = useItems(idArray);
  console.log(loading);

  return (
    <AskPresenter
      results={results}
      loading={loading}
      isLastPage={isLastPage}
      handleLoadmore={handleLoadmore}
    />
  );
};

export default AskContainer;
