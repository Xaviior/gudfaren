const mongoose = require("mongoose");
const cityPriceSchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  drugs: {
    molly: {
      name: { type: String, default: "Molly" },
      price: { type: Number, default: 10, min: 5, max: 28 },
      available: { type: Number, default: 100 },
    },
    snow: {
      name: { type: String, default: "Snow" },
      price: { type: Number, default: 38, min: 28, max: 78 },
      available: { type: Number, default: 500 },
    },
  },
});

// CITY PRICES
const amster = Math.floor(Math.random() * (28 - 5 + 1)) + 5;

// CRON JOB
const cronJob = require("node-cron");
const time = cronJob.schedule("*/10 * * * * *", async () => {
  await CityPrice.findOneAndUpdate(
    { cityName: "amster" },
    { $set: { price: amster } }
  )
    .then((r) => {
      console.log(r);
      console.log("new price");
    })
    .catch((e) => {
      console.log(e);
    });
  save();
});

const CityPrice = mongoose.model("CityPrice", cityPriceSchema);
module.exports = CityPrice;
