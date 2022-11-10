import React from 'react';
import { Loader } from 'Components/Common';
import { useDetail } from 'hooks';

import DetailPresenter from './DetailPresenter';

const DetailContainer = () => {
  const { results, loading } = useDetail();

  return loading ? <Loader /> : <DetailPresenter results={results} />;
};

export default DetailContainer;
