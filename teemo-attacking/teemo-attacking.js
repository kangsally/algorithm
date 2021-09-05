/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let count = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    const curr = timeSeries[i];
    const next = timeSeries[i + 1]
      ? timeSeries[i + 1]
      : timeSeries[i] + duration + 1;
    let runDuration = duration;
    if (curr + duration - 1 >= next) {
      runDuration = next - curr;
    }
    count += runDuration;
  }

  return count;
};
