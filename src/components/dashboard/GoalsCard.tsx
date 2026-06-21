import { Calendar } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

interface GoalsCardProps {
  goalsData: Array<{ name: string; value: number; fill: string }>;
}

export function GoalsCard({ goalsData }: GoalsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
            <Calendar className="h-6 w-6" />
          </div>
          <span className="font-semibold text-gray-700">Monthly Goals</span>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <p className="text-gray-500 text-sm mb-1">Target</p>
            <p className="font-currency font-bold text-xl text-gray-800">
              $250,000
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Achieved</p>
            <p className="font-currency font-bold text-xl text-gray-800">
              $155,000
            </p>
          </div>
        </div>

        <div className="flex-1 h-40 relative -mt-8 -mr-4 items-center flex justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="80%"
              innerRadius="80%"
              outerRadius="110%"
              barSize={20}
              data={goalsData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                background={{ fill: "#f3f4f6" }}
                dataKey="value"
                cornerRadius={10}
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 text-center">
            <span className="text-3xl font-bold text-gray-900">65%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default GoalsCard;
