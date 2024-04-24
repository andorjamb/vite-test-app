import { Page, Text, Document, Svg, View, Image } from "@react-pdf/renderer";
import Chart from "../components/BarChart";
import LineChart from "../components/LineChart";

import { PDFViewer } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import ReactDOM from "@react-pdf/renderer";


export const Report = () => (
  <Document>
    <Page>
      <View>
        <Text>Testing</Text>
        <Svg>
          {/* <Chart /> */}
         
        </Svg>
        <Image src="/dog.jpeg"></Image>
      </View>
    </Page>
    <Page>
      <Text>Page 2</Text>
    </Page>
  </Document>
);

//export default Report;
