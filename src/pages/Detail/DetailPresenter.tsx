import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import date from 'utils/date';
import innerHtml from 'utils/innerHtml';
import { DetailType } from 'types';

interface Props {
  results: DetailType;
}

const DetailPresenter = ({ results }: Props) => {
  console.log(results);
  const navigate = useNavigate();
  return (
    <Container>
      <Wapper>
        <div onClick={() => navigate(-1)}>back</div>
        <Title>{results.title}</Title>
        <InfoBox>
          <Writer>
            <By>by </By>
            {results.by}
          </Writer>
          <Created>{date(results.time)}</Created>
        </InfoBox>
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
  display: flex;
  flex-direction: column;
  gap: 1vh;
  margin-top: 5vh;
  color: ${props => props.theme.textColor};
`;

const Title = styled.span`
  font-size: 2.7vh;
  font-weight: 600;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  opacity: 0.6;
  font-weight: 600;
`;

const By = styled.span`
  font-weight: 300;
`;

const Writer = styled.span`
  font-size: 1.6vh;
`;

const Created = styled.span`
  font-size: 1.4vh;
`;

const Content = styled.div`
  font-size: 2.3vh;
  font-weight: 400;
`;
