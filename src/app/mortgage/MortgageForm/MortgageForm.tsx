"use client";
import { useState } from "react";

export default function MortgageForm({
  onCalculate,
}: {
  onCalculate: (data: any) => void;
}) {
  const [homeValue, setHomeValue] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(1.2);
  const [homeInsurance, setHomeInsurance] = useState(150);
  const [pmiRate, setPmiRate] = useState(0.5);
  const [hoa, setHoa] = useState(100);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const loanAmount = homeValue - downPayment;
    onCalculate({
      homeValue,
      downPayment,
      loanAmount,
      interestRate,
      loanTerm,
      propertyTax,
      homeInsurance,
      pmiRate,
      hoa,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg"
    >
      {[
        { label: "Home Value", value: homeValue, setter: setHomeValue },
        { label: "Down Payment", value: downPayment, setter: setDownPayment },
        {
          label: "Interest Rate (%)",
          value: interestRate,
          setter: setInterestRate,
        },
        { label: "Loan Term (years)", value: loanTerm, setter: setLoanTerm },
        {
          label: "Property Tax (% annual)",
          value: propertyTax,
          setter: setPropertyTax,
        },
        {
          label: "Home Insurance (monthly)",
          value: homeInsurance,
          setter: setHomeInsurance,
        },
        { label: "PMI Rate (% annual)", value: pmiRate, setter: setPmiRate },
        { label: "HOA Fees (monthly)", value: hoa, setter: setHoa },
      ].map((field, idx) => (
        <label
          key={idx}
          className="flex flex-col gap-1 text-sm font-medium text-gray-700"
        >
          {field.label}
          <input
            type="number"
            step="any"
            value={field.value}
            onChange={(e) => field.setter(+e.target.value)}
            className="border rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </label>
      ))}

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:bg-accent/90 transition"
        >
          Calculate
        </button>
      </div>
    </form>
  );
}
