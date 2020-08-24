import React from "react";
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import appConstants from "../constants/appConstants";

import About from "../me/About"
import WorkExperience from "../Work/Experience";
import Service from "../service/Services"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  tab:{
     background: 'linear-gradient(to right, #9068be , #6ed3cf)',
    // color: 'white'
  },
  panelTab:{
    background: theme.palette.background.default,
    textAlign:'center',
    marginLeft: "auto",
    marginRight: "auto",
    height: '100%'
  }
});

class Content extends React.Component {

  constructor(props) {
    super();
    this.state = {
      value: 0
    }
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper square>
          <Tabs
            value={this.state.value}
            variant="fullWidth"
            scrollButtons="auto"            
            onChange={this.handleChange}
            className={classes.tab}
          >
            {
              appConstants.tabTiles.map((value, index) =>{
                return <Tab label={value} />
              } )
            }
          </Tabs>
        </Paper>
        <TabPanel value={this.state.value} index={0} className={classes.panelTab}>
          <About/>
        </TabPanel>
        <TabPanel value={this.state.value} index={1} className={classes.panelTab}>
          <WorkExperience/>
        </TabPanel>
        <TabPanel value={this.state.value} index={2} className={classes.panelTab}> 
          <Service/>
        </TabPanel>
      </div>
    )
  }
}

export default withStyles(useStyles)(Content);