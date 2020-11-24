import React from "react";
import {Carousel} from 'react-responsive-carousel'
import './pic.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import noImage from './img/no-image-icon-13.jpg'


const Pic = (props) =>{
    console.log(props)
    let pictures;
    pictures = props.pic.tour_image

    let list = []
    let picture

    if (pictures?.length){
        for (let i=0; i < 5; i++){
            picture = pictures[i]?.image ? `http://admin.tripsaround.me${pictures[i].image}` : noImage
            list.push(picture)
        }
    }
    else{
            picture = noImage
            list.push(picture)

        console.log('noImage',picture)
    }



    return(
        <div className='slider'>
            <Carousel autoPlay>
                {
                    list.map((item)=><div className='slider-carousel' key={item}>
                        <img className='slider-carousel__img' src={item} alt="pic.icon"/>
                    </div>)
                }

            </Carousel>
        </div>
    )
}


export default Pic;