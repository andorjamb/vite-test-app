import axios from "axios";

//Samples of code from web for handling pdf download

const ViewReport = () => {
  // GET request for remote image in node.js
  axios({
    method: "get",
    url: "",
    responseType: "stream",
  }).then(function (response) {
    //response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
  });

  //fabiofranchino - force browser to open downloaded pdf
  async () => {
    const res = await axios({
      responseType: "blob",
      // url: URL_TO_BINARY_FILE
    });

    // res.data will contains the binary data of the file
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "myFile.pdf");
    document.body.appendChild(link);
    link.click();
  };

  //Ashik Nesin
  async function main() {
    try {
      const downloadLink = "https://example.com/test.pdf";
      const response = await axios.get(downloadLink, {
        responseType: "arraybuffer",
      });
      //const fileData = Buffer.from(response.data, 'binary');
      //await fs.writeFile('./file.pdf', fileData);
      console.log("PDF file saved!");
    } catch (err) {
      console.error(err);
    }
  }

  return <div></div>;
};

export default ViewReport;
