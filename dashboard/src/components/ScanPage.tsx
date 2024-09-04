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
  TablePagination,
  Button,
  Paper,
} from "@mui/material";
import { ScanResult } from "../types/scan-result.ts";
import { useNavigate } from "react-router-dom";

const ScanPage: React.FC = () => {
  // set initial page state
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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

  // pagination handle change
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // back home button
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    // create a table for listing scan results with MUI component
    <Paper sx={{ width: "100%" }}>
      <Typography variant="h4">Scan List</Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell width={"20%"}>Repository Name</TableCell>
              <TableCell width={"20%"}>Scan Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scanData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((scan, index) => (
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={scanData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Button variant="outlined" onClick={handleBackHome}>
        Back home
      </Button>
    </Paper>
  );
};

export default ScanPage;
