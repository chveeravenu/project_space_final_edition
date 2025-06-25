// import { motion } from "framer-motion";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

// // Sample data for weekly contest participation
// const weeklyContestData = [
//   { name: "Week 1", value: 60 },
//   { name: "Week 2", value: 80 },
//   { name: "Week 3", value: 70 },
//   { name: "Week 4", value: 90 },
// ];

// const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981"];

// const WeeklyContestParticipationChart = () => {
//   return (
//     <motion.div
//       className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.3 }}
//     >
//       <h2 className='text-lg font-medium mb-4 text-gray-100'>
//         Weekly Contest Participation
//       </h2>
//       <div className='h-80'>
//         <ResponsiveContainer width={"100%"} height={"100%"}>
//           <PieChart>
//             <Pie
//               data={weeklyContestData}
//               cx={"50%"}
//               cy={"50%"}
//               labelLine={false}
//               outerRadius={90}
//               fill='#8884d8'
//               dataKey='value'
//               label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//             >
//               {weeklyContestData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "rgba(31, 41, 55, 0.8)",
//                 borderColor: "#4B5563",
//               }}
//               itemStyle={{ color: "#E5E7EB" }}
//             />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </motion.div>
//   );
// };

// export default WeeklyContestParticipationChart;





import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981"];
const allMonths = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const WeeklyContestParticipationChart = () => {
  const [rawData, setRawData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://projectspace-backend.onrender.com/weekly-contest-participation"
        );
        const data = await res.json();
        setRawData(data);

        // Default to current month
        const currentMonth = new Date().toLocaleString("default", { month: "short" });
        setSelectedMonth(currentMonth);
      } catch (err) {
        console.error("Error fetching weekly data:", err);
      }
    };

    fetchData();
  }, []);

  const weeklyData = rawData
    .filter((item) => item.month === selectedMonth)
    .map(({ week, participants }) => ({
      name: week,
      value: participants,
    }));

  const isEmpty = weeklyData.length === 0;
  const displayData = isEmpty
    ? [{ name: "No Data", value: 100 }]
    : weeklyData;

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg font-medium text-gray-100'>
          Weekly Contest Participation
        </h2>
        <select
          className='bg-gray-700 text-white border border-gray-600 rounded px-2 py-1'
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {allMonths.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className='h-80 relative'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={displayData}
              cx='50%'
              cy='50%'
              outerRadius={90}
              dataKey='value'
              labelLine={false}
              label={
                !isEmpty
                  ? ({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                  : false
              }
            >
              {displayData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={isEmpty ? "#6B7280" : COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {!isEmpty && (
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
            )}
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        {isEmpty && (
          <div className='absolute inset-0 flex items-center justify-center text-white text-sm font-medium'>
            No Participation
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WeeklyContestParticipationChart;
