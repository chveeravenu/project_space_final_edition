// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer
// } from "recharts";
// import { motion } from "framer-motion";

// const dailyLoginData = [
//   { day: "Mon", logins: 180 },
//   { day: "Tue", logins: 260 },
//   { day: "Wed", logins: 340 },
//   { day: "Thu", logins: 410 },
//   { day: "Fri", logins: 480 },
//   { day: "Sat", logins: 530 },
//   { day: "Sun", logins: 590 }
// ];

// const DailyLoginsChart = () => {
//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.4 }}
//     >
//       <h2 className="text-xl font-semibold text-gray-100 mb-4">Daily Logins</h2>
//       <div className="h-[320px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={dailyLoginData}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//             <XAxis dataKey="day" stroke="#9CA3AF" />
//             <YAxis domain={[0, 600]} stroke="#9CA3AF" /> {/* Fixed domain */}
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "rgba(31, 41, 55, 0.8)",
//                 borderColor: "#4B5563"
//               }}
//               itemStyle={{ color: "#E5E7EB" }}
//             />
//             <Bar dataKey="logins" fill="#6366F1" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </motion.div>
//   );
// };

// export default DailyLoginsChart;



import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { motion } from "framer-motion";

const DailyLoginsChart = () => {
  const [dailyLoginData, setDailyLoginData] = useState([]);

  useEffect(() => {
    const fetchDailyLogins = async () => {
      try {
        const res = await fetch("https://projectspace-backend.onrender.com/daily-logins");
        const data = await res.json();

        // Ensure full week order even if no data for a day
        const daysOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const dayMap = Object.fromEntries(data.map(d => [d.day, d.logins]));
        const formatted = daysOrder.map(day => ({
          day,
          logins: dayMap[day] || 0
        }));

        setDailyLoginData(formatted);
      } catch (err) {
        console.error("Error fetching daily login data:", err);
      }
    };

    fetchDailyLogins();
  }, []);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Daily Logins</h2>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dailyLoginData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563"
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Bar dataKey="logins" fill="#6366F1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DailyLoginsChart;
