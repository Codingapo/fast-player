import express from 'express';
import { episodesController } from '../controllers/episodesController.js';

const router = express.Router();

router.get('/:id', episodesController);

export default router;
