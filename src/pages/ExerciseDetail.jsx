import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// mui components
import { Box } from "@mui/material";

// components
import { Detail, ExerciseVideos, SimilarExercises } from "../components";

import {
  youtubeOptions,
  exercisesOptions,
  fetchData,
} from "../utilities/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, settargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exeerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;

      // get Exercises data, via RapidAPI
      const exerciseDetailData = await fetchData(
        `${exeerciseDbUrl}/exercises/exercise/${id}`,
        exercisesOptions
      );
      setExerciseDetail(exerciseDetailData);

      // get Youtube videos, via RapidAPI
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      // get Simmilar exercises
      const targetMuscleExercisesData = await fetchData(
        `${exeerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exercisesOptions
      );
      settargetMuscleExercises(targetMuscleExercisesData);

      // get exercises that use same equipment
      const equipmentExercisesData = await fetchData(
        `${exeerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exercisesOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
