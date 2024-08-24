import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import StudentList from "./Components/StudentList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/studentslist" element={<StudentList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
