import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {Link} from 'react-router-dom'
 
class Slide extends Component {
    constructor(props){
        super()
    }

    render() {
       var style={
           width:250,
           height:280,
           marginTop:10
        }
        var data=this.props.imgSlide
        return (
            <Carousel>
            {data.map((dt,i)=>
                <Link to="/detail/1"><img key={i} alt="img" style={style} src={dt} /></Link> 
                )}
            </Carousel>
        );
    }
};

export default Slide

