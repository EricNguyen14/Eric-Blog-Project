export function formatStringAmount(value) {
  if (value > 0) {
    return (
      `+ ` +
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(value)
    );
  }

  if (value < 0) {
    let absValue = Math.abs(value);
    return (
      `- ` +
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(absValue)
    );
  }
}

export function calcTotalAmount(data) {
  let sum = 0;
  data.forEach((item) => {
    sum += item.amount;
  });
  return sum;
}
export function formatPercent(amount, total) {
  let percent = Math.ceil((amount / total) * 100);
  if (percent < 0) {
    percent = percent * -1;
  }
  return percent + "%";
}
