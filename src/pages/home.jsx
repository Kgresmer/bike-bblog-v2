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
    backgroundColor: 'white',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '515px',
    marginBottom: '75px'
  },
  whatIsItContainer: {
    height: '500px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginBottom: '75px'
  },
  homeContainer: {
    zIndex: '1000'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.parallax}>
      <div className={classes.homeContainer}>
        <div className={classes.carousel}>
          <Carousel itemsToShow={1} showArrows={false} enableSwipe={false} enableMouseSwipe={false}>
            <img src="logo512.png" alt=""/>
          </Carousel>
        </div>
        <div className={classes.whatIsItContainer}>

        </div>
        <p>Text over here</p>
      </div>
    </div>
  )
}