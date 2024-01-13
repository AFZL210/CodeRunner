import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.get("/me", (req: Request, res: Response) => {
    res.json({ data: "hi" }).status(200);
})

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})