import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Slide from '@material-ui/core/Slide';

function DisplayOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="left" in={trigger}>
      {children}
    </Slide>
  );
}

const useStyles = (theme) => ({
    root: {
        top: 'auto',
        bottom: 0, 
        display:'block'
    },
    menuButton: {
      marginRight: theme.spacing(1),
      textAlign: 'center'
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
    noDisplay:{
      display: 'none'
    }
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
               <DisplayOnScroll {...this.props}>
            <AppBar position="fixed" className={classes.root}>
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="menu" 
                   onClick={(e)=>this.handleProfile('github')}>
                  <GitHubIcon />
                </IconButton>
                <IconButton className={classes.menuButton} color="inherit" aria-label="menu"
                    onClick={(e)=>this.handleProfile('linkedin')}>
                  <LinkedInIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
            </DisplayOnScroll>
          </div>
        )
    }
}

export default withStyles(useStyles)(AboutMe);