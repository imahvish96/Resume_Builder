import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ChipInput from 'material-ui-chip-input';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
}));

export default function Education() {
  const classes = useStyles();
  const [chips, setChip] = React.useState([]);

  const handleAddChip = (chip, index) => {
    setChip([...chips, chip]);
  };

  const handleDeleteChip = (chip, index) => {
    setChip(chips.filter(item => item != chip));
  };

  return (
    <Box mb={5}>
      <Box mb={2}>
        <Typography variant='h6'>
          <strong>Skills</strong>
        </Typography>
      </Box>
      <Box>
        <ChipInput
          label='Skills'
          value={chips}
          onAdd={chip => handleAddChip(chip)}
          onDelete={(chip, index) => handleDeleteChip(chip, index)}
          variant='filled'
          fullWidth
        />
      </Box>
    </Box>
  );
}
