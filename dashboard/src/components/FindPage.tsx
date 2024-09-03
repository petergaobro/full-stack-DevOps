import React from "react";
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

const mockFindings: Finding[] = [
  {
    ruleId: "R1",
    description: "Description 1",
    severity: "High",
    path: "src/file1.ts:10",
  },
  {
    ruleId: "R2",
    description: "Description 2",
    severity: "Medium",
    path: "src/file2.ts:20",
  },
];

const FindingPage: React.FC = () => {
  // handle route
  const navigate = useNavigate();
  // extract route parameters from the URL
  const { scanId } = useParams<{ scanId: string }>();
  // back home button
  const handleBackHome = () => {
    navigate("/");
  };
  // back scan page button
  const handleScanPage = () => {
    navigate("/scan-list");
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
              <TableCell>Rule ID</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell>Path</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*iterate over the Findings array and create a TableRow for each finding*/}
            {mockFindings.map((finding, index) => (
              <TableRow key={index}>
                <TableCell>{finding.ruleId}</TableCell>
                <TableCell>{finding.description}</TableCell>
                <TableCell>{finding.severity}</TableCell>
                <TableCell>{finding.path}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", alignItems: "flex-start'" }}>
        <Button variant="outlined" onClick={handleBackHome}>
          Back home
        </Button>
        <Button variant="outlined" onClick={handleScanPage}>
          Back scan list
        </Button>
      </Box>
    </Box>
  );
};

export default FindingPage;
