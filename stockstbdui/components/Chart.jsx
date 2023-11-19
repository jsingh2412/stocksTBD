//A component to implement charts within our webapp.
import React from "react";

//sample data to test graphing
const data = [
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1975,
    amount: 0.804,
  },
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1976,
    amount: 1.35,
  },
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1977,
    amount: 7.928,
  },
  {
    country: "DENMARK",
    currency: "RDDUSD",
    type: "RENEWABLE",
    year: 1978,
    amount: 15.357,
  },
];

import { Group } from "@visx/group";

function LineChart({ data, width, height }) {
  // define margins from where to start drawing the chart
  const margin = { top: 40, right: 40, bottom: 50, left: 40 };
  // defining inner measurements
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  return (
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={"#718006"}
        rx={100}
      />
      <Group left={margin.left} top={margin.top}>
        <rect
          x={0}
          y={0}
          width={innerWidth}
          height={innerHeight}
          fill={"#A0AEB0"}
        />
      </Group>
    </svg>
  );
}

export default LineChart;
