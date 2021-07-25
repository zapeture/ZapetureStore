import express from 'express';
const router = express.Router();
import getPartners from '../controllers/partnerController.js';

router.route('/').get(getPartners);

export default router;
