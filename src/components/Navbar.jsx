// React
import React from "react";
// React DOM
import { Link } from "react-router-dom";

// assets
import Logo from "../assets/images/gym.svg";

// material ui components
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: "48px", height: "48px" }} />
      </Link>
      <Stack
        direction="row"
        alignItems="flex-end"
        sx={{
          fontSize: { lg: "24px", xs: "20px" },
          gap: { lg: "40px", xs: "22px" },
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #3a86ff",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>

        <Link
          to="/blog"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            padding: "0 0 0 0",
          }}
        >
          Blog
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
