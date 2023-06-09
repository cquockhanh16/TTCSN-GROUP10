import React from 'react'
import Slider from 'react-slick'

export const SliderComponent = ({arrImages}) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    cssEase: 'ease-in-out',
    autoplaySpeed: 2000,
    centerPadding: '0px',
  };
  return (
    <Slider {...settings}>
      {
        arrImages.map(img => {
          return(
            <img src={img} alt='slider' preview={false}/>
          )
        })
      }
    </Slider>
  )
}
