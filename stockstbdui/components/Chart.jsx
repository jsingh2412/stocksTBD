import { Group } from "@visx/group";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { max, extent, bisector } from "@visx/vendor/d3-array";
import { scaleTime, scaleLinear } from "@visx/scale";
import { GridRows, GridColumns } from "@visx/grid";
import { timeFormat } from "@visx/vendor/d3-time-format";

function LineChart({ data, width, height }) {
  const formatDate = timeFormat("%Y");
  // define margins from where to start drawing the chart
  const margin = { top: 25, right: 25, bottom: 25, left: 25 };
  // defining inner measurements
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const getRD = (d) => d.amount;
  const getDate = (d) => new Date(d.year, 0, 1);

  const dateScale = scaleTime({
    range: [0, innerWidth],
    domain: extent(data, getDate),
  });

  const rdScale = scaleLinear({
    range: [innerHeight, 0],
    domain: extent(data, getRD),
  });
  return (
    <svg width={width} height={height}>
      {/*Outer rectangle for chart*/}

      <rect x={0} y={0} width={width} height={height} fill={"#9db39f"} />
      <Group left={margin.left} top={margin.top} height={innerHeight}>
        <text x="0" y="0" fontSize={12} fill="#000">
          S&P 500
        </text>
        <rect
          x={0}
          y={0}
          width={innerWidth}
          height={innerHeight}
          fill={"#DFDFDF"}
        />
        <AxisLeft
          stroke={"#fff"}
          tickStroke={"#9db39f"}
          scale={rdScale}
          tickLabelProps={() => ({
            fill: "#fff", // Set the text color to white
            fontSize: 11,
            textAnchor: "middle",
            dx: "-.2rem",
          })}
        />
        <AxisBottom
          scale={dateScale}
          tickFormat={formatDate}
          tickStroke={"#9db39f"}
          top={innerHeight}
          tickLabelProps={() => ({
            fill: "#fff",
            fontSize: 11,
            textAnchor: "middle",
          })}
        />
        <GridRows
          scale={rdScale}
          width={innerWidth}
          height={innerHeight - margin.top}
          stroke="#000"
        />
        <GridColumns
          scale={dateScale}
          width={innerWidth}
          height={innerHeight}
          stroke="#000"
        />
      </Group>
    </svg>
  );
}

export default LineChart;
