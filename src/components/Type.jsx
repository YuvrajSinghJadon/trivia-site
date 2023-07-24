import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

const YourComponent = () => {
  const [number, setNumber] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const topicsList = [
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 12, name: "Entertainment: Music" },
    { id: 13, name: "Entertainment: Musicals & Theatres" },
    { id: 14, name: "Entertainment: Television" },
    { id: 15, name: "Entertainment: Video Games" },
    { id: 16, name: "Entertainment: Board Games" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Science: Computers" },
    { id: 19, name: "Science: Mathematics" },
    { id: 20, name: "Mythology" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 24, name: "Politics" },
    { id: 25, name: "Art" },
    { id: 26, name: "Celebrities" },
    { id: 27, name: "Animals" },
    { id: 28, name: "Vehicles" },
    { id: 29, name: "Entertainment: Comics" },
    { id: 30, name: "Science: Gadgets" },
    { id: 31, name: "Entertainment: Japanese Anime & Manga" },
    { id: 32, name: "Entertainment: Cartoon & Animations" },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "number":
        setNumber(value);
        break;
      case "difficulty":
        setDifficulty(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "type":
        setType(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="h-screen flex p-1 justify-center pt-10 ">
      <Box
        sx={{
          marginTop: "5rem",
          minWidth: 250,
          maxHeight: 400,
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          borderRadius: "10px",
          boxShadow:
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.15)", // Custom box-shadow          padding: "1rem", // Added padding for better visual appearance
          color: "#ffffff", // Set text color to white for better contrast
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add smooth transition to transform and box-shadow
          "&:hover": {
            transform: "translateY(8px)", // Translate the box on hover by 4px
            boxShadow:
              "0 6px 12px rgba(0, 0, 0, 0.3), 0 8px 20px rgba(0, 0, 0, 0.35)", // Darker shadow on hover
          },
        }}
      >
        {/* Number of Questions */}
        <FormControl fullWidth>
          <InputLabel id="number-label">Number of Questions</InputLabel>
          <Select
            labelId="number-label"
            id="number-select"
            name="number"
            value={number}
            label="Number of Questions"
            onChange={handleChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>

        {/* Category */}
        <FormControl fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            name="category"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            {topicsList.map((topic) => (
              <MenuItem key={topic.id} value={topic.id}>
                {topic.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Difficulty */}
        <FormControl fullWidth>
          <InputLabel id="difficulty-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-label"
            id="difficulty-select"
            name="difficulty"
            value={difficulty}
            label="Difficulty"
            onChange={handleChange}
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>

        {/* Type */}
        <FormControl fullWidth>
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            id="type-select"
            name="type"
            value={type}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value="multiple">MCQ</MenuItem>
            <MenuItem value="boolean">True/False</MenuItem>
          </Select>
        </FormControl>
        <Link to={`/letsplay/${number}/${category}/${difficulty}/${type}`}>
          <button className="bg-purple-500 w-full px-5 py-2 rounded-md shadow-lg">
            Submit
          </button>
        </Link>
      </Box>
    </div>
  );
};

export default YourComponent;
