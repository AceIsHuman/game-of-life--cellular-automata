import { styled } from '@material-ui/core';

export const VerticalContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '1rem',
  [theme.breakpoints.down('md')]: {
    marginRight: '0',
  },
}));

export const SubTitle = styled('h3')({
  color: '#EEEEEE',
});
