import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  LineChart,
  Megaphone,
  FileText,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  LineChart,
  Megaphone,
  FileText,
};

interface MenuItem {
  icon: string;
  label: string;
  active?: boolean;
}

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (label: string) => void;
}

const menuItems: MenuItem[] = [
  { icon: "LayoutDashboard", label: "Overview", active: true },
  { icon: "ShoppingBag", label: "Orders" },
  { icon: "Package", label: "Products" },
  { icon: "Users", label: "Customers" },
  { icon: "LineChart", label: "Analytics" },
  { icon: "Megaphone", label: "Marketing" },
  { icon: "FileText", label: "Reports" },
];

const sidebarVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      staggerChildren: 0.05,
    },
  },
};

const menuItemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export function Sidebar({ activeItem = "Overview", onItemClick }: SidebarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const handleItemClick = (label: string) => {
    onItemClick?.(label);
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="w-64 bg-white h-screen flex flex-col border-r border-gray-100 p-5 flex-shrink-0 font-sans"
    >
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-blue-600 p-2 rounded-lg">
          <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-gray-800">Yann UI/UX</h1>
          <p className="text-xs text-blue-500 font-medium">Admin</p>
        </div>
      </div>

      <button className="flex items-center text-gray-500 gap-3 mb-6 hover:text-gray-700 transition-colors">
        <ChevronDown className="rotate-90 h-5 w-5" /> <span>Collapse</span>
      </button>

      <div className="mb-4 text-gray-400 text-xs font-semibold tracking-wider">
        MENU
      </div>
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const IconComponent = iconMap[item.icon];
          const isActive = item.label === activeItem;

          return (
            <motion.button
              key={item.label}
              onClick={() => handleItemClick(item.label)}
              variants={menuItemVariants}
              whileHover={{ x: 4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              {IconComponent && <IconComponent className="h-5 w-5" />}
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      <motion.button
        onClick={handleLogout}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium"
      >
        <LogOut className="h-5 w-5" />
        <span>Keluar</span>
      </motion.button>
    </motion.div>
  );
}

export default Sidebar;
