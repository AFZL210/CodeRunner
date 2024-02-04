import express from 'express';
const router = express.Router();
import { runCode } from '../controllers/code_controller';

router.post('/runcode', runCode);


export default router;
