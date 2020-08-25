import React from "react";
import { withStyles } from '@material-ui/core';
// import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import appConstants from "../constants/appConstants";
import Grid from '@material-ui/core/Grid';

const useStyles = (theme) => ({
      paper: {
        height: 100,
        maxWidth: 350,
        background: theme.palette.background.paper,
        color: 'white',
      },
      textService:{
        padding: '11%'
      }
});

class Service extends React.Component {

    constructor(props) {
        super();
        this.state = {
            timeout: 500
        }
    }
    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={1} 
            alignItems="center"
            justify="center">
              { appConstants.services.map((value,index)=>{
                   return (
                    <Grid item xs={12} sm={6} md={4} key={index} spacing={3}>
                         <Grow in={true} timeout={1000*(index+1)}>
                            <Paper elevation={3} className={classes.paper} >
                                <Typography variant="h5" className={classes.textService} >
                                        {value}
                                 </Typography>
                            </Paper>
                         </Grow>
                    </Grid>                  
                  ) })}  
                  </Grid>  

        )
    }
}

export default withStyles(useStyles)(Service);