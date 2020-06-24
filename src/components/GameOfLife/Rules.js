import React from 'react';
import { styled } from '@material-ui/core/styles';

import { SubTitle } from '../Reusables/';

function Rules() {
  return (
    <Container>
      <SubTitle>Rules:</SubTitle>
      <ul>
        <li>Ut commodo Lorem in id elit laborum exercitation mollit.</li>
        <li>Officia ad ad tempor proident minim deserunt.</li>
        <li>
          Magna duis eiusmod et aliqua consequat cupidatat velit excepteur
          adipisicing sit mollit Lorem esse.
        </li>
        <li>
          Ullamco officia anim nulla amet cupidatat aute cillum aliqua officia
          aliqua.
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
