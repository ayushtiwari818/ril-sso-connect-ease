import React from "react";
import { ChevronLeft } from "lucide-react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface TaskHeaderProps {
    title: string;
    onBack: () => void;
}

const data = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Interviews",
      data: [80, 55, 85, 55, 85, 25], // Example data
      backgroundColor: "#2A3AFF",
      borderRadius: 6,
      barPercentage: 0.6,
      categoryPercentage: 0.6,
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          if (value >= 100) return "1 Cr";
          if (value >= 75) return "75 L";
          if (value >= 50) return "50 L";
          if (value >= 25) return "25 L";
          return value;
        },
        color: "#B0B0B0",
        font: { size: 12 },
      },
      grid: { color: "#F0F0F0" },
    },
    x: {
      ticks: { color: "#B0B0B0", font: { size: 12 } },
      grid: { display: false },
    },
  },
};

export default function TaskHeader({ title, onBack }: TaskHeaderProps) {
    return (
        <div className="sticky top-0 z-10 bg-[#181f60] flex flex-col px-4 py-4 mb-2">
            <div className="flex items-center mb-2">
                <button onClick={onBack} className="mr-2 text-white font-bold text-lg">
                    <ChevronLeft size={24} />
                </button>
                <span className="font-semibold text-base text-white flex items-center">
                    {title}
                </span>
            </div>
        </div>
    );
} 
