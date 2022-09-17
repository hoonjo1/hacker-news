import React from 'react';
import styled from 'styled-components';
import { urlRegex } from 'utils/regex';

const Card = () => {
  const url = 'https://readme.com/careers#product-lea';
  const converted = url.replace(urlRegex, '').split('/')[0];
  return (
    <Container>
      <Main>
        <Title>
          Generally Intelligent (YC S17) Is Hiring Remote Machine Learning
          Engineer
        </Title>
        <By>BY. kanjun</By>
      </Main>
      <Footer>
        <Url>{converted}</Url>
      </Footer>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  border-radius: 25px;
  background-color: ${props => props.theme.cardColor};
  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15%;
  padding: 10px 20px 10px 20px;
  border-top: 1px solid ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`;

const Title = styled.span`
  color: ${props => props.theme.textColor};
  font-size: 15px;
  font-weight: 700;
`;

const By = styled.span`
  color: ${props => props.theme.textColor};
  font-size: 10px;
  font-weight: 700;
`;

const Url = styled.a`
  color: ${props => props.theme.textColor};
  font-size: 5px;
  font-weight: 700;
`;
