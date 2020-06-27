import React from 'react';
import { styled } from '@material-ui/core/styles';

import { SubTitle } from '../Reusables/';

function Rules() {
  return (
    <Container>
      <SubTitle>Rules:</SubTitle>
      <ul>
        <li>Alive cells are represented by colored squares on the grid.</li>
        <li>
          If an alive cell has either 2 or 3 live neighbors, the cell will
          continue to live in the next generation.
        </li>
        <li>
          If an alive cell does not meet that criteria, it will die in the next
          generation.
        </li>
        <li>
          The only way for a dead cell to come alive, is if it has exactly three
          neighbor cells that are alive.
        </li>
      </ul>
    </Container>
  );
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '20rem',
});

export default Rules;
