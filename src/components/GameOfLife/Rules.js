import React from 'react';
import { styled } from '@material-ui/core/styles';

import { SubTitle } from '../Reusables/';

function Rules() {
  return (
    <Container>
      <SubTitle>Rules:</SubTitle>
      <ul>
        <li>
          An alive cell will continue to live if it has 2 or 3 live neighbors.
        </li>
        <li>
          Likewise, and alive cell will die if it has less than 2, or more than
          3 live neighbors.
        </li>
        <li>A cell will come alive when it has exactly 3 neighbors.</li>
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
