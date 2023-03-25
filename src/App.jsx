// React
import React from "react";
import { Route, Routes } from "react-router-dom";

// material ui components
import { Box } from "@mui/material";

// components
import { Navbar, Footer } from "./components";

// pages
import { Home, ExerciseDetail } from "./pages";

import "./index.css";

const App = () => (
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
