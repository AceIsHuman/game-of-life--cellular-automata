import React from 'react';
import { styled } from '@material-ui/core/styles';
import { SubTitle } from '../../Reusables';

function Preset(props) {
  const { event, preset, image, image_alt, title, playing } = props;

  const Container = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: playing ? null : 'pointer',
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '0.2rem',
    '&:hover': {
      backgroundColor: playing ? null : 'rgba(255, 255, 255, 0.1)',
    },
  });

  const Image = styled('img')({
    maxWidth: '100px',
    maxHeight: '100px',
    marginRight: '1rem',
  });
  
  return (
    <Container onClick={(e) => event(e)} data-preset={preset ? preset : null}>
      <Image src={image} alt={image_alt} />
      <SubTitle>{title}</SubTitle>
    </Container>
  );
}

export default Preset;
