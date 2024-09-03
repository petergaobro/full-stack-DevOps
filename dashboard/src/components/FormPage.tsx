import React, { ChangeEvent, useState } from "react";
import {
  Button,
  Typography,
  Box,
  TextField,
  MenuItem,
  // Select,
  // InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const FormPage: React.FC = () => {
  // handling routing
  const navigate = useNavigate();
  // create a state variable to update this state

  const [formData, setFormData] = useState({ status: "", repositoryName: "" });

  // provided is a common event handler pattern to manage form input changes
  // provided appears to be part of a React event handler function that updates form data based on user input
  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
  ): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name as string]: value });
  };
  //asynchronous HTTP POST request to send form data to a server endpoint and navigates to another page upon successful submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/users/scanJson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // conditional
      if (response.ok) {
        console.log("Form data submitted successfully:", formData);
        navigate("/scan-list");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error while submitting form data:", error);
    }
  };

  const selectStatus = [
    {
      value: "Queued",
    },
    {
      value: "In Progress",
    },
    {
      value: "Success",
    },
    {
      value: "Failed",
    },
  ];

  return (
    // create a form for submitting scan results with MUI component
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4">Submit Scan Results</Typography>
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <FormControl fullWidth margin="normal">
          {/*<InputLabel>Status</InputLabel>*/}
          <TextField
            id="status"
            name="status"
            value={formData.status}
            required
            select
            label="Status"
            // defaultValue=""
            helperText="Please select your status"
            onChange={handleChange}
          >
            {selectStatus.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          {/*<Select*/}
          {/*  name="status"*/}
          {/*  value={formData.status}*/}
          {/*  onChange={handleChange}*/}
          {/*  required*/}
          {/*>*/}
          {/*  <MenuItem value="Queued">Queued</MenuItem>*/}
          {/*  <MenuItem value="In Progress">In Progress</MenuItem>*/}
          {/*  <MenuItem value="Success">Success</MenuItem>*/}
          {/*  <MenuItem value="Failed">Failed</MenuItem>*/}
          {/*</Select>*/}
        </FormControl>
        <TextField
          label="Repository Name"
          name="repositoryName"
          value={formData.repositoryName}
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
