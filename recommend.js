// /api/recommend.js — suggest new cards based on recent domains (demo)
const { json, allowCors, parseBody } = require('./utils.js');

module.exports = async (req, res) => {
  if (allowCors(req, res)) return;
  if (req.method !== 'POST') return json(res, 405, { error: "Use POST" });
  const body = await parseBody(req);
  const domains = (body && body.domains) || [];
  const recs = [];
  if (domains.some(d => /costco\./i.test(d))) {
    recs.push({
      brand: "Citi Card",
      reason: "Frequent Costco visits — elevated rewards at wholesale clubs.",
      apply_url: "https://www.citi.com/credit-cards/",
      steps_url: "https://www.citi.com/credit-cards/",
      est_reward: "Up to 5%"
    });
  }
  json(res, 200, recs);
};
