const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function formatPrice(number) {
  return priceFormatter.format(number)
}

export { formatPrice }
