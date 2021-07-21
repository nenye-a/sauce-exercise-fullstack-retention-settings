export function round(num, digits = 0) {
  return Number(num.toFixed(digits));
}

export function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
