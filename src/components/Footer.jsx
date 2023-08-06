import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/gym.svg";

const Footer = () => (
  <Box mt="80px" bgcolor="##edf6f9">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Fitness Club
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
