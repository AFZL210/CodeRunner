import express from 'express';
const router = express.Router();
import { getCode, runCode, saveCode } from '../controllers/code_controller';

router.get('/getcode/:codeId', getCode);
router.post('/runcode', runCode);
router.post('/savecode', saveCode);

export default router;
