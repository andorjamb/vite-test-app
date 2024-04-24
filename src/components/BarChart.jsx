import * as d3 from "d3";
import { useRef, useEffect, useState } from "react";
import { Canvg } from "canvg";
import "../globals.scss";

const mockTempData1 = [
  { v: 24, t: 1 },
  { v: 12, t: 2 },
  { v: 15, t: 3 },
  { v: 10, t: 4 },
  { v: 6, t: 5 },
  { v: 14, t: 6 },
  { v: 28, t: 7 },
  { v: 35, t: 8 },
  { v: 20, t: 9 },
];

/* const margin = { top: 80, right: 30, bottom: 150, left: 30 };

const height = 350; //this has to include the margins, above
const width = 450; */

const margin = { top: 80, right: 30, bottom: 30, left: 60 };
const width = 460 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

/* 
const width = 500 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom; */

//nicer way:

const BarChart = () => {
  const [data, setData] = useState(mockTempData1);

  const chart = useRef(null);
  const values = data.map((d) => {
    return d.v;
  });

  console.log(values);

  /*   let canvas = document.createElement("canvas");
  canvg(canvas, svg);
  let imgData = canvas.toDataURL("image/png"); */

  useEffect(() => {
    if (data && data.length > 0) {
      const barchart = d3
        .select(chart.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right) //total width including margins
        .attr("height", height + margin.top + margin.bottom) //total width including margins
        .append("g") //grouping element
        .attr(
          "transform",
          "translate(" + margin.left + "," + margin.right + ")"
        );

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.v)]) //d3.max(data, d => d.v)
        .range([height, 0]);

      barchart
        .append("g")
        .call(d3.axisLeft(y))
        //.attr("transform", "translate(100, 0)");
      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.t)) //donations.map(d => d.organization_name)
        .range([0, width])
        .padding(0.2); //adds spacing between chart bars, 0.2 means 20% of a band's width

      barchart
        .selectAll("bars") //a custom identifier used to reference the elements you’re about to create
        .data(data)
        .enter()
        .append("rect") //apend new rect element for each data point
        //.join("bars")
        .attr("x", (d) => x(d.t)) //map data points to x coordinates
        .attr("y", (d) => y(d.v))
        .attr("width", 30) //  .attr("width", x.bandwidth())
        .attr("height", (d) => height - y(d.v))
        .attr("fill", "#5f0f40");
      // .attr("transform", "translate( 0", +margin.top + ")");

      barchart
        .append("g")
        .call(d3.axisBottom(x))
        .attr("transform", "translate(0," + height + ")")
        .selectAll("text")
        //.attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
    }
    return () => {
      d3.select(chart?.current).selectAll("*").remove();
    };
  }, [data]);

  return (
    <>
      <h3>A BarChart</h3>
      <div id="chart" className="barchart_container" ref={chart}></div>
    </>
  );
};

export default BarChart;
