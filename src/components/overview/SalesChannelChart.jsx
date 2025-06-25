// import { motion } from "framer-motion";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// // Total count data (you can change these numbers)
// const OVERALL_DRIVE_DATA = [
//   {
//     category: "Coding Contest",
//     count: 455,
//   },
//   {
//     category: "AI Interview",
//     count: 372,
//   },
//   {
//     category: "MCQ'S",
//     count: 323,
//   },
// ];

// const DriveParticipationChart = () => {
//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.4 }}
//     >
//       <h2 className="text-lg font-medium mb-4 text-gray-100">Summary</h2>

//       <div className="h-80">
//         <ResponsiveContainer>
//           <BarChart data={OVERALL_DRIVE_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
//             <XAxis dataKey="category" stroke="#9CA3AF" />
//             <YAxis stroke="#9CA3AF" />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "rgba(31, 41, 55, 0.8)",
//                 borderColor: "#4B5563",
//               }}
//               itemStyle={{ color: "#E5E7EB" }}
//             />
//             <Legend />
//             <Bar dataKey="count" fill="#6366F1" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </motion.div>
//   );
// };

// export default DriveParticipationChart;



import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const DriveParticipationChart = () => {
  const [driveData, setDriveData] = useState([]);

  useEffect(() => {
    const fetchDriveData = async () => {
      try {
        const response = await fetch("https://projectspace-backend.onrender.com/drive-participation");
        const data = await response.json();
        setDriveData(data);
      } catch (err) {
        console.error("Error fetching drive data:", err);
      }
    };

    fetchDriveData();
  }, []);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Summary</h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={driveData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="category" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="count" fill="#6366F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DriveParticipationChart;
