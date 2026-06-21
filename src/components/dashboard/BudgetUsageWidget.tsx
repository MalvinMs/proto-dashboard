import { ExternalLink, Package } from "lucide-react";
import { motion } from "framer-motion";

export function BudgetUsageWidget() {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg text-gray-800">Budget Usage</h3>
        <button className="p-1.5 border rounded-lg text-gray-400 hover:bg-gray-50">
          <ExternalLink className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-6 flex-1">
        <div>
          <div className="flex justify-between text-sm mb-2 font-medium">
            <span className="text-gray-700">Meta Ads</span>
            <div>
              <span className="font-currency text-gray-900">$120,000</span>{" "}
              <span className="text-green-500 ml-2">69%</span>
            </div>
          </div>
          <div className="h-10 bg-gray-100 rounded-lg overflow-hidden relative">
            <div className="h-full bg-blue-500 w-[69%] rounded-lg flex items-center px-4 text-white font-medium absolute top-0 left-0 z-10">
              <span className="font-currency">$78,700</span>
            </div>
            <div className="h-full bg-gray-200 w-full absolute top-0 left-0" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2 font-medium">
            <span className="text-gray-700">TikTok Ads</span>
            <div>
              <span className="font-currency text-gray-900">$250,000</span>{" "}
              <span className="text-green-500 ml-2">78%</span>
            </div>
          </div>
          <div className="h-10 bg-gray-100 rounded-lg overflow-hidden relative">
            <div className="h-full bg-blue-500 w-[78%] rounded-lg flex items-center px-4 text-white font-medium absolute top-0 left-0 z-10">
              <span className="font-currency">$179,500</span>
            </div>
            <div className="h-full bg-gray-200 w-full absolute top-0 left-0" />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-xl flex gap-3 items-start">
        <div className="bg-white p-2 rounded-lg text-blue-500 shadow-sm">
          <Package className="h-5 w-5" />
        </div>
        <p className="text-sm text-blue-800 leading-relaxed font-medium">
          TikTok Ads using 78% budget. Reallocate Meta Ads for estimated +18%
          ROI improvement this month.
        </p>
      </div>
    </motion.div>
  );
}

export default BudgetUsageWidget;
