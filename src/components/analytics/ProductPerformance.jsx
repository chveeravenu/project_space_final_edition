import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

const placementData = [
  { name: "TCS", round1: 50, round2: 40, round3: 30, round4: 20 },
  { name: "Infosys", round1: 45, round2: 35, round3: 25, round4: 15 },
  { name: "Wipro", round1: 60, round2: 50, round3: 40, round4: 30 },
  { name: "Walmart", round1: 30, round2: 25, round3: 20, round4: 15 },
  { name: "Accenture", round1: 55, round2: 45, round3: 35, round4: 25 },
  { name: "IBM", round1: 35, round2: 30, round3: 25, round4: 20 },
];

const ProductPerformance = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Placement Rounds per Company
      </h2>
      <div style={{ width: "100%", height: 300, minWidth: 70 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={placementData}
            barCategoryGap="15%"
            barSize={7}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="round1" fill="#8B5CF6" name="Round 1" />
            <Bar dataKey="round2" fill="#10B981" name="Round 2" />
            <Bar dataKey="round3" fill="#F59E0B" name="Round 3" />
            <Bar dataKey="round4" fill="#3B82F6" name="Round 4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProductPerformance;
