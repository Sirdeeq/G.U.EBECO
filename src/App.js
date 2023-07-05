import React from "react";
import { Route, Routes } from "react-router-dom";
import DemoPage from "./demo/DemoPage";
import NewQuestion from "./demo/NewQuestion";
import CostSheet from "./demo/CostSheet";
import ReportComponent from "./demo/ReportComponent";
import MyComponent from "./demo/MyComponent";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DemoPage />} />
      <Route path="/create-new-question" element={<NewQuestion />} />
      <Route path="/cost-sheet" element={<CostSheet />} />
      <Route path="/report" element={<ReportComponent />} />
      <Route path="/com" element={<MyComponent />} />
    </Routes>
  );
}
