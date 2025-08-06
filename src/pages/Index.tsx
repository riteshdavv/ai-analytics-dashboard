import { useState } from "react";
import { motion } from "framer-motion";
import {
  CurrencyDollarIcon,
  UsersIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { DataTable } from "@/components/dashboard/DataTable";
import { ExportButtons } from "@/components/dashboard/ExportButtons";
import { SkeletonCard, SkeletonChart, SkeletonTable } from "@/components/dashboard/SkeletonCard";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const metrics = [
    {
      title: "Total Revenue",
      value: "$847,210",
      icon: <CurrencyDollarIcon className="w-6 h-6" />,
      trend: { value: 12.5, isPositive: true },
      color: "primary" as const,
    },
    {
      title: "Active Users",
      value: "24,847",
      icon: <UsersIcon className="w-6 h-6" />,
      trend: { value: 8.2, isPositive: true },
      color: "success" as const,
    },
    {
      title: "Conversions",
      value: "3,294",
      icon: <ChartBarIcon className="w-6 h-6" />,
      trend: { value: 15.3, isPositive: true },
      color: "info" as const,
    },
    {
      title: "Growth Rate",
      value: "23.8%",
      icon: <ArrowTrendingUpIcon className="w-6 h-6" />,
      trend: { value: 5.1, isPositive: true },
      color: "warning" as const,
    },
  ];

  if (isLoading) {
    return (
      <DashboardLayout title="Analytics Dashboard">
        <div className="space-y-6">
          {/* Loading Skeleton Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>

          {/* Loading Skeleton Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2">
              <SkeletonChart />
            </div>
            <SkeletonChart />
            <SkeletonChart />
          </div>

          {/* Loading Skeleton Table */}
          <SkeletonTable />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Analytics Dashboard">
      <div className="space-y-6">
        {/* Header with Export Buttons */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
            <p className="text-muted-foreground">
              Monitor your business performance and key metrics
            </p>
          </div>
          <ExportButtons />
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MetricCard {...metric} />
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <DashboardCharts />

        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <DataTable />
        </motion.div>

        {/* Demo Loading Button */}
        <div className="flex justify-center pt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 3000);
            }}
            className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg shadow-card hover:shadow-elevated transition-all duration-300"
          >
            Demo Loading State
          </motion.button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
