import React from 'react';
import { useList, useItems } from 'hooks';

import ShowPresenter from './ShowPresenter';

const AskContainer = () => {
  const idArray = useList();
  const {
    items: { results, loading },
    isLastPage,
    handleLoadmore,
  } = useItems(idArray);
  console.log(loading);

  return (
    <ShowPresenter
      results={results}
      loading={loading}
      isLastPage={isLastPage}
      handleLoadmore={handleLoadmore}
    />
  );
};

export default AskContainer;
