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

// 删除 mockData
// const mockData: ScanResult[] = [];

const ScanPage: React.FC = () => {
  const [scanData, setScanData] = useState<ScanResult[]>([]);
  const navigate = useNavigate();

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

  const handleSelectScan = (scanId: string) => {
    navigate(`/findings/${scanId}`);
  };

  return (
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
