function processData(response, timeframe) {
  return response.map(item => ({
    timeframe,
    title: item.title,
    data: item.timeframes[timeframe],
  }))
}

export { processData }
