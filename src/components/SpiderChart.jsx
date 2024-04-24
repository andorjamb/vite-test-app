import * as d3 from "d3";
import { useRef, useEffect, useState } from "react";
import "../globals.scss";

const SpiderChart = () => {
  const chartRef = useRef(null);

  const svg = d3.select("chartRef").append("svg");
  const radialScale = d3.scaleLinear();
  const radialAxis = d3.lin;
  return <div ref={chartRef}></div>;
};

export default SpiderChart;
