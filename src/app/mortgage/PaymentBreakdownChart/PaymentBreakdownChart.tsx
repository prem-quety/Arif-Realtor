"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PaymentBreakdownChart({
  principal,
  interest,
  taxes,
  insurance,
  pmi,
  hoa,
}: {
  principal: number;
  interest: number;
  taxes: number;
  insurance: number;
  pmi: number;
  hoa: number;
}) {
  const data = {
    labels: ["Principal", "Interest", "Taxes", "Insurance", "PMI", "HOA"],
    datasets: [
      {
        label: "Payment Breakdown",
        data: [principal, interest, taxes, insurance, pmi, hoa],
        backgroundColor: [
          "#d4af37", // Principal - Gold
          "#1f2937", // Interest - Gray
          "#3b82f6", // Taxes - Blue
          "#10b981", // Insurance - Green
          "#f97316", // PMI - Orange
          "#8b5cf6", // HOA - Purple
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "#4b5563", // Tailwind gray-600
          font: {
            size: 14,
            family: "Inter",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || "";
            const value = context.raw?.toLocaleString() || "0";
            return `${label}: $${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Monthly Payment Breakdown
      </h3>
      <Doughnut data={data} options={options} />
    </div>
  );
}
