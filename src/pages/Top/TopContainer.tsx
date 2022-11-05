import React from 'react';
import { useList, useItems } from 'hooks';
import { Loader } from 'Components/Common';

import TopPresenter from './TopPresenter';

const TopContainer = () => {
  const idArray = useList();
  const {
    items: { results, loading },
    isLastPage,
    handleLoadmore,
  } = useItems(idArray);

  return loading && results.length === 0 ? (
    <Loader />
  ) : (
    <TopPresenter
      results={results}
      loading={loading}
      isLastPage={isLastPage}
      handleLoadmore={handleLoadmore}
    />
  );
};

export default TopContainer;
