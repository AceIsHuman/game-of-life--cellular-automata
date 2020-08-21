import React from 'react';
import { styled } from '@material-ui/core/styles';
import { SubTitle } from './Reusables/';
import ExamplePatterns from '../assets/example_patterns';

function About() {
  return (
    <Container>
      <SubTitle style={{ color: '#000000', marginBottom: 0 }}>
        About this Algorithm:
      </SubTitle>
      <Content>
        <Text>
          Check out this classic computer science program replicated using the
          React framework! John Conway's "Game of Life" simulates
          <i>cellular automaton</i> by following a few set of rules for cells on
          a grid. A matrix is created to represent each Cell, it's current
          state, and location on the grid. By using a <code>Cell</code> class,
          each Cell predicts its next generation state by checking all of its
          adjacent neighbors current state. The total number of alive neighbors
          is then placed against the rules of life. This uses double buffering
          to perform the update against a seperate grid before applying the
          changes to the canvas.
        </Text>
        <ExamplePatterns />
      </Content>
    </Container>
  );
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  color: '#333333',
  margin: '3rem 0',
  padding: '0.5rem',
  borderRadius: '0.5rem',
});

const Text = styled('p')(({ theme }) => ({
  maxWidth: '50%',
  fontSize: '1.2rem',
  fontWeight: '500',
  marginBottom: '1rem',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export default About;
