import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataWeek = [
  { day: "MON", "AI Interviews": 10, Contests: 5 },
  { day: "TUE", "AI Interviews": 15, Contests: 7 },
  { day: "WED", "AI Interviews": 12, Contests: 8 },
  { day: "THU", "AI Interviews": 20, Contests: 10 },
  { day: "FRI", "AI Interviews": 25, Contests: 15 },
  { day: "SAT", "AI Interviews": 18, Contests: 12 },
  { day: "SUN", "AI Interviews": 5, Contests: 2 },
];

const dataMonth = [
  { week: "Week 1", "AI Interviews": 60, Contests: 30 },
  { week: "Week 2", "AI Interviews": 70, Contests: 40 },
  { week: "Week 3", "AI Interviews": 80, Contests: 50 },
  { week: "Week 4", "AI Interviews": 90, Contests: 60 },
];

const dataQuarter = [
  { month: "Jan", "AI Interviews": 200, Contests: 120 },
  { month: "Feb", "AI Interviews": 220, Contests: 130 },
  { month: "Mar", "AI Interviews": 250, Contests: 140 },
];

const dataYear = [
  { quarter: "Q1", "AI Interviews": 600, Contests: 400 },
  { quarter: "Q2", "AI Interviews": 700, Contests: 450 },
  { quarter: "Q3", "AI Interviews": 750, Contests: 470 },
  { quarter: "Q4", "AI Interviews": 800, Contests: 500 },
];

const ContestAIChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Week");

  let chartData = [];
  let dataKeyX = "";
  switch (selectedTimeRange) {
    case "This Week":
      chartData = dataWeek;
      dataKeyX = "day";
      break;
    case "This Month":
      chartData = dataMonth;
      dataKeyX = "week";
      break;
    case "This Quarter":
      chartData = dataQuarter;
      dataKeyX = "month";
      break;
    case "This Year":
      chartData = dataYear;
      dataKeyX = "quarter";
      break;
    default:
      chartData = dataWeek;
      dataKeyX = "day";
  }

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Contests & AI Interviews ({selectedTimeRange})
        </h2>
        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey={dataKeyX} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="AI Interviews"
              stroke="#8B5CF6"     
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="Contests"
              stroke="#10B981"    
              fill="#10B981"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ContestAIChart;
