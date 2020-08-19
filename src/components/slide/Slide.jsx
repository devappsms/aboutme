import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import expImage from "../../images/experience.jpg";
import fullStack from "../../images/fullStack.jpg"

class SlideComp extends React.Component{

    constructor(props){
        super()
        this.state={
            open: false 
        }
    }a
    render(){
        return(
            <Carousel showThumbs={false} centerSlidePercentage={40} infiniteLoop={true} autoPlay={true}>
            <div>
                <img src={expImage} alt=""/>
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={fullStack} alt=""/>
            </div>
            <div>
                {/* <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
        )
    }
}

export default SlideComp;