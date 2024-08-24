import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SectionPage from "./Section/SectionPage";
import FristYearGirls from "./Components/names/FristYearGirls";
import FristYearBoys from "./Components/names/FristYearBoys";
import SecondYearGirls from "./Components/names/SecondYearGirls";
import SecondYearBoys from "./Components/names/SecondYearBoys";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/section" element={<SectionPage />} />
          <Route path="/fristyear-Girls" element={<FristYearGirls />} />
          <Route path="/fristyear-Boys" element={<FristYearBoys />} />
          <Route path="/secondyear_Girls" element={<SecondYearGirls />} />
          <Route path="/secondyear_Boys" element={<SecondYearBoys />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
