import { ResponsiveLine, Serie } from "@nivo/line";
import React from "react";

export type Props = {
  data: Serie[],
  legend: String,
}

const ResponsiveLineCustomized = ({ data, legend }: Props) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "linear", min: "auto" }}
    yScale={{
      type: "linear",
      max: "auto",
      min: "auto"
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={{}}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "paket numarası",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend,
      legendOffset: -40,
      legendPosition: "middle",
    }}
    enablePoints={false}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    enableGridX={true}
    curve="monotoneX"
    animate={false}
    isInteractive={false}
    enableSlices={false}
  />
);

export default ResponsiveLineCustomized;