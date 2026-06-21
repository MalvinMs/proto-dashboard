import { ExternalLink, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeatmapRow {
  name: string;
  data: number[];
}

interface TopProductsWidgetProps {
  heatmapData: HeatmapRow[];
  days: string[];
}

const getColorClass = (val: number) => {
  if (val === 3) return "bg-blue-600";
  if (val === 2) return "bg-blue-400";
  if (val === 1) return "bg-gray-200";
  return "bg-gray-100";
};

export function TopProductsWidget({
  heatmapData,
  days,
}: TopProductsWidgetProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg text-gray-800">Top Products</h3>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm text-gray-600 font-medium bg-gray-50">
            Daily Sales <ChevronDown className="h-4 w-4" />
          </button>
          <button className="p-1.5 border rounded-lg text-gray-400 hover:bg-gray-50">
            <ExternalLink className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col gap-3 mr-4 text-sm text-gray-500 font-medium pt-1">
            {heatmapData.map((item) => (
              <div key={item.name} className="h-8 flex items-center">
                {item.name}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 flex-1">
            {heatmapData.map((row, rowIndex) =>
              row.data.map((val, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`h-8 rounded-md ${getColorClass(val)}`}
                />
              ))
            )}
          </div>
        </div>
        <div className="flex justify-end mt-3 pl-20">
          <div className="grid grid-cols-7 gap-2 flex-1 text-center text-xs text-gray-400 font-medium">
            {days.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TopProductsWidget;
