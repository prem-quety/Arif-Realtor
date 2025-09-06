"use client";
import { useState } from "react";

export default function AmortizationTable({ schedule }: { schedule: any[] }) {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="mb-4 px-4 py-2 bg-accent text-white rounded hover:opacity-90 transition"
      >
        {show ? "Hide Amortization Table" : "Show Amortization Table"}
      </button>

      {show && (
        <div className="overflow-x-auto max-h-[400px] overflow-y-scroll border rounded">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                {["Month", "Payment", "Principal", "Interest", "Balance"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-2 border font-medium text-gray-700"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {schedule.map((item) => (
                <tr key={item.month} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{item.month}</td>
                  <td className="px-4 py-2 border">
                    ${item.payment.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 border">
                    ${item.principal.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 border">
                    ${item.interest.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 border">
                    ${item.balance.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
