import React from 'react';
import { styled } from '@material-ui/core/styles';
import GameOfLife from './components/GameOfLife/GameOfLife';
import About from './components/About';

function App() {
  return (
    <Wrapper>
      <Title>Conway's Game of Life</Title>
      <GameOfLife />
      <About />
    </Wrapper>
  );
}

const Wrapper = styled('div')({
  backgroundColor: '#202020',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '0 10rem',
  boxSizing: 'border-box',
});

const Title = styled('h1')({
  color: '#EEEEEE',
});

export default App;
