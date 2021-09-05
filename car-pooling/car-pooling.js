/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let arr = [];

  for (let i = 0; i < trips.length; i++) {
    for (let j = trips[i][1]; j < trips[i][2]; j++) {
      arr[j] = (!arr[j] ? 0 : arr[j]) + trips[i][0];
    }
  }
  return arr.findIndex((value) => value > capacity) === -1;
};
