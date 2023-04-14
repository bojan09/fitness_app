import React from "react";

// mui components
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <>
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop: bodyPart === item ? "4px solid #3a86ff" : "",

          backgroundColor: "#fff",
          borderRadius: "0 0 8px 8px",
          borderTop: { xs: "4px solid #3a86ff" },
          width: { ls: "270px", xs: "235px" },
          height: { ls: "270px", xs: "250px" },
          gap: { ls: "47", xs: "35px" },
          cursor: "pointer",
        }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
      >
        <img
          src={Icon}
          alt="icon-dumbbell"
          style={{ width: "40px", height: "40px" }}
        />

        <Typography
          fontSize="24px"
          fontWeight="900"
          color="#3a86ff"
          textTransform="capitalize"
        >
          {item}
        </Typography>
      </Stack>
    </>
  );
};

export default BodyPart;
