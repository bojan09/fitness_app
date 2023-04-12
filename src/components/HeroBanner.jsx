import React from "react";

// mui components
import { Box, Stack, Typography, Button } from "@mui/material";

// images
import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => {
  return (
    <>
      <Box
        sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
        position="relative"
        p="20px"
      >
        <Typography color="#3a86ff" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>

        <Typography
          fontWeight="700"
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        >
          Sweat, Smile <br /> and Repeat
        </Typography>

        <Typography fontSize="22px" lineHeight="35px" mb={4}>
          Check out the most effective exercises
        </Typography>

        <Button
          variant="contained"
          href="exercises"
          style={{
            backgroundColor: "#3a86ff",
            padding: "10px",
            fontWeight: "600",
            textTransform: "capitalize",
          }}
        >
          Explore Exercises
        </Button>

        <Typography
          fontWeight="600"
          color="#3a86ff "
          sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
          fontSize="200px"
        >
          Exercise
        </Typography>

        <img
          src={HeroBannerImage}
          alt="hero-banner-image"
          className="hero-banner-img"
        />
      </Box>
    </>
  );
};

export default HeroBanner;
