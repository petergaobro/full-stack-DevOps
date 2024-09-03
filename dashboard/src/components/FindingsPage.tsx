import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { Finding } from "../types/scan-result.ts";

const FindingsPage: React.FC = () => {
  const { scanId } = useParams<{ scanId: string }>();
  const [mockFindings, setMockFindings] = useState<Finding[]>([]);
  useEffect(() => {
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

  return (
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
              <TableRow key={index}>
                <TableCell>{finding.ruleId}</TableCell>
                <TableCell>{finding.metadata.description}</TableCell>
                <TableCell>{finding.metadata.severity}</TableCell>
                <TableCell>{finding.location.path}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FindingsPage;
