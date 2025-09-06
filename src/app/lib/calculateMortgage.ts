export function calculateMortgage({
  loanAmount,
  interestRate,
  loanTerm,
  propertyTax = 0,
  homeInsurance = 0,
  pmiRate = 0,
  hoa = 0,
}: any) {
  const n = loanTerm * 12; // total months
  const r = interestRate / 100 / 12; // monthly interest rate

  const monthlyPrincipalInterest =
    (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  const monthlyPropertyTax = (loanAmount * (propertyTax / 100)) / 12;
  const monthlyPMI = (loanAmount * (pmiRate / 100)) / 12;

  const monthlyTotal =
    monthlyPrincipalInterest + monthlyPropertyTax + monthlyPMI + homeInsurance + hoa;

  const totalPayment = monthlyTotal * n;
  const totalInterest = monthlyPrincipalInterest * n - loanAmount;

  // First month split
  const firstInterest = loanAmount * r;
  const firstPrincipal = monthlyPrincipalInterest - firstInterest;

  let balance = loanAmount;
  const amortizationSchedule = [];

  for (let month = 1; month <= n; month++) {
    const interestPayment = balance * r;
    const principalPayment = monthlyPrincipalInterest - interestPayment;
    balance -= principalPayment;

    amortizationSchedule.push({
      month,
      payment: parseFloat(monthlyPrincipalInterest.toFixed(2)),
      principal: parseFloat(principalPayment.toFixed(2)),
      interest: parseFloat(interestPayment.toFixed(2)),
      balance: parseFloat(balance > 0 ? balance.toFixed(2) : "0"),
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
      principalAndInterest: parseFloat(monthlyPrincipalInterest.toFixed(2)),
      propertyTax: parseFloat(monthlyPropertyTax.toFixed(2)),
      insurance: parseFloat(homeInsurance.toFixed(2)),
      pmi: parseFloat(monthlyPMI.toFixed(2)),
      hoa: parseFloat(hoa.toFixed(2)),
    },
  };
}
