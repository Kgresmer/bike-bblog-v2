import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Carousel from 'react-elastic-carousel'

const useStyles = makeStyles((theme) => ({
  parallax: {
    backgroundImage: 'url("logo512.png")',
    minHeight: '1000px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  carousel: {
    maxHeight: '500px'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Carousel itemsToShow={1} showArrows={false} enableSwipe={false} enableMouseSwipe={false}>
        <div className={classes.carousel}>
          <img src="logo512.png" alt=""/>
        </div>
      </Carousel>
      <p>Text over here</p>
      <div className={classes.parallax}></div>
    </>
  )
}