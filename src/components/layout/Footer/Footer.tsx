function Footer() {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="rol">
          <div className="d-flex col-12 justify-content-evenly">
            <div className="d-flex align-items-center mb-2">
              <div className="fa-layers fa-fw fa-2x ms-4">
                <i className="fas fa-circle text-muted" />
                <i
                  className="fas fa-code text-white"
                  data-fa-transform="shrink-10"
                />
              </div>
              <h5 className="m-0">Links</h5>
            </div>
            <ul className="list-unstyled d-flex">
              <li className="ms-4">
                <i className="fab fa-fw fa-github" />
                <a
                  href="https://github.com/jpviegas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="ms-4">
                <i className="fab fa-fw fa-linkedin" />
                <a
                  href="https://www.linkedin.com/in/joao-paulo-viegas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mb-0">&copy; code by jp</p>
      </div>
    </footer>
  );
}

export default Footer;
