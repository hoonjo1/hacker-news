import React from 'react';
import { useList, useItems } from 'hooks';
import { Loader } from 'Components/Common';

import NewPresenter from './NewPresenter';

const NewContainer = () => {
  const idArray = useList();
  const {
    items: { results, loading },
    isLastPage,
    handleLoadmore,
  } = useItems(idArray);

  return loading && results.length === 0 ? (
    <Loader />
  ) : (
    <NewPresenter
      results={results}
      loading={loading}
      isLastPage={isLastPage}
      handleLoadmore={handleLoadmore}
    />
  );
};

export default NewContainer;
