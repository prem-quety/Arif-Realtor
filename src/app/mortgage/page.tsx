import MortgageCalculator from "@/app/mortgage/MortgageCalculator/MortgageCalculator";
import PremiumMortgageCalculator from "./PremiumMortgageCalculator/PremiumMortgageCalculator";

export default function MortgagePage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        Mortgage Calculator
      </h1>
      <PremiumMortgageCalculator />
    </main>
  );
}
