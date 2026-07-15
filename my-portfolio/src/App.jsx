import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/HomePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Contact from "./components/Contact.jsx"
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTopButton />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/project/:title" element={<ProjectPage />} />
      </Routes>
      <Contact />
    </HashRouter>
  );
}