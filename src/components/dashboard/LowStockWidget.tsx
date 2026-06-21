import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function LowStockWidget() {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg text-gray-800">
          Low Stock Alert
        </h3>
        <button className="p-1.5 border rounded-lg text-gray-400 hover:bg-gray-50">
          <ExternalLink className="h-5 w-5" />
        </button>
      </div>

      <div className="bg-gray-50 p-4 rounded-xl flex gap-4 items-center mb-4 font-medium">
        <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center border p-2">
          <img
            src="https://placehold.co/60x60/png?text=Mouse"
            alt="Product"
            className="object-contain"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">Mouse Furycube G11</h4>
          <p className="text-sm text-gray-500 font-mono">MO-RH-G11</p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl mb-6 flex-1">
        <p className="text-blue-800 text-sm leading-relaxed font-medium">
          Products running out fast. Consider restocking or launching a flash
          promotion.
        </p>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors">
        Restock Now
      </button>
    </motion.div>
  );
}

export default LowStockWidget;
