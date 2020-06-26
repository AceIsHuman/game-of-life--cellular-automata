import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core';

import { VerticalContainer, SubTitle } from '../../Reusables';
import SmallCross from '../../../assets/presets/small_cross.jpg';
import SmallFace from '../../../assets/presets/small_face.jpg';
import presets from './';

function Presets(props) {
  const { setCurrentGen } = props;
  const [selection, setSelection] = useState(presets['preset1']);

  useEffect(() => {
    setCurrentGen(selection);
  }, [setCurrentGen, selection]);

  const handleClick = (e) => {
    const userSelection = presets[e.currentTarget.dataset.preset];
    setSelection(userSelection);
  };

  return (
    <VerticalContainer style={{ justifyContent: 'center' }}>
      <Preset onClick={(e) => handleClick(e)} data-preset='preset1'>
        <Image src={SmallCross} alt='preset-1_small-cross' />
        <SubTitle>Preset 1</SubTitle>
      </Preset>
      <Preset onClick={(e) => handleClick(e)} data-preset='preset2'>
        <Image src={SmallFace} alt='preset-2_small-face' />
        <SubTitle>Preset 2</SubTitle>
      </Preset>
    </VerticalContainer>
  );
}

const Preset = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  marginBottom: '1rem',
  padding: '0.5rem',
  borderRadius: '0.2rem',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const Image = styled('img')({
  maxWidth: '100px',
  maxHeight: '100px',
  marginRight: '1rem',
});

export default Presets;
