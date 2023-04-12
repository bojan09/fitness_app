import React, { useState } from "react";

// mui components
import { Box } from "@mui/material";

// components
import { HeroBanner, SearchExercises, Exercises } from "../components";

const Home = () => {
  return (
    <>
      <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
      </Box>
    </>
  );
};

export default Home;
