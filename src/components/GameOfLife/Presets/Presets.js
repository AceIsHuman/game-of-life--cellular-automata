import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core';
import { Cell } from '../helpers/Cell';

import { VerticalContainer, SubTitle } from '../../Reusables';
import SmallCross from '../../../assets/presets/small_cross.jpg';
import SmallFace from '../../../assets/presets/small_face.jpg';
import RocketMan from '../../../assets/presets/rocket_man.jpg';
import Random from '../../../assets/presets/random.jpg';
import presets from './';

function Presets(props) {
  const { setCurrentGen, setGenCount, playing } = props;
  const [selection, setSelection] = useState(presets['preset1']);

  useEffect(() => {
    setCurrentGen(selection);
    setGenCount(1);
  }, [setCurrentGen, setGenCount, selection]);

  const handleClick = (e) => {
    if (playing) return;
    const userSelection = presets[e.currentTarget.dataset.preset];
    setSelection(userSelection);
  };

  const generateRandom = (e) => {
    if (playing) return;
    const columns = new Array(25).fill(0);
    const random = columns.map((column, yIndex) => {
      const row = new Array(25).fill(0);
      return row.map((cell, xIndex) => {
        const isAlive = Math.round(Math.random())
        return new Cell(xIndex, yIndex, !!isAlive);
      });
    });
    setSelection(random);
  };

  const Preset = styled('div')({
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
      <Preset onClick={(e) => handleClick(e)} data-preset='preset3'>
        <Image src={RocketMan} alt='preset-3_rocket-man' />
        <SubTitle>Preset 3</SubTitle>
      </Preset>
      <Preset onClick={(e) => generateRandom(e)}>
        <Image src={Random} alt='preset-3_rocket-man' />
        <SubTitle>Random</SubTitle>
      </Preset>
    </VerticalContainer>
  );
}

const Image = styled('img')({
  maxWidth: '100px',
  maxHeight: '100px',
  marginRight: '1rem',
});

export default Presets;
