import React from 'react';
import { Loader } from 'Components/Common';
import { useFetch } from 'hooks';
import { location } from 'utils';

import JobPresenter from './JobsPresenter';

const JobContainer = () => {
  const { results, loading } = useFetch(location());

  return loading && results.length === 0 ? (
    <Loader />
  ) : (
    <JobPresenter results={results} />
  );
};

export default JobContainer;
