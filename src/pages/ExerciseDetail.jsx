import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// mui components
import { Box } from "@mui/material";

// components
import { Detail, ExerciseVideos, SimilarExercises } from "../components";

import { exercisesOptions, fetchData } from "../utilities/fetchData";
const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
