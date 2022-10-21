import React from 'react';
import styled from 'styled-components';
import { Loader } from 'Components/Common';
import useTest from 'hooks/useTest';

const TopContainer = () => {
  const { results, loading } = useTest();
  console.log(results);
  return (
    <Container>
      {loading || results.length === 0 ? (
        <Loader />
      ) : (
        <div>
          {results.map(x => (
            <>
              <p key={x.name}>{x.name}</p>
              {x.test.map(c => (
                <p key={c}>{c}</p>
              ))}
            </>
          ))}
        </div>
      )}
    </Container>
  );
};

export default TopContainer;

const Container = styled.div`
  width: 100%;
  height: 79vh;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;
`;
