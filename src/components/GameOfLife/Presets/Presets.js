import React, { useState, useEffect, useCallback } from 'react';
import { Cell } from '../helpers/Cell';

import { VerticalContainer } from '../../Reusables';
import Preset from './Preset';
import SmallCross from '../../../assets/presets/small_cross.jpg';
import SmallFace from '../../../assets/presets/small_face.jpg';
import RocketMan from '../../../assets/presets/rocket_man.jpg';
import Random from '../../../assets/presets/random.jpg';
import presets from './';
import { styled } from '@material-ui/core';
import { fillGrid } from '../helpers/';

function Presets(props) {
  const { playing, setInitialGen, grid } = props;
  const [selection, setSelection] = useState(presets['preset1']);

  const select = useCallback(selection => {
    setInitialGen(selection)
  }, [setInitialGen])
  
  useEffect(() => {
    select(selection);
    fillGrid(grid.ref.current, selection);
  }, [grid.ref, selection]);

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
        const isAlive = Math.round(Math.random());
        return new Cell(xIndex, yIndex, !!isAlive);
      });
    });
    setSelection(random);
  };

  return (
    <PresetContainer>
      <Preset event={handleClick} preset='preset1' image={SmallCross} alt='preset-1_small-cross' title='Preset 1' playing={playing} />
      <Preset event={handleClick} preset='preset2' image={SmallFace} alt='preset-2_small-face' title='Preset 2' playing={playing} />
      <Preset event={handleClick} preset='preset3' image={RocketMan} alt='preset-3_rocket-man' title='Preset 3' playing={playing} />
      <Preset event={generateRandom} image={Random} image_alt='preset-4_random' title='Random' playing={playing} />
    </PresetContainer>
  );
}

const PresetContainer = styled(VerticalContainer)(({theme}) => ({
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    flexFlow: 'row wrap',
  }
}));

export default Presets;
