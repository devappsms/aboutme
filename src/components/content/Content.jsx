import React from "react";
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import GradeIcon from '@material-ui/icons/Grade';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import OpenWithSharpIcon from '@material-ui/icons/OpenWithSharp';

import Qualification from "../qualification/QualificationPage"
import SlideComp from "../slide/Slide"

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
  paper: {
    padding: '6px 16px',
    background: 'linear-gradient(to left bottom, #430089, #82ffa1)',
    color : 'white'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  cardRoot: {
    maxWidth: 500,
  },
  cardMedia: {
    height: 200,
  },
  panelTab:{
    background: theme.palette.background
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
            indicatorColor="primary"
            textColor="primary"
            centered
            onChange={this.handleChange}
          >
            <Tab label="About" />
            <Tab label="Qualification" />
            <Tab label="Work Experience" />
          </Tabs>
        </Paper>
        <TabPanel value={this.state.value} index={0} className={classes.panelTab}>
          {/* I am a Full stack developer. I have been working in IT industry for more than 8 years. I have been working
          on MERN stack for last 3+ years. During 8 years of journey in IT industry I have worked on Finance, Insurance,
          Retail and Learning domains.

          I have worked for tier I companies around the world. */}
          <SlideComp/>
      </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <Qualification/>
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  2011
          </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <GradeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={2} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    Graduation
            </Typography>
                  <Typography>B.Tech  - Information Technology </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  2012
          </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    First Company
            </Typography>
                  <Typography>Joined in CGI as Associate Software Engineer</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  2015
          </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" >
                  <Filter1Icon />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    Second Major Company
            </Typography>
                  <Typography>Joined in Infosys as Senior Software Engineer</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  2019
          </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <Filter2Icon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    Small Organization
            </Typography>
                  <Typography>Joined in Probeseven as Tech Lead</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="primary">
                  2020
               </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <OpenWithSharpIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    Free From Organizations
                  </Typography>
                  <Typography>Started working as a freelancer</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </TabPanel>
      </div>
    )
  }
}

export default withStyles(useStyles)(Content);