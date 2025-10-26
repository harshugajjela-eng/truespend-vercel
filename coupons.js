// /api/coupons.js — returns verified coupons per domain (demo)
const { json, allowCors } = require('./utils.js');

module.exports = (req, res) => {
  if (allowCors(req, res)) return;
  const url = new URL(req.url, 'http://localhost');
  const domain = url.searchParams.get('domain') || '';
  let coupons = [];
  if (/amazon/i.test(domain)) {
    coupons = [{ code: "FIRST51", note: "Water purifier", expires: "2026-12-31" }];
  } else if (/doordash/i.test(domain)) {
    coupons = [{ code: "EAT15", note: "DoorDash promo", expires: "2026-06-01" }];
  }
  json(res, 200, coupons);
};
