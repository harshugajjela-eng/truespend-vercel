// /api/cards.js — returns user card metadata (demo)
const { json, allowCors } = require('./utils.js');

module.exports = (req, res) => {
  if (allowCors(req, res)) return;
  // In production: verify Authorization header and fetch from your DB
  const cards = [
    { brand: "Amex Gold", network: "Amex",
      categories: ["groceries","dining"],
      rules: [{ category: "groceries", multiplier: 4 },
              { category: "dining",    multiplier: 4 }] },
    { brand: "Chase Amazon Visa", network: "Visa",
      categories: ["amazon"],
      rules: [{ domain: "amazon\\.", multiplier: 5 }] },
    { brand: "Citi Custom Cash", network: "Mastercard",
      categories: ["gas","drugstores"],
      rules: [{ category: "gas", multiplier: 5 }] }
  ];
  json(res, 200, cards);
};
