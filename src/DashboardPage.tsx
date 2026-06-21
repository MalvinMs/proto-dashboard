// Empty import is intentional to maintain component structure export
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  LineChart,
  Megaphone,
  FileText,
  LogOut,
  Bell,
  ChevronDown,
  MoreVertical,
  ExternalLink,
  Star,
  Sun,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

// --- Mock Data ---
const salesData = [
  { name: "10 April", value: 2300 },
  { name: "11 April", value: 3000 },
  { name: "11 April", value: 1900 },
  { name: "12 April", value: 2800 },
  { name: "12 April", value: 3800 },
  { name: "13 April", value: 3000 },
  { name: "13 April", value: 3500 },
  { name: "14 April", value: 3100 },
  { name: "14 April", value: 2500 },
  { name: "15 April", value: 2000 },
  { name: "15 April", value: 3500 },
];

const goalsData = [
  { name: "Achieved", value: 65, fill: "#3b82f6" },
  { name: "Remaining", value: 35, fill: "#e5e7eb" },
];

const reviews = [
  {
    id: 1,
    name: "Kevin S",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    comment:
      '"Super fast shipping and very secure packaging! The Furycube G11 mouse I ordered works perfectly."',
    time: "5 minutes ago",
  },
  {
    id: 2,
    name: "Rina T",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    comment: "",
    time: "10 minutes ago",
  },
];

const heatmapData = [
  { name: "Laptop", data: [1, 1, 2, 1, 1, 2, 1] },
  { name: "Monitor", data: [1, 1, 2, 1, 3, 3, 3] },
  { name: "Audio", data: [1, 2, 3, 2, 3, 3, 3] },
  { name: "Sound", data: [1, 2, 2, 3, 3, 2, 2] },
  { name: "keyboard", data: [1, 3, 3, 2, 2, 1, 3] },
  { name: "Mouse", data: [2, 2, 2, 3, 3, 2, 1] },
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// --- Sub-Components ---
const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", active: true },
    { icon: ShoppingBag, label: "Orders" },
    { icon: Package, label: "Products" },
    { icon: Users, label: "Customers" },
    { icon: LineChart, label: "Analytics" },
    { icon: Megaphone, label: "Marketing" },
    { icon: FileText, label: "Reports" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/login";
  };

  return (
    <div className="w-64 bg-white h-screen flex flex-col border-r border-gray-100 p-5 flex-shrink-0 font-sans">
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
        {menuItems.map((item, index) => (
          <a
            href="#"
            key={index}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${item.active ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium"
      >
        <LogOut className="h-5 w-5" />
        <span>Keluar</span>
      </button>
    </div>
  );
};

const Header = () => (
  <header className="flex justify-between items-center mb-8">
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
  </header>
);

const StatCard = ({ title, value, growth, icon: Icon, chartBars, valueClassName = "" }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
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
        <h3 className={`text-3xl font-bold text-gray-900 mb-2 ${valueClassName}`}>{value}</h3>
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
            {growth} <ChevronDown className="h-3 w-3 rotate-180" />
          </span>
          <span className="text-gray-500">From last month</span>
        </div>
      </div>
      <div className="flex items-end gap-1 h-12">
        {chartBars.map((height: string, idx: number) => (
          <div
            key={idx}
            style={{ height }}
            className={`w-2 rounded-sm ${idx >= chartBars.length - 3 ? "bg-blue-500" : "bg-gray-200"}`}
          />
        ))}
      </div>
    </div>
  </div>
);

const GoalsCard = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-3">
        <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
          <LayoutDashboard className="h-6 w-6" />
        </div>
        <span className="font-semibold text-gray-700">Monthly Goals</span>
      </div>
    </div>

    <div className="flex">
      <div className="flex flex-col gap-4 mt-4">
        <div>
          <p className="text-gray-500 text-sm mb-1">Target</p>
          <p className="font-currency font-bold text-xl text-gray-800">$250,000</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Achieved</p>
          <p className="font-currency font-bold text-xl text-gray-800">$155,000</p>
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
  </div>
);

const SalesAnalyticsChart = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 col-span-2">
    <div className="flex justify-between items-center mb-6">
      <h3 className="font-semibold text-lg text-gray-800">Sales Analytics</h3>
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
          data={salesData}
          margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
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
  </div>
);

const TopProductsWidget = () => {
  const getColorClass = (val: number) => {
    if (val === 3) return "bg-blue-600";
    if (val === 2) return "bg-blue-400";
    if (val === 1) return "bg-gray-200";
    return "bg-gray-100";
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
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
              )),
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
    </div>
  );
};

const BudgetUsageWidget = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
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
        TikTok Ads using 78% budget. Reallocate Meta Ads for estimated +18% ROI
        improvement this month.
      </p>
    </div>
  </div>
);

const CustomerReviewWidget = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <div className="flex justify-between items-center mb-6">
      <h3 className="font-semibold text-lg text-gray-800">Customer Review</h3>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm text-gray-600 font-medium bg-gray-50">
          Latest <ChevronDown className="h-4 w-4" />
        </button>
        <button className="p-1.5 border rounded-lg text-gray-400 hover:bg-gray-50">
          <ExternalLink className="h-5 w-5" />
        </button>
      </div>
    </div>

    <div className="space-y-6">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border-b border-gray-50 pb-4 last:border-0 last:pb-0"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                className="h-10 w-10 rounded-full bg-gray-200"
                alt={review.name}
              />
              <span className="font-bold text-gray-900">{review.name}</span>
            </div>
            <div className="flex text-yellow-400">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          {review.comment && (
            <p className="text-gray-600 text-sm leading-relaxed italic mb-3">
              {review.comment}
            </p>
          )}
          <p className="text-gray-400 text-xs font-medium">{review.time}</p>
        </div>
      ))}
      <div className="border-b border-gray-50 pb-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=9"
              className="h-10 w-10 rounded-full bg-gray-200"
              alt="Rina T"
            />
            <span className="font-bold text-gray-900">Rina T</span>
          </div>
          <div className="flex text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
        </div>
        <p className="text-gray-400 text-xs font-medium">10 minutes ago</p>
      </div>
    </div>
  </div>
);

const LowStockWidget = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <h3 className="font-semibold text-lg text-gray-800">Low Stock Alert</h3>
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
  </div>
);

// --- Dashboard Page Component ---
export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden antialiased">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <Header />

        <div className="grid grid-cols-3 gap-6">
          <StatCard
            title="Total Revenue"
            value="$48,295"
            growth="47%"
            icon={ShoppingBag}
            chartBars={["30%", "40%", "35%", "50%", "45%", "80%", "100%"]}
            valueClassName="font-currency"
          />
          <StatCard
            title="Total Orders"
            value="1,284"
            growth="47%"
            icon={Package}
            chartBars={["40%", "30%", "50%", "45%", "30%", "90%", "70%"]}
          />
          <GoalsCard />

          <SalesAnalyticsChart />
          <TopProductsWidget />

          <BudgetUsageWidget />
          <CustomerReviewWidget />
          <LowStockWidget />
        </div>
      </main>
    </div>
  );
}
