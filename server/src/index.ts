import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.SERVER_PORT || 5000;
import codeRoute from './routes/code_route';

app.use(express.json());

app.get("/me", (req: Request, res: Response) => {
    res.json({ data: "hi" }).status(200);
});

app.use('/api', codeRoute);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})