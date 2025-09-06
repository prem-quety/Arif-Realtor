import PaymentBreakdownChart from "../PaymentBreakdownChart/PaymentBreakdownChart";
import AmortizationTable from "../AmortizationTable/AmortizationTable";

export default function MortgageResults({ result }: { result: any }) {
  const {
    monthlyPayment,
    totalInterest,
    totalPayment,
    extraBreakdown,
    amortizationSchedule,
  } = result;

  const {
    principalAndInterest: principal,
    propertyTax: taxes,
    insurance,
    pmi,
    hoa,
  } = extraBreakdown || {};

  const interest = Number(
    monthlyPayment - principal - taxes - insurance - pmi - hoa
  );

  return (
    <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-2">
      {/* Summary Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between">
        <div className="mb-6">
          <div className="text-4xl font-extrabold text-accent tracking-tight">
            $
            {monthlyPayment.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </div>
          <div className="text-sm text-gray-600 font-medium mt-1">
            Estimated Monthly Payment
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-700">
          <div>
            <span className="font-semibold text-gray-800">Total Interest:</span>{" "}
            $
            {totalInterest.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </div>
          <div>
            <span className="font-semibold text-gray-800">Total Payment:</span>{" "}
            $
            {totalPayment.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </div>
        </div>

        <div className="mt-6 border-t pt-4">
          <h4 className="text-base font-semibold text-gray-800 mb-2">
            Monthly Breakdown
          </h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div>
              Principal: <strong>${principal.toLocaleString()}</strong>
            </div>
            <div>
              Interest: <strong>${interest.toLocaleString()}</strong>
            </div>
            <div>
              Taxes: <strong>${taxes.toLocaleString()}</strong>
            </div>
            <div>
              Insurance: <strong>${insurance.toLocaleString()}</strong>
            </div>
            <div>
              PMI: <strong>${pmi.toLocaleString()}</strong>
            </div>
            <div>
              HOA: <strong>${hoa.toLocaleString()}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <PaymentBreakdownChart
          principal={principal}
          interest={interest}
          taxes={taxes}
          insurance={insurance}
          pmi={pmi}
          hoa={hoa}
        />
      </div>

      {/* Full-width Amortization Table */}
      <div className="lg:col-span-2">
        <AmortizationTable schedule={amortizationSchedule} />
      </div>
    </div>
  );
}
