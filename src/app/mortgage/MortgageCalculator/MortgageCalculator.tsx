"use client";
import { useState } from "react";
import MortgageForm from "../MortgageForm/MortgageForm";
import MortgageResults from "../MortgageResults/MortgageResults";
import { calculateMortgage } from "../../lib/calculateMortgage";

export default function MortgageCalculator() {
  const [result, setResult] = useState<any>(null);

  const handleCalculation = (formData: any) => {
    const calc = calculateMortgage(formData);
    setResult({ ...formData, ...calc });
  };

  return (
    <div className="max-w-6xl mx-auto grid gap-10">
      <MortgageForm onCalculate={handleCalculation} />
      {result && <MortgageResults result={result} />}
    </div>
  );
}
