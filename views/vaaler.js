const cronJob = require("node-cron");
const test = cronJob.schedule("* * * * * *", () => {
  const precision = 100; // 2 decimals
  const priceVaaler =
    Math.floor(
      Math.random() * (100 * precision - 1 * precision) + 1 * precision
    ) /
    (1 * precision);
  console.log(priceVaaler);
  return priceVaaler;
});
