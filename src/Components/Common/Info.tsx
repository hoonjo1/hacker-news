import React from 'react';
import styled from 'styled-components';

const Info = ({ by, date }: { by: string; date: string }) => {
  return (
    <InfoBox>
      <Writer>
        <By>by </By>
        {by}
      </Writer>
      <Created>{date}</Created>
    </InfoBox>
  );
};

export default Info;

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
