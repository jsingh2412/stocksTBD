import { Group } from "@visx/group";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { AreaClosed, Line, Bar } from "@visx/shape";
import React, { useMemo, useCallback } from "react";
import { max, extent, bisector } from "@visx/vendor/d3-array";
import { scaleTime, scaleLinear } from "@visx/scale";
import { GridRows, GridColumns } from "@visx/grid";
import { timeFormat } from "@visx/vendor/d3-time-format";
import { LinearGradient } from "@visx/gradient";
import { curveMonotoneX } from "@visx/curve";
import { localPoint } from "@visx/event";
import {
  withTooltip,
  Tooltip,
  TooltipWithBounds,
  defaultStyles,
} from "@visx/tooltip";

//temp to try to get more of like the other one

export const background = "#3b6978";
export const background2 = "#204051";
export const accentColor = "#edffea";
export const accentColorDark = "#75daad";
const tooltipStyles = {
  ...defaultStyles,
  background,
  border: "1px solid white",
  color: "white",
};

const LineChart = withTooltip(
  ({
    data,
    width,
    height,
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipTop = 0,
    tooltipLeft = 0,
  }) => {
    if (width < 10) return null;
    const formatDate = timeFormat("%b %d, '%y");
    // define margins from where to start drawing the chart
    const margin = { top: 25, right: 25, bottom: 25, left: 25 };
    // defining inner measurements

    //bounds
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    //accessors
    const getRD = (d) => d.amount;
    const getDate = (d) => new Date(d.month, d.day, d.year);
    const bisectDate = bisector((d) => new Date(d.month, d.day, d.year)).left;

    //scales
    const dateScale = scaleTime({
      range: [margin.left, innerWidth + margin.left],
      domain: extent(data, getDate),
    });

    const rdScale = scaleLinear({
      range: [innerHeight + margin.top, margin.top],
      domain: extent(data, getRD),
    });

    function handleTooltip(event) {
      const { x } = localPoint(event) || { x: 0 };
      const x0 = dateScale.invert(x);
      const index = bisectDate(data, x0, 1);
      const d0 = data[index - 1];
      const d1 = data[index];
      let d = d0;

      if (d1 && getDate(d1)) {
        d =
          x0.valueOf() - getDate(d0).valueOf() >
          getDate(d1).valueOf() - x0.valueOf()
            ? d1
            : d0;
      }
      showTooltip({
        tooltipData: d,
        tooltipLeft: x,
        tooltipTop: rdScale(getRD(d)),
      });
    }
    return (
      <div>
        <svg width={width} height={height}>
          {/*Outer rectangle for chart*/}
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={"url(#area-background-gradient)"}
          />
          <LinearGradient
            id="area-background-gradient"
            from={background}
            to={background2}
          />
          <LinearGradient
            id="area-gradient"
            from={accentColor}
            to={accentColor}
            toOpacity={0.1}
          />
          <text x="0" y="0" fontSize={12} fill="#000">
            S&P 500
          </text>
          <GridRows
            left={margin.left}
            scale={rdScale}
            width={innerWidth}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0}
            pointerEvents="none"
          />
          <GridColumns
            top={margin.top}
            scale={dateScale}
            height={innerHeight}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0.2}
            pointerEvents="none"
          />
          <AreaClosed
            data={data}
            x={(d) => dateScale(getDate(d)) ?? 0}
            y={(d) => rdScale(getRD(d)) ?? 0}
            yScale={rdScale}
            strokeWidth={1}
            stroke="url(#area-gradient)"
            fill="url(#area-gradient)"
            curve={curveMonotoneX}
          />
          <Bar
            x={margin.left}
            y={margin.top}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: margin.top }}
                to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                stroke={accentColorDark}
                strokeWidth={2}
                pointerEvents="none"
                strokeDasharray="5,2"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop + 1}
                r={4}
                fill="black"
                fillOpacity={0.1}
                stroke="black"
                strokeOpacity={0.1}
                strokeWidth={2}
                pointerEvents="none"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill={accentColorDark}
                stroke="white"
                strokeWidth={2}
                pointerEvents="none"
              />
            </g>
          )}
        </svg>
        {tooltipData && (
          <div>
            <TooltipWithBounds
              key={Math.random()}
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
              style={tooltipStyles}
            >
              {`${getRD(tooltipData)}`}
            </TooltipWithBounds>
            <Tooltip
              top={innerHeight + margin.top - 14}
              left={tooltipLeft}
              style={{
                ...defaultStyles,
                minWidth: 72,
                textAlign: "center",
                transform: "translateX(-50%)",
              }}
            >
              {formatDate(getDate(tooltipData))}
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
);

export default LineChart;
