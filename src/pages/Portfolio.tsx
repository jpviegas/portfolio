import p50d from "../assets/50p50d.png";
import ebytr from "../assets/ebytr.png";
import pixelart from "../assets/pixelart.png";
import todoapp from "../assets/todoapp.png";
import About from "../components/layout/Home/About";
import Contact from "../components/layout/Home/Contact";
import FeaturedProjects from "../components/layout/Home/FeaturedProjects";

function Portfolio() {
  document.title = "jpviegas | Portfolio";
  return (
    <main className="container mt-4">
      <About />
      <h2>Projectos em destaque</h2>
      <div className="row mb-4 sm-4">
        <FeaturedProjects
          link="https://jp-50projects50days.netlify.app/"
          imgSrc={p50d}
          project="50 Projects in 50 Days"
        />
        <FeaturedProjects
          link="https://jp-todoapp.netlify.app/"
          imgSrc={todoapp}
          project="Todo App"
        />
        <FeaturedProjects
          link="https://jp-pixelart.netlify.app/"
          imgSrc={pixelart}
          project="Pixel Art"
        />
        <FeaturedProjects
          link="https://github.com/jpviegas/ebytr"
          imgSrc={ebytr}
          project="Ebytr"
        />
      </div>
      <Contact />
    </main>
  );
}

export default Portfolio;
