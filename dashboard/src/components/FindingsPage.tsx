import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Finding } from "../types/scan-result.ts";

const FindingsPage: React.FC = () => {
  // handling routing
  const navigate = useNavigate();
  // uses destructuring to extract the scanId parameter from the object returned by useParams.
  const { scanId } = useParams<{ scanId: string }>();
  // The state is initialized as an empty array of type Finding[]
  const [mockFindings, setMockFindings] = useState<Finding[]>([]);
  useEffect(() => {
    // fetches data from a server endpoint and updates a state in a React component
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/userInfo?id=" + scanId,
        );
        const { data } = await response.json();
        setMockFindings(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // back home button
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    // display a table of findings for a specific scan ID with MUI components
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4">Findings for {scanId}</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={"20%"}>Rule ID</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell>Path</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockFindings.map((finding, index) => (
              <TableRow
                key={index}
                sx={{
                  cursor: "pointer",
                }}
                hover
              >
                <TableCell>{finding.ruleId}</TableCell>
                <TableCell>{finding.metadata.description}</TableCell>
                <TableCell>{finding.metadata.severity}</TableCell>
                <TableCell>{finding.location.path}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="outlined" onClick={handleBackHome}>
        Back home
      </Button>
    </Box>
  );
};

export default FindingsPage;
