import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = (theme) => ({
    root: {
        top: 'auto',
        bottom: 0, 
    },
    menuButton: {
      marginRight: theme.spacing(1),
      textAlign: 'center'
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
  });

class AboutMe extends React.Component{

   constructor(props){
   super()
   }

   handleProfile = (profile) =>{
     if(profile === 'github'){
           window.open('https://github.com/devappsms')
     }
     else if (profile === 'linkedin'){
           window.open('https://www.linkedin.com/in/mohendren')
     }
   }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root} color='primary'>
            <AppBar position="static">
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="menu" 
                   onClick={this.handleProfile('github')}>
                  <GitHubIcon />
                </IconButton>
                <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
                    onClick={this.handleProfile('linkedin')}>
                  <LinkedInIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
          </div>
        )
    }
}

export default withStyles(useStyles)(AboutMe);