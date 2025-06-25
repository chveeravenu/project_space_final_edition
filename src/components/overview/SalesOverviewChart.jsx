// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { motion } from "framer-motion";

// const contestParticipationData = [
//   { month: "Jun", participants: 150 },
//   { month: "Jul", participants: 200 },
//   { month: "Aug", participants: 250 },
//   { month: "Sep", participants: 300 },
//   { month: "Oct", participants: 270 },
//   { month: "Nov", participants: 240 },
//   { month: "Dec", participants: 210 },
//   { month: "Jan", participants: 180 },
//   { month: "Feb", participants: 230 },
//   { month: "Mar", participants: 280 },
//   { month: "Apr", participants: 330 },
//   { month: "May", participants: 380 },
// ];

// const ContestParticipationChart = () => {
//   return (
//     <motion.div
//       className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <h2 className='text-lg font-medium mb-4 text-gray-100'>
//         Monthly Contest Participation
//       </h2>

//       <div className='h-80'>
//         <ResponsiveContainer width='100%' height='100%'>
//           <LineChart
//             data={contestParticipationData}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
//             <XAxis dataKey='month' stroke='#9CA3AF' />
//             <YAxis stroke='#9CA3AF' />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "rgba(31, 41, 55, 0.8)",
//                 borderColor: "#4B5563",
//               }}
//               itemStyle={{ color: "#E5E7EB" }}
//             />
//             <Line
//               type='monotone'
//               dataKey='participants'
//               stroke='#6366F1'
//               strokeWidth={3}
//               dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
//               activeDot={{ r: 8, strokeWidth: 2 }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </motion.div>
//   );
// };

// export default ContestParticipationChart;

















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

const ContestParticipationChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchParticipationData = async () => {
      try {
        const response = await fetch(
         "https://projectspace-backend.onrender.com/monthly-contest-participation"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching contest participation data:", error);
      }
    };

    fetchParticipationData();
  }, []);

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>
        Monthly Contest Participation
      </h2>

      <div className='h-80'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
            <XAxis dataKey='month' stroke='#9CA3AF' />
            <YAxis stroke='#9CA3AF' />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type='monotone'
              dataKey='participants'
              stroke='#6366F1'
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ContestParticipationChart;

