import img690 from "../../../assets/690x400.png";

function About() {
  return (
    <>
      <h1 className="display-4 mb-4">
        João Paulo de Barros Viegas
        <small className="d-block text-muted">Desenvolvedor full-stack</small>
      </h1>
      <div className="row mb-4">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <img src={img690} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-lg-6">
          <h2>Sobre mim</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            similique itaque error illo cum voluptatum. Eaque laboriosam eveniet
            maxime in possimus illo unde quaerat, dolorum ducimus est,
            voluptatibus, quibusdam totam.
          </p>
          <p>
            Desenvolvedor full-stack.
            <br />
            Front end: conhecimento em HTML semântico/acessível, CSS,
            JavaScript/TypeScript, React.
            <br />
            Back end: conhecimento em Node.js, MySQL, MongoDB.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
