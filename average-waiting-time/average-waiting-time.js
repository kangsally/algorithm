/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  const [totalWaitingTime] = customers.reduce(
    (acc, value) => {
      const [arriveTime, preparingTime] = value;
      const [prevTotalWaitingTime, prevOverTime] = acc;
      const waitingTime = prevOverTime > arriveTime ? prevOverTime - arriveTime : 0;

      return [
        prevTotalWaitingTime + waitingTime + preparingTime,
        arriveTime + waitingTime + preparingTime,
      ];
    },
    [0, 0]
  );

  return totalWaitingTime / customers.length;
};