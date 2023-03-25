// React
import React from "react";
// React DOM
import { Link } from "react-router-dom";

// assets
import Logo from "../assets/images/Logo.png";

// material ui components
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack>
      <Link>
        <img src={Logo} alt="logo" />
      </Link>
    </Stack>
  );
};

export default Navbar;
