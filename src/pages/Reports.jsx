import { PDFDownloadLink } from "@react-pdf/renderer";
import "../globals.scss";

import { Report } from "../views/Report";

export const Reports = () => (
  <div className="reports_container">
    <PDFDownloadLink document={<Report />} fileName="somename.pdf">
      {/*   {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        } */}{" "}
      TEXT HERE
      <p>Click to download PDF</p>
    </PDFDownloadLink>
  </div>
);

//export default Reports;

/* const MyDoc = () => (
  <Document>
    <Page>
      // My document data
    </Page>
  </Document>
);

const App = () => (
  <div>
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
); */
