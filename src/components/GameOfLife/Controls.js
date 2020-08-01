import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

function Controls(props) {
  const [speedIndex, setSpeedIndex] = useState(0);
  const speeds = [1, 2, 4, 8];
  const clearGrid = () => {
    props.setPlaying(false);
    props.setGenCount(1);
    props.setCurrentGen(
      props.currentGen.map((row) => {
        return row.map((cell) => {
          cell.isAlive = false;
          return cell;
        });
      })
    );
  };

  const toggleSpeed = () => {
    let nextIndex = speedIndex + 1;
    if (nextIndex >= speeds.length) {
      nextIndex = 0;
    }
    setSpeedIndex(nextIndex);
    props.setSpeed(1 / speeds[nextIndex]);
  };

  return (
    <Container
      container
      direction='row'
      justify='space-evenly'
      alignItems='center'
    >
      <Grid item>
        <StyledButton
          variant='contained'
          color='primary'
          onClick={() => props.setPlaying(true)}
          disabled={props.playing && true}
        >
          Play
        </StyledButton>
      </Grid>
      <Grid item>
        <StyledButton
          variant='contained'
          color='primary'
          onClick={() => props.setPlaying(false)}
          disabled={!props.playing && true}
        >
          Pause
        </StyledButton>
      </Grid>
      <Grid item>
        <StyledButton variant='contained' color='secondary' onClick={clearGrid}>
          Clear Grid
        </StyledButton>
      </Grid>
      <Grid item>
        <StyledButton variant='contained' onClick={toggleSpeed} style={{}}>
          Speed x{speeds[speedIndex]}
        </StyledButton>
      </Grid>
    </Container>
  );
}

const Container = styled(Grid)({
  margin: '1rem 0',
});

const StyledButton = styled(Button)({
  textTransform: 'none',
});

export default Controls;
