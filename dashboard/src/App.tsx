import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormPage from "./components/FormPage";
import ScanPage from "./components/ScanPage";
import FindingsPage from "./components/FindingsPage";
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <Router>
      <Container maxWidth="md">
        <Routes>
          {/*handling route*/}
          <Route path="/" element={<FormPage />} />
          <Route path="/scan-list" element={<ScanPage />} />
          <Route path="/findings/:scanId" element={<FindingsPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
