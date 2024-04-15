import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

// Sample JSON object with all the props data
const chartBoxData = {
  color: "#8884d8", // Example color
  icon: "path/to/icon.png", // Example icon path
  title: "Sample Chart",
  dataKey: "value",
  number: 1000,
  percentage: 5,
  chartData: [
    { name: "Page A", value: 400 },
    { name: "Page B", value: 300 },
    { name: "Page C", value: 300 },
    { name: "Page D", value: 200 },
    // Add more data as needed
  ],
};

const ChartBox = ({ color, icon, title, dataKey, number, percentage, chartData }) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>

      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
          >
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
