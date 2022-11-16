import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { date, innerHtml } from 'utils';
import { DetailType } from 'types';
import { BackIcon } from 'Components/Icons';
import { Info } from 'Components/Common';

interface Props {
  results: DetailType;
}

const DetailPresenter = ({ results }: Props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wapper>
        <Back onClick={() => navigate(-1)} />
        <Title>{results.title}</Title>
        <Info by={results.by} date={date(results.time)} />
        {results.text && (
          <Content dangerouslySetInnerHTML={innerHtml(results.text)} />
        )}
      </Wapper>
    </Container>
  );
};

export default DetailPresenter;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.bgColor};
`;

const Wapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2vh;
  padding: 20px;
  color: ${props => props.theme.textColor};
  border-bottom: 2px solid ${props => props.theme.borderColor};
`;

const Back = styled(BackIcon)`
  font-size: 3vh;
`;

const Title = styled.span`
  font-size: 2.7vh;
  font-weight: 600;
`;

const Content = styled.div`
  font-size: 2.1vh;
  font-weight: 400;
  line-height: 1.4em;
  opacity: 0.9;
`;
