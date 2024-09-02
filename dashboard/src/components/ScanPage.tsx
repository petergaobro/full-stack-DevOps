import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import { ScanResult } from "../types/scan-result.ts";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";

const mockData: ScanResult[] = [
  {
    repositoryName: "Repo1",
    scanStatus: "Completed",
    findings: 5,
    timestamp: "2023-10-01",
  },
  {
    repositoryName: "Repo2",
    scanStatus: "Queued",
    findings: 0,
    timestamp: "2023-10-02",
  },
];

const ScanPage: React.FC = () => {
  // handling routing
  const navigate = useNavigate();
  // navigate to a different route with specific ID
  const handleSelectScan = (scanId: string) => {
    navigate(`/findings/${scanId}`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4">Scan List</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Repository Name</TableCell>
              <TableCell>Scan Status</TableCell>
              <TableCell>Findings</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*iterate over the scan results array and create a TableRow for each scan*/}
            {mockData.map((scan, index) => (
              <TableRow
                key={index}
                hover
                onClick={() => handleSelectScan(scan.repositoryName)}
              >
                <TableCell>{scan.repositoryName}</TableCell>
                <TableCell>{scan.scanStatus}</TableCell>
                <TableCell>
                  <Badge count={scan.findings} />
                </TableCell>
                <TableCell>{scan.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ScanPage;
