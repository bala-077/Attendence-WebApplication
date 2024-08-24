import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import StudentList from "./Components/names/StudentList";
import SectionPage from "./Section/SectionPage";
import FristYearGirls from "./Components/names/FristYearGirls";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/section" element={<SectionPage />} />
          <Route path="/fristyear-Girls" element={<FristYearGirls />} />
          <Route path="/studentslist" element={<StudentList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
