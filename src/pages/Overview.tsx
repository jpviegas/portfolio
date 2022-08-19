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
        {/* <div className="col-12 col-md-6 col-xl-4 mb-4"> */}
        <Card
          tags={["HTML", "CSS", "JavaScript"]}
          imgSrc={p50d}
          title="50 Projects in 50 Days"
          desc="50 fast tricks"
          link="https://jp-50projects50days.netlify.app/"
          dateCreated="01/08/2022"
        />
        <Card
          tags={["React"]}
          imgSrc={todoapp}
          title="Todo App"
          desc="Todo App from frontendmentor.io"
          link="https://jp-todoapp.netlify.app/"
          dateCreated="01/08/2022"
        />
        <Card
          tags={["CSS"]}
          imgSrc={pixelart}
          title="Pixel Art"
          desc="Make old school pixel art"
          link="https://jp-pixelart.netlify.app/"
          dateCreated="01/08/2022"
        />
        <Card
          tags={["React", "mySQL"]}
          imgSrc={ebytr}
          title="Ebytr"
          desc="Todo App with mySql back end"
          link="https://github.com/jpviegas/ebytr"
          dateCreated="01/08/2022"
        />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Overview;
