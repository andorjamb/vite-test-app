import { useLocation } from "react-router-dom";
import LineChart from "../components/LineChart";
import axios from "axios";
import "../globals.scss";

import "../globals.scss";

const AllCharts = () => {
  //const server = process.env.REACT_APP_API_URL;
  //console.log(server);
  const server = "http://localhost:4000";

  const location = useLocation();
  const nameParam = new URLSearchParams(location.search).get("name");
  const yearParam = new URLSearchParams(location.search).get("year");

  window.onload = async () => {
    console.log("On visiting, this page will send a request to the backend");
    const promise = await axios.get(
      `${server}/visit?year=${yearParam}&name=${nameParam}}`
    );
    console.log(promise);
  };

  const sendRequest = () => {
    axios.get(server);
  };

  const askForPdf = async () => {
    axios.post(`${server}/pdf`, { name: "Anna", date: new Date() });
    return;
  };

  return (
    <div className="allcharts_container">
      <h1>All Charts</h1>
      <LineChart />
      <button onClick={() => sendRequest()}>Click me to piong backend</button>
      <button onClick={() => askForPdf()}>Click me to get a PDF</button>
      <LineChart />
      <LineChart />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        exercitationem veritatis sapiente sit? Provident iste cupiditate aperiam
        blanditiis magnam quae at, placeat fugiat veniam explicabo accusantium,
        nihil, eveniet voluptatum debitis.
      </p>
      <LineChart />
      <LineChart />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        exercitationem veritatis sapiente sit? Provident iste cupiditate aperiam
        blanditiis magnam quae at, placeat fugiat veniam explicabo accusantium,
        nihil, eveniet voluptatum debitis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        exercitationem veritatis sapiente sit? Provident iste cupiditate aperiam
        blanditiis magnam quae at, placeat fugiat veniam explicabo accusantium,
        nihil, eveniet voluptatum debitis.
      </p>
      <LineChart />
      <LineChart />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        exercitationem veritatis sapiente sit? Provident iste cupiditate aperiam
        blanditiis magnam quae at, placeat fugiat veniam explicabo accusantium,
        nihil, eveniet voluptatum debitis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        exercitationem veritatis sapiente sit? Provident iste cupiditate aperiam
        blanditiis magnam quae at, placeat fugiat veniam explicabo accusantium,
        nihil, eveniet voluptatum debitis.
      </p>
      <LineChart />
      <LineChart />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        exercitationem veritatis sapiente sit? Provident iste cupiditate aperiam
        blanditiis magnam quae at, placeat fugiat veniam explicabo accusantium,
        nihil, eveniet voluptatum debitis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        exercitationem veritatis sapiente sit? Provident iste cupiditate aperiam
        blanditiis magnam quae at, placeat fugiat veniam explicabo accusantium,
        nihil, eveniet voluptatum debitis.
      </p>
      <LineChart />
      <LineChart />
    </div>
  );
};

export default AllCharts;
