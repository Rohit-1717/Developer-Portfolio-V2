import { Route, Routes } from "react-router-dom";
import { FloatingDockDemo } from "./components/DockNav/DockNav";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/Pages/About/About";
import { MultiStepLoader } from "./components/Loader/MultiStepLoader";

function App() {
  return (
    <>
      <MultiStepLoader />
      <FloatingDockDemo />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
