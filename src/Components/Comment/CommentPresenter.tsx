import React from 'react';
import styled from 'styled-components';
import { date, innerHtml } from 'utils';
import { CommentType } from 'types';
import { Info } from 'Components/Common';

const CommentPresenter = ({ results }: { results: CommentType[] }) => {
  return (
    <Container>
      {results.map(comment => (
        <Wapper key={comment.text} depth={comment.depth}>
          <Info by={comment.by} date={date(comment.time)} />
          <Content dangerouslySetInnerHTML={innerHtml(comment.text)}></Content>
          {comment.kids &&
            comment.kids.map(reComment => (
              <Wapper key={reComment.text} depth={comment.depth}>
                <Info by={reComment.by} date={date(reComment.time)} />
                <div dangerouslySetInnerHTML={innerHtml(reComment.text)} />
              </Wapper>
            ))}
        </Wapper>
      ))}
    </Container>
  );
};

export default CommentPresenter;

interface Wapper {
  depth: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;
const Wapper = styled.div<Wapper>`
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  padding: 1.3513513vh 2.7027027vh;
  color: ${props => props.theme.textColor};
  margin-left: ${({ depth }) => `${depth * 30}px`};
  border-bottom: 2px solid ${props => props.theme.borderColor};
  :nth-child(1) {
    border-bottom: none;
  }
`;

const Content = styled.div`
  line-height: 1.4em;
`;
