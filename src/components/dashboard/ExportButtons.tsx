import { motion } from "framer-motion";
import { DocumentArrowDownIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExportButtonsProps {
  onExportPDF?: () => void;
  onExportCSV?: () => void;
  className?: string;
}

export function ExportButtons({ onExportPDF, onExportCSV, className }: ExportButtonsProps) {
  const handlePDFExport = () => {
    // Simulate PDF export
    console.log("Exporting as PDF...");
    onExportPDF?.();
  };

  const handleCSVExport = () => {
    // Simulate CSV export
    console.log("Exporting as CSV...");
    onExportCSV?.();
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={handlePDFExport}
          className="bg-gradient-to-r from-red-500/10 to-pink-500/10 hover:from-red-500/20 hover:to-pink-500/20 border-red-200 dark:border-red-800"
        >
          <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
          Export PDF
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={handleCSVExport}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 border-green-200 dark:border-green-800"
        >
          <TableCellsIcon className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </motion.div>
    </div>
  );
}