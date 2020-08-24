import React from "react";

import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import expImage from "../../images/experience.jpg";
import mernImage from "../../images/MERN-Stack.jpg";
import btechImage from "../../images/B.tech.png";
import mainframe from "../../images/mainframe.jpg"
import data from "../../images/data.jpg"
const useStyles = (theme) => ({
  cardRoot: {
    width: 300,
  },
  cardMedia: {
    height: 100,
  },
  cardContent:{
    height: 100,
    background: theme.palette.background.paper,
    color: 'white',
    fontFamily:"Helvetica",
    textAlign:'center'
  },
  control: {
    padding: theme.spacing(2),
  },
});

class About extends React.Component {

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
      <Grid container  spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
          <Grid key={1} item>
              <Slide direction="left" in={true} timeout={1000}>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={expImage}
                    title="MERN stack"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" >
                      8<sup>+</sup> years of total experience in IT industry.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Slide>
            </Grid>
            <Grid key={1} item>
              <Slide direction="up" in={true} timeout={1000}>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={mernImage}
                    title="MERN stack"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" >
                      3<sup>+</sup> years of Full stack development experience. Self thought MERN stack developer.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Slide>
            </Grid>
            <Grid key={1} item>
              <Slide direction="right" in={true} timeout={1000}>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={btechImage}
                    title="MERN stack"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" >
                      Hold B.Tech - Information Technology degree.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Slide>
            </Grid>
            <Grid key={2} item>
            <Slide direction="left" in={true} timeout={1000}>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={mainframe}
                    title="MERN stack"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" >
                      I was trained on Mainframe Technology.
                </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Slide>
            </Grid>
            <Grid key={3} item>
            <Slide direction="up" in={true} timeout={1000}>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={data}
                    title="MERN stack"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" >
                      Expert in SQL and NoSql database query and optimization
                </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </Slide>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(useStyles)(About);