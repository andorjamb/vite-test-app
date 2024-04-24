import "../globals.scss";
import styles from "./Home.module.css";
import axios from "axios";

const Home = () => {
  const createPdf = () => {
    console.log("Posting...");

    axios.post("http://localhost:4000/createpdf", {
      name: "snodgrass",
      year: "2024",
    });
    /*     axios({
      method: "post",
      url: "http://localhost:4000/createpdf",
      data: {
        name: "snodgrass",
        year: "2024",
      },
    }); */
  };
  return (
    <div className="home_container">
      <div className={styles.first_div}>
        <h1>Home Page</h1>
      </div>
      <div className={styles.second_div}>
        <h2>Second Heading</h2>
        <button onClick={createPdf}>Create Pdf</button>
      </div>
    </div>
  );
};

export default Home;
