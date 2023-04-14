import React from "react";

// react-dom-link
import { Link } from "react-router-dom";

// mui components
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <div>
      <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#74a7f7",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>

          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#5656ee",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          ml="21px"
          color="#151515"
          fontWeight="bold"
          mt="11px"
          pb="10px"
          textTransform="capitalize"
          fontSize="22px"
        >
          {exercise.name}
        </Typography>
      </Link>
    </div>
  );
};

export default ExerciseCard;
