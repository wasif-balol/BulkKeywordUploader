import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
// import CustomizedButton from "./Button";
import { Link } from "react-router-dom";

const KeywordsContainer = () => {
  const [keywords, setValues] = useState([]);

  const handleChange = (event) => {
    setValues(event.target.value.split("\n"));
  };

  const hand = () => {
    console.log(keywords);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "65ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="PPC Bulk Uploader"
          multiline
          rows={20}
          placeholder="Add Keywords..."
          onChange={handleChange}
        />
        <br />
        <Link onClick={hand} to="/campaign-details" className="item">
          <Button variant="contained" color="primary" type="submit">
            Save and continue
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default KeywordsContainer;
