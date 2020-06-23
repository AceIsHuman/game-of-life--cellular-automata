import React from 'react';
import { styled } from '@material-ui/core/styles';

function About() {
  return (
    <Container>
      <Title>About this Algorithm:</Title>
      <Text>
        Aliquip qui esse non ad non. Exercitation fugiat ex ea deserunt
        voluptate eiusmod consectetur cupidatat laborum. Amet do irure laboris
        consectetur consequat. Ullamco nostrud excepteur ipsum nulla cillum
        tempor culpa deserunt. Dolor ex dolore id nulla. Elit nulla laborum
        commodo et.
      </Text>
    </Container>
  );
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Title = styled('h3')({
  color: '#EEEEEE',
});

const Text = styled('p')({
  marginBottom: '1rem',
});

export default About;
