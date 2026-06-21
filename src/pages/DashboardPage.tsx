import { Package, DollarSign } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Header } from "../components/layout/Header";
import { DashboardLayout } from "../layouts/DashboardLayout";
import {
  StatCard,
  GoalsCard,
  SalesAnalyticsChart,
  TopProductsWidget,
  BudgetUsageWidget,
  CustomerReviewWidget,
  LowStockWidget,
} from "../components/dashboard";
import {
  salesData,
  goalsData,
  heatmapData,
  days,
  reviews,
} from "../data/mockData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.96 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 220,
    },
  },
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Header />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants}>
          <StatCard
            title="Total Revenue"
            value="$48,295"
            growth="47%"
            icon={DollarSign}
            chartBars={["30%", "40%", "35%", "50%", "45%", "80%", "100%"]}
            valueClassName="font-currency"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            title="Total Orders"
            value="1,284"
            growth="47%"
            icon={Package}
            chartBars={["40%", "30%", "50%", "45%", "30%", "90%", "70%"]}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <GoalsCard goalsData={goalsData} />
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-2">
          <SalesAnalyticsChart data={salesData} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TopProductsWidget heatmapData={heatmapData} days={days} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <BudgetUsageWidget />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CustomerReviewWidget reviews={reviews} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <LowStockWidget />
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
