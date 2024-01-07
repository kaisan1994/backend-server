import { drawWinner, getHistoryDraw, subscribeLottery } from 'controllers/lottery';
import { Router } from 'express';
import { reply } from 'middleware';

const router = Router();

router.post('/subscribe', reply(subscribeLottery));
router.get('/draw', reply(drawWinner));
router.get('/history', reply(getHistoryDraw));
router.get('/history/:id', reply(getHistoryDraw));

export default router;
