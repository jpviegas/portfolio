import { Link } from "react-router-dom";
import img510 from "../../../assets/510x400.png";

interface IProject {
  project: string;
}

function FeaturedProjects({ project }: IProject) {
  return (
    <div className="col-12 col-md-6 col-xl-3 mb-4">
      <Link to="portfolio-item">
        <figure className="figure">
          <img
            src={img510}
            alt={project}
            className="figure-img img-fluid img-thumbnail"
          />
          <figcaption className="figure-caption">{project}</figcaption>
        </figure>
      </Link>
    </div>
  );
}

export default FeaturedProjects;
