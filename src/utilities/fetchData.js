export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `d0d0f5e566mshb6f02f895726f12p169b0ajsndf09797af762`,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
