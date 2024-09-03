import React, { useState } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FormPage: React.FC = () => {
  // handling routing
  const navigate = useNavigate();
  // create a state variable to update this state
  const [formData, setFormData] = useState({ scanResult: "" });

  // provided is a common event handler pattern to manage form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent the default action of an event from being executed
    e.preventDefault();
    // submit the scan result
    console.log("Submitting scan result:", formData.scanResult);
    // handling routing
    navigate("/scan-list");
  };

  return (
    // create a form for submitting scan results with MUI component
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h3">ADXIAI code challenge</Typography>
      <Typography variant="h4">Submit Scan Results</Typography>
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <TextField
          label="Scan Result"
          name="scanResult"
          value={formData.scanResult}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormPage;
