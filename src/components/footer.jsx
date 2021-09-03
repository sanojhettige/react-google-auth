import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container style={{minHeight: 40, background: '#CCC', bottom: 0, position: 'fixed'}}>

                Footer
            </Grid>
        </div>
    );
};


export default Footer;