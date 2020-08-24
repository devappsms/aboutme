import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';
import Content from "../content/Content";
import Footer from "../footer/Footer";
import man from "../../images/man-profile.jpg";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
     background: theme.palette.background.paper
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
});

const ThemeContext = React.createContext('light');
class AboutMe extends React.Component {

  constructor(props) {
    super();
    this.state={
      anchorEl : null,
    }
  }

  ThemeContext = React.createContext('light');

  handleSelected = (value) =>{
    this.setState({anchorEl: null })
    this.props.changeTheme()
  }

  handleClick = (e) =>{
    this.setState({anchorEl: e.currentTarget })
  }
  render() {
    const { classes } = this.props;
    console.log(this.state)
    return (
      <div>
        <div className={classes.root} >
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
               onClick={this.handleClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleSelected}>Light Theme</MenuItem>
                <MenuItem onClick={this.handleSelected}>Dark Theme</MenuItem>
              </Menu> */}
              <Typography variant="h6" className={classes.title}>
                Mohendren Manickam
                </Typography>
              <Avatar alt="Mohendren" src={man}></Avatar>
            </Toolbar>
          </AppBar>
        </div>
        <Content />
        <Footer />
      </div>
    )
  }
}

export default withStyles(useStyles)(AboutMe);