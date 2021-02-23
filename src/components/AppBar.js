import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DepaulLogo from '../static/Depaul.png';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      maxWidth: 40,
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Arial',
      color: '#ffffff',
      paddingBottom: '23px',
      paddingTop: '10px',
      fontSize: '27px'
    },
  }));
  
  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root} >
        <AppBar style={{background: '#444444', paddingBottom:'5px'}} position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img src={DepaulLogo} alt="logo" className={classes.logo} />
            </IconButton>
            <hr width=".05" size="45" style={{marginRight:'9px', color:'gray', backgroundColor:'gray'}}></hr>
            <Typography variant="h5" className={classes.title}>
              Depaul University COVID-19 Dashboard Home Page
            </Typography>
            <Button color="inherit" href="https://www.depaul.edu/Pages/default.aspx">Depaul Home</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }