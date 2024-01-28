import express from 'express';
const router = express.Router();
import * as _ from '../controllers/campgrounds.controller.js';

/**
 * /campgrounds/all
 * /campgrounds/show/:id
 */

router.get('/all', _.all);
router.get('/show/:id', _.show);

export default router;
