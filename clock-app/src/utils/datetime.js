function formatNumber(number) {
  return number < 10 ? `0${number}` : number
}

function getDatePeriod(currentHours) {
  if (currentHours >= 5 && currentHours < 12) {
    return 'morning'
  } else if (currentHours > 12 && currentHours < 18) {
    return 'afternoon'
  } else {
    return 'evening'
  }
}

export { formatNumber, getDatePeriod }
