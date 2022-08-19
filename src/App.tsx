import About from "./components/layout/Home/About";
import FeaturedProjects from "./components/layout/Home/FeaturedProjects";

function App() {
  return (
    <>
      <About />
      <div className="row mb-4 sm-4">
        <h3>Featured Projects</h3>
        <FeaturedProjects project="Featured Project 1" />
        <FeaturedProjects project="Featured Project 2" />
        <FeaturedProjects project="Featured Project 3" />
        <FeaturedProjects project="Featured Project 4" />
      </div>
    </>
  );
}

export default App;
