// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer
// } from "recharts";
// import { motion } from "framer-motion";

// const weeklyLoginData = [
//   { week: "Week 1", logins: 1800 },
//   { week: "Week 2", logins: 2100 },
//   { week: "Week 3", logins: 2600 },
//   { week: "Week 4", logins: 3000 }
// ];

// const WeeklyLoginsChart = () => {
//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.3 }}
//     >
//       <h2 className="text-xl font-semibold text-gray-100 mb-4">Weekly Logins</h2>
//       <div className="h-[320px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={weeklyLoginData}
//             margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//             <XAxis
//               dataKey="week"
//               stroke="#9CA3AF"
//               padding={{ left: 20, right: 20 }}
//             />
//             <YAxis
//               domain={[1500, 3500]} 
//               ticks={[1500, 2000, 2500, 3000, 3500]} 
//               stroke="#9CA3AF"
//             />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "rgba(31, 41, 55, 0.8)",
//                 borderColor: "#4B5563"
//               }}
//               itemStyle={{ color: "#E5E7EB" }}
//             />
//             <Line
//               type="monotone"
//               dataKey="logins"
//               stroke="#10B981"
//               strokeWidth={2}
//               dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
//               activeDot={{ r: 8 }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </motion.div>
//   );
// };

// export default WeeklyLoginsChart;

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const WeeklyLoginsChart = () => {
  const [weeklyLoginData, setWeeklyLoginData] = useState([]);

  useEffect(() => {
    const fetchWeeklyLogins = async () => {
      try {
        const res = await fetch("https://projectspace-backend.onrender.com/weekly-logins");
        const data = await res.json();

        // Only use week and totalLogins
        const formattedData = data.map((item) => ({
          week: item.week,
          totalLogins: item.totalLogins,
        }));

        setWeeklyLoginData(formattedData);
      } catch (err) {
        console.error("Error fetching weekly logins:", err);
      }
    };

    fetchWeeklyLogins();
  }, []);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Weekly Logins</h2>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={weeklyLoginData}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="week"
              stroke="#9CA3AF"
              padding={{ left: 20, right: 20 }}
            />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="totalLogins"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default WeeklyLoginsChart;
