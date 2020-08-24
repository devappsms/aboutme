import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import expImage from "../../images/experience.jpg";
import fullStack from "../../images/fullStack.jpg";
import domain from "../../images/domain.png";
import { withStyles } from '@material-ui/core';
import './SlideStyles.css'

const useStyles = (theme) => ({
    root: {
       height: 400,
       wWidth: '100%',
       display:'block'
    },
    img : { 
        width:'100%',
        height:'100%', 
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
        // const {classes} = this.props
        return(
            <div >
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
            <div >
                <img src={expImage} alt="" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div >
                <img src={fullStack} alt="" />
            </div>
            <div>
                <img src={domain} alt="" />
            </div>
        </Carousel>
        </div>
        )
    }
}

export default withStyles(useStyles)(SlideComp);