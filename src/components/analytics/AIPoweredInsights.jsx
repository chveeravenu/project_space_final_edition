import { motion } from "framer-motion";
import { Search, Users, Mic, BarChart } from "lucide-react";

const INSIGHTS = [
	{
		icon: Search,
		color: "text-red-500",
		insight: "Resume keyword alignment has increased shortlisting chances by 82%, improving overall placement efficiency.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		insight: "AI-driven skill gap analysis is helping students receive personalized learning paths, boosting placement readiness.",
	},
	{
		icon: Mic,
		color: "text-purple-500",
		insight: "Mock interview performance data predicts real interview success with 78% accuracy, guiding focused training.",
	},
	{
		icon: BarChart,
		color: "text-green-500",
		insight: "AI predicts offer drop-offs by analyzing CTC and preference trends, helping maintain strong recruiter relationships.",
	},
];

const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default AIPoweredInsights;
