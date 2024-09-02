import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormPage from "./components/FormPage";
import FindingPage from "./components/FindPage.tsx";
import ScanPage from "./components/ScanPage.tsx";
import { Container } from "@mui/material";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Container maxWidth="sm">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/scan-list" element={<ScanPage />} />
          <Route path="/findings/:scanId" element={<FindingPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
