import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";

// Lazily load components using React.lazy
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Experience = React.lazy(() => import("./components/Experience"));
const Feedbacks = React.lazy(() => import("./components/Feedbacks"));
const Hero = React.lazy(() => import("./components/Hero"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Tech = React.lazy(() => import("./components/Tech"));
const Works = React.lazy(() => import("./components/Works"));
const StarsCanvas = React.lazy(() => import("./components/StarsCanvas"));

const App = () => {
  return (
    // Wrap the entire app in Suspense to handle loading state
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter basename="/Portfolio-website">
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
