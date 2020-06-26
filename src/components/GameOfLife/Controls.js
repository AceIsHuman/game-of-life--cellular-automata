import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

function Controls(props) {
  return (
    <Container
      container
      direction='row'
      justify='space-evenly'
      alignItems='center'
    >
      <Grid item>
        <Button
          variant='contained'
          color='primary'
          onClick={() => props.setPlaying(true)}
        >
          Play
        </Button>
      </Grid>
      <Grid item>
        <Button variant='contained' onClick={() => props.setPlaying(false)}>
          Pause
        </Button>
      </Grid>
      <Grid item>
        <Button variant='contained' color='secondary'>
          Stop
        </Button>
      </Grid>
    </Container>
  );
}

const Container = styled(Grid)({
  margin: '1rem 0',
});

export default Controls;
