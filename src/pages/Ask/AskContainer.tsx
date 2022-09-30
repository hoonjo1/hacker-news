import React from 'react';
import { Loader } from 'Components/Common';
import { useFetch } from 'hooks';
import location from 'utils/location';

import AskPresenter from './AskPresenter';

const AskContainer = () => {
  const { results, loading } = useFetch(location());

  return loading && results.length === 0 ? (
    <Loader />
  ) : (
    <AskPresenter results={results} />
  );
};

export default AskContainer;
