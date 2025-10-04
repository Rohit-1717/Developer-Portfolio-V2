import { Route, Routes } from "react-router-dom";
import { FloatingDockDemo } from "./components/DockNav/DockNav";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/Pages/About/About";
import { MultiStepLoader } from "./components/Loader/MultiStepLoader";
import Projects from "./components/Pages/Projects/Projects";
import Blogs from "./components/Pages/Blogs/Blogs";
import Contacts from "./components/Pages/Contact/Contacts";

function App() {
  return (
    <>
      <MultiStepLoader />
      <FloatingDockDemo />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
