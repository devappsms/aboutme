import React from 'react';
import './App.css';
import { MuiThemeProvider,  createMuiTheme  } from '@material-ui/core/styles';

import CssBaseline from "@material-ui/core/CssBaseline";
import AboutMe from "./components/AboutMe/AboutMe"


const theme = createMuiTheme({
  palette:{
    // background: {
    //   default:  'yellow'
    // }
  },
  paper: {
    background: 'blue'
  }
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AboutMe/>
    </MuiThemeProvider>
  );
}

export default App;
