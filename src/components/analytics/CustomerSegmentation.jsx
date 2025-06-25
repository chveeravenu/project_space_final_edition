import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
} from "recharts";

const placementSkillsData = [
  { skill: "Communication", GroupA: 130, GroupB: 110, fullMark: 150 },
  { skill: "Aptitude", GroupA: 120, GroupB: 140, fullMark: 150 },
  { skill: "Technical Knowledge", GroupA: 110, GroupB: 135, fullMark: 150 },
  { skill: "Problem Solving", GroupA: 115, GroupB: 125, fullMark: 150 },
  { skill: "Time Management", GroupA: 100, GroupB: 105, fullMark: 150 },
  { skill: "Team Collaboration", GroupA: 125, GroupB: 115, fullMark: 150 },
];

const PlacementSkillsRadarChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-xl font-bold text-gray-100 mb-4">
        College Placement Skills Analysis
      </h2>
      
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={placementSkillsData}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="skill" stroke="#9CA3AF" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#9CA3AF" />
            <Radar
              name="Group A"
              dataKey="GroupA"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.6}
            />
            <Radar
              name="Group B"
              dataKey="GroupB"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default PlacementSkillsRadarChart;
