import { Suspense, lazy } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";  // ✅ Ensure this is correctly imported

const HeroSection = lazy(() => import("./components/HeroSection"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Suspense fallback={<p className="loading-text">Loading...</p>}>
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
      <Chatbot />
      <Footer /> {/* ✅ Footer is properly placed at the bottom */}
    </div>
  );
}

export default App;
