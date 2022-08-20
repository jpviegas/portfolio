import p50d from "../assets/50p50d.png";
import ebytr from "../assets/ebytr.png";
import pixelart from "../assets/pixelart.png";
import todoapp from "../assets/todoapp.png";
import Card from "../components/layout/Card/Card";

function Overview() {
  document.title = "Overview";
  return (
    <div className="container mt-4">
      <div className="row">
        <Card
          tags={["HTML", "CSS", "JavaScript"]}
          imgSrc={p50d}
          title="50 Projects in 50 Days"
          desc="Projeto que engloba variados pequenos projetos/páginas/efeitos."
          link="https://jp-50projects50days.netlify.app/"
          dateCreated="01/08/2022"
        />
        <Card
          tags={["React"]}
          imgSrc={todoapp}
          title="Todo App"
          desc="Todo App baseado no desafio do frontendmentor.io"
          link="https://jp-todoapp.netlify.app/"
          dateCreated="12/08/2022"
        />
        <Card
          tags={["CSS"]}
          imgSrc={pixelart}
          title="Pixel Art"
          desc="Crie desenhos 'old school' em pixel arte"
          link="https://jp-pixelart.netlify.app/"
          dateCreated="10/08/2022"
        />
        <Card
          tags={["React", "mySQL"]}
          imgSrc={ebytr}
          title="Ebytr"
          desc="Todo App utilizando mySql no back end"
          link="https://github.com/jpviegas/ebytr"
          dateCreated="05/07/2022"
        />
      </div>
    </div>
  );
}

export default Overview;
