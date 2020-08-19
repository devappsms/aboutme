import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';
import Content from "../content/Content";
const useStyles = (theme) => ({
    root: {
      flexGrow: 1,      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
  });

class AboutMe extends React.Component{

   super(props){

   }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root} color='primary'>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Mohendren Manickam
                </Typography>
                <Avatar alt="Mohendren"></Avatar>
              </Toolbar>
            </AppBar>
            <Content/>
          </div>
        )
    }
}

export default withStyles(useStyles)(AboutMe);