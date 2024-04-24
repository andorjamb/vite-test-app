import * as d3 from "d3";
import { useRef, useEffect, useState } from "react";
import "../globals.scss";

/**Important points:
 * 1. the html element that the d3 svg gets appended to can't be an svg. Eg, just use <div>
 * 2. Path order matters, paths further down in the code will overlay others
 * 3. using a clean-up function will remove the previous charts generated, but the space they took up on the
 * page remains.
 * 4. Checking if the reference doesn't have an svg appended to it yet, before renedering, seems to efficiently render the
 * chart only once. HOWEVER this prevents a rerender if the data changes.
 */

const mockTempData1 = [
  { value: 3.0, t: 0 },
  { value: 4.0, t: 1 },
  { value: 25.2, t: 2 },
  { value: 27.4, t: 3 },
  { value: 21.2, t: 4 },
  { value: 27.8, t: 5 },
  { value: 34.3, t: 6 },
  { value: 32.0, t: 7 },
  { value: 26.2, t: 8 },
];

const LineChart = () => {
  const svgRef = useRef();

  const margin = { top: 10, right: 30, bottom: 30, left: 60 };
  const width = 460 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const [data, setData] = useState(mockTempData1);

  useEffect(() => {
    const timer = setInterval(
      setData([
        { value: 13.0, t: 0 },
        { value: 4.0, t: 1 },
        { value: 25.2, t: 2 },
        { value: 27.4, t: 3 },
        { value: 21.2, t: 4 },
        { value: 27.8, t: 5 },
        { value: 34.3, t: 6 },
        { value: 32.0, t: 7 },
        { value: 26.2, t: 8 },
      ]),
      5000
    );
  }, []);

  const mockTempData2 = [35, 23, 34, 15, 31, 4, 22, 12, 8];

  let values;
  if (data) {
    values = data.map((d) => {
      return d.value;
    });
  }
  console.log(values);

  useEffect(() => {
    //if (d3.select(svgRef.current).select("svg").empty()) {console.log("empty");
    console.log("data ", data);
    if (values /*  && d3.select(svgRef.current).select("svg").empty() */) {
      /*   if (!d3.select(svgRef.current).select("svg").empty()) {
        console.log("empty");
        linechart.selectAll("*").remove();
      } */
      const linechart = d3
        .select(svgRef.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); //transform = "translate(60, 10)"

      const x = d3
        .scaleLinear()
        .domain([0, mockTempData1.length - 1])
        .range([0, width]); //range is the svg viewbox dimension that the domain needs to be scaled over

      linechart
        .append("g")
        .attr("transform", "translate(0," + height + ")") //moves the axis y-height to the bottom of the viewbox
        .call(d3.axisBottom(x));

      const y = d3.scaleLinear().domain([0, 37]).range([height, 0]);
      linechart.append("g").call(d3.axisLeft(y));

      //this part adds the line
      linechart
        .append("path")
        .datum(values) //seems like this has to be an array of numbers
        .attr(
          "transform",
          "translate( 0," + margin.top + ")" //needs fixing
        )
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 3)
        .attr(
          "d",
          d3
            .line()
            .x(function (d, i) {
              return x(i);
            })
            .y(function (d) {
              return y(d);
            })
        );

      linechart
        .append("path")
        .datum(mockTempData2) //seems like this has to be an array of numbers
        .attr(
          "transform",
          "translate( 0," + margin.top + ")" //needs fixing
        )
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 3)
        .attr(
          "d",
          d3
            .line()
            .x(function (d, i) {
              return x(i);
            })
            .y(function (d) {
              return y(d);
            })
        );

      //  return () => linechart.selectAll("*").remove();
    }
    const current = svgRef.current;
    return () => {
      d3.select(current).selectAll("*").remove();
    };
  }, [mockTempData1, values, data]);

  return (
    <div>
      <h2>Line Charts</h2>
      <div
        className="linechart_container"
        ref={svgRef}
        style={{ margin: "100px", display: "block" }}
      ></div>
    </div>
  );
};

export default LineChart;
