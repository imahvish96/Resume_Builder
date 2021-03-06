import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles(theme => ({
  resumefooter: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '60%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  template: {
    width: '45%',
  },
  downloadbtn: {
    width: '50%',
    alignItems: 'flex-end',
  },
}));

const options = ['Export to DOCX', 'Download PDF', 'Export to TXT'];

export default function ResumeFooter() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <div className={classes.resumefooter}>
        <div className={classes.footer}>
          <div className={classes.template}>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
              startIcon={<i class='fas fa-th-large'></i>}
              fullWidth>
              Select Template
            </Button>
          </div>
          <div className={classes.downloadbtn}>
            <Grid item xs={12}>
              <ButtonGroup
                variant='contained'
                color='primary'
                ref={anchorRef}
                aria-label='split button'
                style={{ width: '100%' }}>
                <Button onClick={handleClick} style={{ width: '100%' }}>
                  Download PDF
                </Button>
                <Button
                  color='primary'
                  size='small'
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label='select merge strategy'
                  aria-haspopup='menu'
                  onClick={handleToggle}>
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}>
                    <Paper style={{ marginLeft: '80px' }}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id='split-button-menu'>
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              disabled={index === 2}
                              selected={index === selectedIndex}
                              onClick={event =>
                                handleMenuItemClick(event, index)
                              }>
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
