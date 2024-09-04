import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const ScanPage: React.FC = () => {
  // manage a state variable named scanData that holds an array of ScanResult objects
  const [scanData, setScanData] = useState<ScanResult[]>([]);
  // handling routing
  const navigate = useNavigate();
  // fetch data asynchronously from an API endpoint when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/users");
        const { data } = await response.json();
        setScanData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // handling route to specific ID
  const handleSelectScan = (scanId: string) => {
    navigate(`/findings/${scanId}`);
  };

  return (
    // create a table for listing scan results with MUI component
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width={"100%"}
    >
      <Typography variant="h4">Scan List</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell width={"20%"}>Repository Name</TableCell>
              <TableCell width={"20%"}>Scan Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scanData.map((scan, index) => (
              <TableRow
                key={index}
                hover
                onClick={() => handleSelectScan(scan.id)}
                sx={{
                  cursor: "pointer",
                }}
              >
                <TableCell>{scan.id}</TableCell>
                <TableCell>{scan.repositoryName}</TableCell>
                <TableCell>{scan.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ScanPage;
