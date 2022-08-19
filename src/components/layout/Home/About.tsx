import img690 from "../../../assets/690x400.png";

function About() {
  return (
    <div className="container mt-4">
      <h1 className="display-4 mb-4">
        João Paulo de Barros Viegas
        <small className="d-block text-muted">front-end developer</small>
      </h1>
      <div className="row mb-4">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <img src={img690} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-lg-6">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            similique itaque error illo cum voluptatum. Eaque laboriosam eveniet
            maxime in possimus illo unde quaerat, dolorum ducimus est,
            voluptatibus, quibusdam totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eius at saepe. Magni quam unde quas quod adipisci, non eligendi
            nesciunt omnis cumque in, magnam itaque veritatis hic quae aliquid?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
