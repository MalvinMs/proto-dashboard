import { LayoutDashboard, ExternalLink, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SalesDataPoint {
  name: string;
  value: number;
}

interface SalesAnalyticsChartProps {
  data: SalesDataPoint[];
}

export function SalesAnalyticsChart({ data }: SalesAnalyticsChartProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 col-span-2"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg text-gray-800">
          Sales Analytics
        </h3>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm text-gray-600 font-medium bg-gray-50">
            Daily Sales <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm text-gray-600 font-medium bg-gray-50">
            <LayoutDashboard className="h-4 w-4" /> 10-15 April 2026
          </button>
          <button className="p-1.5 border rounded-lg text-gray-400 hover:bg-gray-50">
            <ExternalLink className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              tickCount={5}
              domain={[0, 4000]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesAnalyticsChart;
