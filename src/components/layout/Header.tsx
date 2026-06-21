import { Bell, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex justify-between items-center mb-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Store Overview</h2>
        <p className="text-gray-500">
          Here&apos;s how your store is performing today.
        </p>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <button
          aria-label="Toggle Dark Mode"
          className="bg-gray-100 p-1 rounded-full flex items-center w-14 h-8 cursor-pointer relative shadow-inner hover:bg-gray-200 transition-colors focus:outline-none"
        >
          <div className="bg-white shadow-sm rounded-full p-1 text-yellow-500 transform transition-transform duration-300 translate-x-0">
            <Sun className="h-4 w-4" />
          </div>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l">
          <div className="text-right">
            <p className="font-semibold text-gray-800 line-clamp-1">
              Yanuar Arifin
            </p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User Profile"
            className="h-10 w-10 rounded-full bg-gray-200"
          />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
