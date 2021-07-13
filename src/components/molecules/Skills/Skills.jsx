import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StickyHeader from '../Header/StickyHeader';
import Collapse from '@material-ui/core/Collapse';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChipInput from 'material-ui-chip-input';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(2, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Education() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [chips, setChip] = React.useState([]);

  const showEditionalDetails = () => {
    setChecked(prev => !prev);
  };

  const handleChange = (chip, index) => {
    setChip(chip);
  };

  console.log(chips);

  const handleDeleteChip = (chip, index) => {
    chips.filter(item => console.log(item));
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
          value={chips}
          onChange={chips => handleChange(chips)}
          onDelete={(chip, index) => handleDeleteChip(chip, index)}
          fullWidth
        />
      </Box>
    </Box>
  );
}
