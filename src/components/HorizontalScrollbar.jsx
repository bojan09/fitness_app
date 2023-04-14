import React, { useContext } from "react";

// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// mui components
import { Box } from "@mui/material";

// components
import BodyPart from "./BodyPart";

// Arrow Icons
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

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

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      infinite={true}
      keyBoardControl={true}
      customTransition="all .8"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
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
