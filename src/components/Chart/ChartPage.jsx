import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartPage = () => {
  const data = [
    {
      name: "Assignment-1",
      uv: 27,
      pv: 60,
      fill: "#8884d8",
    },
    {
      name: "Assignment-2",
      uv: 22,
      pv: 60,
      fill: "#83a6ed",
    },
    {
      name: "Assignment-3",
      uv: 27,
      pv: 60,
      fill: "#8dd1e1",
    },
    {
      name: "Assignment-4",
      uv: 12,
      pv: 60,
      fill: "#82ca9d",
    },
    {
      name: "Assignment-5",
      uv: 26,
      pv: 60,
      fill: "#a4de6c",
    },
    {
      name: "Assignment-6",
      uv: 27,
      pv: 60,
      fill: "#d0ed57",
    },
    {
      name: "Assignment-7",
      uv: 30,
      pv: 60,
      fill: "#ffc658",
    },
  ];

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  return (
    <div className="max-w-5xl mx-auto ">
      <ResponsiveContainer width="100%" height={500}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPage;
