import React from 'react';
import { styled } from '@material-ui/core/styles';

function App() {
  return (
    <Wrapper maxWidth='lg'>
      <Title>Conway's Game of Life</Title>
    </Wrapper>
  );
}

const Wrapper = styled('div')({
  backgroundColor: '#202020',
  height: '100vh',
  width: '100%',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
});

const Title = styled('h1')({
  color: '#EEEEEE',
});

export default App;
