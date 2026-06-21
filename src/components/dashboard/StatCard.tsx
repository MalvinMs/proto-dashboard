import { MoreVertical, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
  growth: string;
  icon: React.ComponentType<{ className?: string }>;
  chartBars: string[];
  valueClassName?: string;
}

export function StatCard({
  title,
  value,
  growth,
  icon: Icon,
  chartBars,
  valueClassName = "",
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
            <Icon className="h-6 w-6" />
          </div>
          <span className="font-semibold text-gray-700">{title}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h3 className={`text-3xl font-bold text-gray-900 mb-2 ${valueClassName}`}>
            {value}
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
              {growth}{" "}
              <ChevronDown className="h-3 w-3 rotate-180" />
            </span>
            <span className="text-gray-500">From last month</span>
          </div>
        </div>
        <div className="flex items-end gap-1 h-12">
          {chartBars.map((height: string, idx: number) => (
            <div
              key={idx}
              style={{ height }}
              className={`w-2 rounded-sm ${
                idx >= chartBars.length - 3 ? "bg-blue-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default StatCard;
