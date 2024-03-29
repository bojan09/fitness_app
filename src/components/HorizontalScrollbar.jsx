import React, { useContext } from "react";

// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// mui components
import { Box } from "@mui/material";

// components
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };

  return (
    <Carousel
      CustomRightArrow={CustomRightArrow}
      swipeable={true}
      draggable={false}
      infinite={true}
      keyBoardControl={true}
      customTransition="all 600ms ease-in-out"
      transitionDuration={500}
      dotListClass="react-multi-carousel-dot-list"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      renderDotsOutside={true}
      itemClass="carousel-item-padding-40-px"
      className="carousel"
      responsive={responsive}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        </Box>
      ))}
    </Carousel>
  );
};

export default HorizontalScrollbar;
