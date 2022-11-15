import React from 'react';
import { Loader, NotItem } from 'Components/Common';
import { useDetail } from 'hooks';

import DetailPresenter from './DetailPresenter';
import CommentContainer from 'Components/Comment';

const DetailContainer = () => {
  const { results, loading } = useDetail();

  return loading ? (
    <Loader />
  ) : (
    <>
      <DetailPresenter results={results} />
      {results.kids ? (
        <CommentContainer comments={results.kids} />
      ) : (
        <NotItem />
      )}
    </>
  );
};

export default DetailContainer;
