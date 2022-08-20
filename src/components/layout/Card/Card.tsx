interface ICard {
  tags: string[];
  imgSrc: string;
  title: string;
  desc: string;
  link: string;
  dateCreated: string;
}

function Card({ tags, imgSrc, title, desc, link, dateCreated }: ICard) {
  return (
    <div className="col-12 col-md-6 col-xl-4 mb-4">
      <div className="card">
        <div className="d-flex">
          {tags.map((tag) => (
            <div className="badge bg-primary my-1 ms-1" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <img
          src={imgSrc}
          alt="Portfolio Item Heading"
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{desc}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-100 stretched-link"
          >
            Ir para {title}
          </a>
        </div>
        <div className="card-footer small">Criado em: {dateCreated}</div>
      </div>
    </div>
  );
}

export default Card;
