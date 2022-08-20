function Contact() {
  return (
    <>
      <h2>Contato</h2>
      <form action="" className="mb-4">
        <div className="row">
          <div className="col-12 col-md6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Digite seu e-mail"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={4}
                placeholder="Digite a sua mensagem aqui..."
              />
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
}

export default Contact;
