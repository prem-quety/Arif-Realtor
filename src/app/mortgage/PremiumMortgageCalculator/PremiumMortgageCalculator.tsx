"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Premium Mortgage Calculator — reference-style features
 * - Luxury theme (onyx/ivory/gold)
 * - Monthly vs Bi‑Weekly comparison
 * - PMI end date + payment after PMI
 * - Start month/year pickers
 * - Details and donut chart cards
 */
export default function PremiumMortgageCalculator() {
  // ---------- Inputs
  const [homeValue, setHomeValue] = useState(500000);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(4.25);
  const [loanTerm, setLoanTerm] = useState(30);
  const [startMonth, setStartMonth] = useState<number>(new Date().getMonth());
  const [startYear, setStartYear] = useState<number>(new Date().getFullYear());
  const [propertyTaxAnnual, setPropertyTaxAnnual] = useState(2400);
  const [pmiRate, setPmiRate] = useState(1.0);
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState(1000);
  const [hoaMonthly, setHoaMonthly] = useState(0);

  const loanAmount = Math.max(0, homeValue - downPayment);

  const core = useMemo(
    () =>
      calculateMortgage({
        loanAmount,
        interestRate,
        loanTerm,
        propertyTax: (propertyTaxAnnual / loanAmount) * 100 || 0, // convert dollars->percent of loan for original core fn
        homeInsurance: Number((homeInsuranceAnnual / 12).toFixed(2)),
        pmiRate,
        hoa: hoaMonthly,
      }),
    [
      loanAmount,
      interestRate,
      loanTerm,
      propertyTaxAnnual,
      homeInsuranceAnnual,
      pmiRate,
      hoaMonthly,
    ]
  );

  // ---------- PMI end date & after-PMI payment
  const pmiInfo = useMemo(() => {
    // PMI ends when balance <= 80% of home value (typical). Simulate monthly schedule on PI part only.
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const monthlyPI =
      r === 0
        ? loanAmount / n
        : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const threshold = homeValue * 0.8;
    let bal = loanAmount;
    let month = 0;
    while (month < n && bal > threshold) {
      const interestPay = bal * r;
      const principalPay = monthlyPI - interestPay;
      bal = Math.max(0, bal - principalPay);
      month++;
    }
    const startDate = new Date(startYear, startMonth, 1);
    const endDate = addMonths(startDate, month);
    const monthlyAfterPMI = Math.max(0, core.monthlyPayment - core.pmi);

    // total PMI paid until drop-off
    const monthlyPMI = core.pmi;
    const totalPMIUntil = monthlyPMI * month;

    return { monthIndex: month, date: endDate, monthlyAfterPMI, totalPMIUntil };
  }, [
    core.monthlyPayment,
    core.pmi,
    homeValue,
    interestRate,
    loanAmount,
    loanTerm,
    startMonth,
    startYear,
  ]);

  // ---------- Monthly vs Bi‑Weekly comparison (approx accelerated bi‑weekly)
  const biWeekly = useMemo(() => {
    const rBi = interestRate / 100 / 26; // periodic rate
    const halfMonthlyPI = core.extraBreakdown.principalAndInterest / 2; // accelerated method
    let bal = loanAmount;
    let periods = 0;
    let totalInterest = 0;
    while (bal > 0 && periods < loanTerm * 26 + 260) {
      // safety cap
      const interestPay = bal * rBi;
      totalInterest += interestPay;
      const principalPay = Math.max(0, halfMonthlyPI - interestPay);
      bal = Math.max(0, bal - principalPay);
      periods++;
    }
    const startDate = new Date(startYear, startMonth, 1);
    const payoffDate = addWeeks(startDate, periods);
    // Display bi‑weekly payment as half of monthly total (matches reference styling)
    const biWeeklyPaymentDisplay = core.monthlyPayment / 2;
    return {
      periods,
      payoffDate,
      totalInterest,
      paymentDisplay: biWeeklyPaymentDisplay,
    };
  }, [
    core.extraBreakdown.principalAndInterest,
    core.monthlyPayment,
    interestRate,
    loanAmount,
    loanTerm,
    startMonth,
    startYear,
  ]);

  const monthlyPayoffDate = useMemo(
    () => addMonths(new Date(startYear, startMonth, 1), loanTerm * 12),
    [loanTerm, startMonth, startYear]
  );

  // ---------- UI helpers
  const currency = (n: number) =>
    n.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-onyx to-onyx/95 text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:py-14">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6"
        >
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
            Mortgage Calculator
          </h1>
          <p className="mt-2 text-ivory/70">
            Premium UI, reference features, instant updates.
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Left — Inputs */}
          <div className="rounded-3xl bg-card/80 backdrop-blur-xl border border-ivory/10 shadow-2xl p-6 md:p-8">
            <h2 className="font-serif text-2xl mb-4">Loan Inputs</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Home Value"
                value={homeValue}
                onChange={setHomeValue}
                prefix="$"
                min={0}
              />
              <Field
                label="Down Payment"
                value={downPayment}
                onChange={setDownPayment}
                prefix="$"
                min={0}
              />
              <Field
                label="Loan Amount"
                value={loanAmount}
                readOnly
                prefix="$"
              />
              <Field
                label="Interest Rate"
                value={interestRate}
                onChange={setInterestRate}
                suffix="%"
                step={0.01}
                min={0}
              />
              <Field
                label="Loan Term"
                value={loanTerm}
                onChange={setLoanTerm}
                suffix="years"
                min={1}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-ivory/80">
                  Start Date
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <select
                    className="select"
                    value={startMonth}
                    onChange={(e) => setStartMonth(Number(e.target.value))}
                  >
                    {months.map((m, i) => (
                      <option key={m} value={i}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <input
                    className="input"
                    type="number"
                    value={startYear}
                    onChange={(e) => setStartYear(Number(e.target.value))}
                  />
                </div>
              </div>
              <Field
                label="Property Tax"
                value={propertyTaxAnnual}
                onChange={setPropertyTaxAnnual}
                prefix="$"
                suffix="/year"
                min={0}
              />
              <Field
                label="PMI"
                value={pmiRate}
                onChange={setPmiRate}
                suffix="%"
                step={0.01}
                min={0}
              />
              <Field
                label="Home Insurance"
                value={homeInsuranceAnnual}
                onChange={setHomeInsuranceAnnual}
                prefix="$"
                suffix="/year"
                min={0}
              />
              <Field
                label="Monthly HOA"
                value={hoaMonthly}
                onChange={setHoaMonthly}
                prefix="$"
                min={0}
              />
            </div>

            {/* Sliders (reference vibe) */}
            <div className="mt-6 grid gap-5">
              <Slider
                label="Down Payment"
                value={downPayment}
                onChange={setDownPayment}
                max={homeValue}
              />
              <Slider
                label="Interest Rate (%)"
                value={interestRate}
                onChange={setInterestRate}
                step={0.01}
                max={15}
              />
              <Slider
                label="PMI (%)"
                value={pmiRate}
                onChange={setPmiRate}
                step={0.01}
                max={5}
              />
            </div>
          </div>

          {/* Right — Summary & Chart */}
          <div className="rounded-3xl bg-card/80 backdrop-blur-xl border border-ivory/10 shadow-2xl p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-ivory/70 text-sm">
                  Your estimated monthly payment with PMI
                </div>
                <div className="font-serif text-5xl text-accent">
                  ${currency(core.monthlyPayment)}
                </div>
              </div>
            </div>

            <div className="mt-5 grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-sm">
                <Detail label="PMI" value={`$${currency(core.pmi)}`} />
                <Detail
                  label="Monthly Tax Paid"
                  value={`$${currency(propertyTaxAnnual / 12)}`}
                />
                <Detail
                  label="Monthly Home Insurance"
                  value={`$${currency(homeInsuranceAnnual / 12)}`}
                />
                <div className="h-px bg-ivory/10 my-3" />
                <Detail label="PMI End Date" value={fmtDate(pmiInfo.date)} />
                <Detail
                  label="Total PMI Payments"
                  value={String(pmiInfo.monthIndex)}
                />
                <Detail
                  label="Monthly Payment after PMI"
                  value={`$${currency(pmiInfo.monthlyAfterPMI)}`}
                  emphasise
                />
              </div>
              <div>
                <BreakdownChart result={core} />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <AmortizationTable schedule={core.amortizationSchedule} />
            </div>
          </div>
        </motion.section>

        {/* Bottom cards */}
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-card/80 backdrop-blur-xl border border-ivory/10 shadow-2xl p-6 md:p-8">
            <CardTitle icon="🏠" title="Mortgage Details" />
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <Detail label="Loan Amount" value={`$${currency(loanAmount)}`} />
              <Detail
                label="Down Payment"
                value={`$${currency(downPayment)} (${(
                  downPayment / homeValue || 0 * 100
                ).toFixed(2)}%)`}
              />
              <Detail
                label="Total Interest Paid"
                value={`$${currency(core.totalInterest)}`}
              />
              <Detail
                label={`Total PMI to ${months[pmiInfo.date.getMonth()].slice(
                  0,
                  3
                )}. ${pmiInfo.date.getFullYear()}`}
                value={`$${currency(pmiInfo.totalPMIUntil)}`}
              />

              <Detail
                label="Total Tax Paid"
                value={`$${currency(propertyTaxAnnual * loanTerm)}`}
              />
              <Detail
                label="Total Home Insurance"
                value={`$${currency(homeInsuranceAnnual * loanTerm)}`}
              />
            </div>
            <div className="mt-4 text-sm text-ivory/80">
              <div>
                Total of {loanTerm * 12} Payments:{" "}
                <span className="font-semibold">
                  ${currency(core.totalPayment)}
                </span>
              </div>
              <div>
                Loan pay‑off date:{" "}
                <span className="font-semibold">
                  {fmtDate(monthlyPayoffDate)}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-card/80 backdrop-blur-xl border border-ivory/10 shadow-2xl p-6 md:p-8">
            <CardTitle icon="⚖️" title="Monthly Vs Bi‑Weekly Payment" />
            <div className="grid grid-cols-2 gap-4">
              <MiniStat
                label="Monthly Payment"
                value={`$${currency(core.monthlyPayment)}`}
              />
              <MiniStat
                label="Bi‑weekly Payment"
                value={`$${currency(biWeekly.paymentDisplay)}`}
              />
              <MiniStat
                label="Monthly Pay‑off Date"
                value={fmtDate(monthlyPayoffDate)}
                subtle
              />
              <MiniStat
                label="Bi‑weekly Pay‑off Date"
                value={fmtDate(biWeekly.payoffDate)}
                subtle
              />
              <MiniStat
                label="Total Interest Paid (Monthly)"
                value={`$${currency(core.totalInterest)}`}
                subtle
              />
              <MiniStat
                label="Total Interest Paid (Bi‑weekly)"
                value={`$${currency(biWeekly.totalInterest)}`}
                subtle
              />
            </div>
            <div className="mt-4 text-center text-sm text-ivory/70">
              Total Interest Savings:{" "}
              <span className="font-semibold text-ivory">
                $
                {currency(
                  Math.max(0, core.totalInterest - biWeekly.totalInterest)
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Theme tokens */}
      <style jsx global>{`
        :root {
          --accent: #d4af37;
          --onyx: #0b0b0c;
          --ivory: #f8f7f4;
          --card: rgba(255, 255, 255, 0.04);
        }
        .bg-card {
          background: var(--card);
        }
        .text-accent {
          color: var(--accent);
        }
        .bg-accent {
          background: var(--accent);
        }
        .border-accent {
          border-color: var(--accent);
        }
        .input {
          @apply mt-2 w-full rounded-xl bg-ivory/80 text-onyx/90 border border-onyx/10 px-4 py-3 outline-none focus:ring-2 focus:ring-accent;
        }
        .select {
          @apply mt-2 w-full rounded-xl bg-ivory/80 text-onyx/90 border border-onyx/10 px-3 py-3 outline-none focus:ring-2 focus:ring-accent;
        }
        .range {
          @apply w-full accent-[var(--accent)];
        }
        .font-serif {
          font-family: "Playfair Display", ui-serif, Georgia, Cambria,
            "Times New Roman", Times, serif;
        }
        body {
          font-family: Inter, ui-sans-serif, system-ui;
        }
      `}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}

/* ---------- Small building blocks ---------- */
function Field({
  label,
  value,
  onChange,
  prefix,
  suffix,
  readOnly = false,
  step = "any",
  min,
}: any) {
  return (
    <label className="flex flex-col">
      <span className="text-sm font-medium text-ivory/80">{label}</span>
      <div className="mt-2 relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-onyx/60">
            {prefix}
          </span>
        )}
        <input
          className="input pl-10"
          type="number"
          step={step}
          min={min}
          value={value}
          onChange={(e) => onChange?.(Number(e.target.value))}
          readOnly={readOnly}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-onyx/60">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}
function Slider({ label, value, onChange, max = 100, step = 1 }: any) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-ivory/80">{label}</span>
        <span className="text-ivory/60">
          {typeof value === "number" ? value.toFixed(2) : value}
        </span>
      </div>
      <input
        type="range"
        className="range"
        value={value}
        min={0}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
function CardTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl">{icon}</span>
      <h3 className="font-serif text-2xl">{title}</h3>
    </div>
  );
}
function MiniStat({ label, value, subtle = false }: any) {
  return (
    <div className="rounded-2xl border border-ivory/10 p-4">
      <div
        className={`text-xs uppercase tracking-wide ${
          subtle ? "text-ivory/60" : "text-ivory/70"
        }`}
      >
        {label}
      </div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}
function Detail({ label, value, emphasise = false }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ivory/70">{label}</span>
      <span className={`font-semibold ${emphasise ? "text-accent" : ""}`}>
        {value}
      </span>
    </div>
  );
}

/* ---------- Chart ---------- */
function BreakdownChart({
  result,
}: {
  result: ReturnType<typeof calculateMortgage>;
}) {
  const {
    extraBreakdown: { principalAndInterest, propertyTax, insurance, pmi, hoa },
    monthlyPayment,
  } = result;
  const interest = Math.max(
    0,
    monthlyPayment - principalAndInterest - propertyTax - insurance - pmi - hoa
  );
  const data = {
    labels: ["Principal", "Interest", "Tax", "Insurance", "PMI", "HOA"],
    datasets: [
      {
        label: "Payment Breakdown",
        data: [
          principalAndInterest,
          interest,
          propertyTax,
          insurance,
          pmi,
          hoa,
        ],
        backgroundColor: [
          "#d4af37",
          "#1f2937",
          "#3b82f6",
          "#10b981",
          "#f97316",
          "#8b5cf6",
        ],
        borderWidth: 0,
      },
    ],
  };
  const options: any = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#f8f7f4", font: { family: "Inter", size: 12 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `${ctx.label}: $${ctx.raw?.toLocaleString()}`,
        },
      },
    },
  };
  return <Doughnut data={data} options={options} />;
}

/* ---------- Amortization Table ---------- */
function AmortizationTable({ schedule }: { schedule: any[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-xl px-4 py-2 bg-accent text-onyx font-semibold hover:bg-accent/90 transition"
      >
        {open ? "Hide Amortization Table" : "Show Amortization Table"}
      </button>
      {open && (
        <div className="mt-4 overflow-x-auto max-h-[420px] overflow-y-auto rounded-xl border border-ivory/10">
          <table className="min-w-full text-sm">
            <thead className="bg-ivory/5 sticky top-0 backdrop-blur z-10">
              <tr className="text-ivory/70">
                {["Month", "Payment", "Principal", "Interest", "Balance"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left border-b border-ivory/10 font-medium"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row: any) => (
                <tr key={row.month} className="hover:bg-ivory/[0.04]">
                  <td className="px-4 py-3 border-b border-ivory/10 text-ivory/80">
                    {row.month}
                  </td>
                  <td className="px-4 py-3 border-b border-ivory/10 text-ivory/90">
                    ${row.payment.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 border-b border-ivory/10 text-ivory/90">
                    ${row.principal.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 border-b border-ivory/10 text-ivory/90">
                    ${row.interest.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 border-b border-ivory/10 text-ivory/90">
                    ${row.balance.toFixed(2)}
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

/* ---------- Utils ---------- */
function addMonths(date: Date, monthsToAdd: number) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + monthsToAdd);
  return d;
}
function addWeeks(date: Date, weeksToAdd: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + weeksToAdd * 7);
  return d;
}
function fmtDate(d: Date) {
  return d.toLocaleString(undefined, { month: "short", year: "numeric" });
}

/* ---------- Core math (yours + extras) ---------- */
export function calculateMortgage({
  loanAmount,
  interestRate,
  loanTerm,
  propertyTax = 0, // percent of loan per year (internalized above)
  homeInsurance = 0, // monthly dollars
  pmiRate = 0,
  hoa = 0,
}: any) {
  const n = loanTerm * 12; // total months
  const r = interestRate / 100 / 12;

  const monthlyPI =
    r === 0
      ? loanAmount / n
      : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const monthlyPropertyTax = (loanAmount * (propertyTax / 100)) / 12;
  const monthlyPMI = (loanAmount * (pmiRate / 100)) / 12;

  const monthlyTotal =
    monthlyPI + monthlyPropertyTax + monthlyPMI + homeInsurance + hoa;
  const totalPayment = monthlyTotal * n;
  const totalInterest = monthlyPI * n - loanAmount;

  const firstInterest = loanAmount * r;
  const firstPrincipal = monthlyPI - firstInterest;

  let balance = loanAmount;
  const amortizationSchedule: any[] = [];
  for (let month = 1; month <= n; month++) {
    const interestPayment = balance * r;
    const principalPayment = monthlyPI - interestPayment;
    balance = Math.max(0, balance - principalPayment);
    amortizationSchedule.push({
      month,
      payment: parseFloat(monthlyPI.toFixed(2)),
      principal: parseFloat(principalPayment.toFixed(2)),
      interest: parseFloat(interestPayment.toFixed(2)),
      balance: parseFloat(balance.toFixed(2)),
    });
  }

  return {
    loanAmount,
    monthlyPayment: parseFloat(monthlyTotal.toFixed(2)),
    totalPayment: parseFloat(totalPayment.toFixed(2)),
    totalInterest: parseFloat(totalInterest.toFixed(2)),
    amortizationSchedule,
    principal: parseFloat(firstPrincipal.toFixed(2)),
    interest: parseFloat(firstInterest.toFixed(2)),
    taxes: parseFloat(monthlyPropertyTax.toFixed(2)),
    insurance: parseFloat(homeInsurance.toFixed(2)),
    pmi: parseFloat(monthlyPMI.toFixed(2)),
    hoa: parseFloat(hoa.toFixed(2)),
    extraBreakdown: {
      principalAndInterest: parseFloat(monthlyPI.toFixed(2)),
      propertyTax: parseFloat(monthlyPropertyTax.toFixed(2)),
      insurance: parseFloat(homeInsurance.toFixed(2)),
      pmi: parseFloat(monthlyPMI.toFixed(2)),
      hoa: parseFloat(hoa.toFixed(2)),
    },
  };
}
