export const getDiscountPercentage = (price = 0, offerPrice = 0) => {
  return Math.round(((price - offerPrice) / price) * 100)
}
