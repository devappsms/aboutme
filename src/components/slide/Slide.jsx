import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import expImage from "../../images/experience.jpg";
import fullStack from "../../images/fullStack.jpg";
import domain from "../../images/domain.png";
import { withStyles } from '@material-ui/core';

const useStyles = (theme) => ({
    root: {
        maxHeight: 400,
       maxWidth: 1000
    },
    image:{
        height: '100%',
        width: '100%'
    }
  });

class SlideComp extends React.Component{

    constructor(props){
        super()
        this.state={
            open: false 
        }
    }
    render(){
        const {classes} = this.props
        return(
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} dynamicHeight={false}>
            <div >
                <img src={expImage} alt="" className={classes.image} />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div >
                <img src={fullStack} alt="" className={classes.image}/>
            </div>
            <div className={classes.image}>
                <img src={domain} alt="" className={classes.image}/>
            </div>
        </Carousel>
        )
    }
}

export default withStyles(useStyles)(SlideComp);