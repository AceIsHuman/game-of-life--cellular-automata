import React from 'react';
import { styled } from '@material-ui/core/styles';
import GameOfLife from './components/GameOfLife/GameOfLife';

function App() {
  return (
    <Wrapper maxWidth='lg'>
      <Title>Conway's Game of Life</Title>
      <GameOfLife />
    </Wrapper>
  );
}

const Wrapper = styled('div')({
  backgroundColor: '#202020',
  height: '100vh',
  width: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
});

const Title = styled('h1')({
  color: '#EEEEEE',
});

export default App;
