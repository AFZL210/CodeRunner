import express from 'express';
const router = express.Router();
import { getCode, runCode } from '../controllers/code_controller';

router.post('/runcode', runCode);
router.get('/getcode:codeId', getCode);

export default router;
