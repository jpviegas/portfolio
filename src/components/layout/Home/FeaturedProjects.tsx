interface IProject {
  link: string;
  imgSrc: string;
  project: string;
}

function FeaturedProjects({ link, imgSrc, project }: IProject) {
  return (
    <div className="col-12 col-md-6 col-xl-3 mb-4">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <figure className="figure">
          <img
            src={imgSrc}
            alt={project}
            className="figure-img img-fluid img-thumbnail"
          />
          <figcaption className="figure-caption">{project}</figcaption>
        </figure>
      </a>
    </div>
  );
}

export default FeaturedProjects;
