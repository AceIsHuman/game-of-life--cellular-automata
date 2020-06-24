import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core';

import { VerticalContainer, SubTitle } from '../../Reusables';
import SmallCross from '../../../assets/presets/small_cross.jpg';
import presets from './';

function Presets(props) {
  const [selection, setSelection] = useState(presets["preset1"]);

  useEffect(() => {
    props.setCurrentGen(selection);
  }, [props, selection]);

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
    </VerticalContainer>
  );
}

const Preset = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Image = styled('img')({
  maxWidth: '100px',
  maxHeight: '100px',
  marginRight: '1rem',
});

export default Presets;
