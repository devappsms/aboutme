import React from "react";

import { withStyles } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import mernImage from "../../images/MERN-Stack.jpg";
import btechImage from "../../images/B.tech.png";
import mainframe from "../../images/mainframe.jpg"
const useStyles = (theme) => ({
  cardRoot: {
    maxWidth: 500,
  },
  cardMedia: {
    height: 240,
  },
  cardContent:{
    height: 100,
    background: '#3FEEE6',
    color: 'white',
    fontFamily:"Helvetica",
  },
  control: {
    padding: theme.spacing(2),
  },
});

class Qualification extends React.Component {

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
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid key={1} item>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={btechImage}
                    title="MERN stack"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      I hold B.Tech [Information Technology] degree from Anna University, Chennai
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid key={2} item>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={mainframe}
                    title="MERN stack"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      I was trained on Mainframe Technology.
                </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid key={3} item>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={mernImage}
                    title="MERN stack"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Self thought MERN stack developer.
                </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>



      </Grid>
    )
  }
}

export default withStyles(useStyles)(Qualification);