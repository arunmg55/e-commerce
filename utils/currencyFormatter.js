export const currencyFormatter = (amount) => {
  return amount ? new Intl.NumberFormat('en-IN').format(amount) : 0
}
