import React from 'react';
import styled from 'styled-components';
import { date, innerHtml } from 'utils';
import { CommentType } from 'types';
import { Info, Error } from 'Components/Common';

const CommentPresenter = ({ results }: { results: CommentType[] }) => {
  const loopComment = (comment: CommentType) => {
    return comment.deleted ? (
      <Error message={'Deleted Comment'} />
    ) : (
      <Wapper key={comment.by + comment.id} depth={comment.depth}>
        <Info by={comment.by} date={date(comment.time)} />
        {comment.text ? (
          <Content dangerouslySetInnerHTML={innerHtml(comment.text)} />
        ) : (
          <Error message={'Dead Comment'} />
        )}
        {comment.kids && comment.kids.map(loopComment)}
      </Wapper>
    );
  };
  return <Container>{results.map(comment => loopComment(comment))}</Container>;
};

export default CommentPresenter;

interface Wapper {
  depth: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  gap: 2vh;
`;
const Wapper = styled.div<Wapper>`
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  padding: 1.3vh 2.7vh;
  color: ${props => props.theme.textColor};
  margin-left: ${({ depth }) => `${depth * 20}px`};
`;

const Content = styled.div`
  padding-bottom: 1vh;
  border-bottom: 2px solid ${props => props.theme.borderColor};
  line-height: 1.4em;
`;
