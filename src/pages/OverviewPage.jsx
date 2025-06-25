// import { BarChart2, ShoppingBag, BarChart,GraduationCap,User, Users, LineChart } from "lucide-react";
// import { motion } from "framer-motion";

// import Header from "../components/common/Header";
// import StatCard from "../components/common/StatCard";
// import SalesOverviewChart from "../components/overview/SalesOverviewChart";
// import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
// import SalesChannelChart from "../components/overview/SalesChannelChart";

// const OverviewPage = () => {
// 	return (
// 		<div className='flex-1 overflow-auto relative z-10'>
// 			<Header title='Dashboard' />

// 			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
// 				{/* STATS */}
// 				<motion.div
// 					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
// 					initial={{ opacity: 0, y: 20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 1 }}
// 				>
// 				    <StatCard name='Total login' icon={GraduationCap} value='234' color='#8B5CF6' />
// 					<StatCard name='Total number of Contests' icon={LineChart} value='2,345' color='#6366F1' />
// 					<StatCard name='Students Participated in Contest' icon={Users} value='5' color='#EC4899' />
// 					<StatCard name='Contest Percentage' icon={BarChart2} value='22.5%' color='#10B981' />
// 				</motion.div>
				

// 				{/* CHARTS */}

// 				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
// 					<SalesOverviewChart />
// 					<CategoryDistributionChart />
// 					<SalesChannelChart />
// 				</div>
// 			</main>
// 		</div>
// 	);
// };
// export default OverviewPage;









import { useEffect, useState } from "react";
import { BarChart2, LineChart, Users, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalContests: 0,
    contestParticipants: 0,
    participationPercentage: "0%",
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const baseURL = "https://projectspace-backend.onrender.com";

        const [
          usersRes,
          contestsRes,
          participantsRes,
          percentageRes,
        ] = await Promise.all([
          fetch(`${baseURL}/total-users`),
          fetch(`${baseURL}/total-contests`),
          fetch(`${baseURL}/contest-participants`),
          fetch(`${baseURL}/contest-percentage`),
        ]);

        const usersData = await usersRes.json();
        const contestsData = await contestsRes.json();
        const participantsData = await participantsRes.json();
        const percentageData = await percentageRes.json();

        setStats({
          totalUsers: usersData.totalUsers,
          totalContests: contestsData.totalContests,
          contestParticipants: participantsData.contestParticipants,
          participationPercentage: percentageData.participationPercentage,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Dashboard' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name='Total Login'
            icon={GraduationCap}
            value={stats.totalUsers}
            color='#8B5CF6'
          />
          <StatCard
            name='Total Number of Contests'
            icon={LineChart}
            value={stats.totalContests}
            color='#6366F1'
          />
          <StatCard
            name='Students Participated in Contest'
            icon={Users}
            value={stats.contestParticipants}
            color='#EC4899'
          />
          <StatCard
            name='Contest Percentage'
            icon={BarChart2}
            value={stats.participationPercentage}
            color='#10B981'
          />
        </motion.div>

        {/* CHARTS */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
