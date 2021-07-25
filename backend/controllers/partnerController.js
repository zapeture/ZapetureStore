import AsyncHandler from 'express-async-handler';
import Partners from '../models/partnerModel.js';

// @description Fetch all partners
// @route GET /api/partners
// @access Public
const getPartners = AsyncHandler(async (req, res) => {
  const partners = await Partners.find({});
  res.json(partners);
});

export default getPartners;
