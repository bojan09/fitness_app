import React, { useEffect, useState } from "react";

// mui components
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

// components
import { HorizontalScrollbar } from "../components";

// fetchData func and ExerciseOptions
import { exercisesOptions, fetchData } from "../utilities/fetchData";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  {
    /* fetch categories when page loads */
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <Stack alignItems="center" justifyContent="center" p="20px" mt="37px">
        <Typography
          fontWeight="700"
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="50px"
          textAlign="center"
        >
          Awesome Exercises You Can Try
        </Typography>

        <Box position="relative" mb="72px">
          <TextField
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
            placeholder="Search Exercises"
            type="text"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "800px", xs: "350px" },
              backgroundColor: "#ffffff",
            }}
          ></TextField>

          <Button
            className="search-btn"
            sx={{
              backgroundColor: "#3a86ff",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: "0",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        {/* Body Parts */}
        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      </Stack>
    </>
  );
};

export default SearchExercises;
