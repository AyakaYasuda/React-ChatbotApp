import React from 'react';
// import { makeStyles, createStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';

const Answer = props => {
  return (
    <Button
      sx={{
        width: '100%',
        borderColor: '#FFB549',
        color: '#FFB549',
        textTransform: 'none',
        fontSize: '12px',
        fontWeight: 600,
        marginBottom: '8px',
        '&:hover': {
          borderColor: '#FFB549',
          backgroundColor: '#FFB549',
          color: '#fff',
        },
      }}
      variant='outlined'
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
