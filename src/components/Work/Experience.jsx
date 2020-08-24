import React from "react";
import { withStyles } from '@material-ui/core';
// import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import appConstants from "../constants/appConstants";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import GradeIcon from '@material-ui/icons/Grade';
import Zoom from '@material-ui/core/Zoom';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import Filter1Icon from '@material-ui/icons/Filter1';
// import Filter2Icon from '@material-ui/icons/Filter2';
// import OpenWithSharpIcon from '@material-ui/icons/OpenWithSharp';

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: '6px 16px',
        background: theme.palette.background.paper,
        color: 'white',
        textAlign: 'center'
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
});

class WorkExperience extends React.Component {

    constructor(props) {
        super();
        this.state = {
            timeout: 500
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <Timeline align="alternate">
                {appConstants.workExperience.map((value, index) => {
                    return (
                        <Zoom in={true} timeout={this.state.timeout * (index + 1)}>
                            <TimelineItem >
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        {value.year}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator color="secondary">
                                    <TimelineDot color="primary">
                                        <GradeIcon />
                                    </TimelineDot>
                                    {appConstants.workExperience.length - 1 !== index ? <TimelineConnector /> : null}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={2} className={classes.paper}>
                                        <Typography variant="h6" component="h1">
                                            {value.title1}
                                        </Typography>
                                        <Typography>{value.title2}</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        </Zoom>
                    )
                })}
            </Timeline>

        )
    }
}

export default withStyles(useStyles)(WorkExperience);