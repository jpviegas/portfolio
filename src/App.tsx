import About from "./components/layout/Home/About";
import Contact from "./components/layout/Home/Contact";
import FeaturedProjects from "./components/layout/Home/FeaturedProjects";

function App() {
  return (
    <div className="container mt-4">
      <About />
      <h2>Featured Projects</h2>
      <div className="row mb-4 sm-4">
        <FeaturedProjects project="Featured Project 1" />
        <FeaturedProjects project="Featured Project 2" />
        <FeaturedProjects project="Featured Project 3" />
        <FeaturedProjects project="Featured Project 4" />
      </div>
      <Contact />
    </div>
  );
}

export default App;
