import React from 'react';
import './App.css';
import { MuiThemeProvider,  createMuiTheme  } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

import CssBaseline from "@material-ui/core/CssBaseline";
import AboutMe from "./components/AboutMe/AboutMe";
import ThemeContext from "./components/common/ThemeContext";

const breakpoints = createBreakpoints({})

const theme = createMuiTheme({
  background: '#beef00',
  palette:{
     background: {
      default: '#bccbde',
      secondary: "red",
      paper:  'linear-gradient(to right, #9068be , #6ed3cf)'
     },
  },
  paper: {
    background: 'blue'
  },
  typography:{
    h5: {
      fontSize: "1.1rem",
      [breakpoints.down("xs")]: {
        fontSize: "0.5em"
      },
      [breakpoints.down("md")]: {
        fontSize: "1rem"
      },
    }
  }
});

const darkTheme = createMuiTheme({
 palette: {
    type: 'dark',
  },
  typography:{
    h5: {
      fontSize: "1.1rem",
      [breakpoints.down("xs")]: {
        fontSize: "0.5em"
      },
      [breakpoints.down("md")]: {
        fontSize: "1rem"
      },
    }
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === 'dark'
            ? 'light'
            : 'dark',
      }));
    };
  }
  render(){
    return (
      <ThemeContext.Provider value={this.state.theme}>
      <MuiThemeProvider theme={ this.state.theme === 'dark'? darkTheme : theme}>
        <CssBaseline />
        <AboutMe changeTheme={this.toggleTheme}/>
      </MuiThemeProvider>
      </ThemeContext.Provider>
    );
  }
 
}

export default App;
