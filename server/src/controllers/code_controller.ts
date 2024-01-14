import { Request, Response } from "express"

export const runCode = (req: Request, res: Response) => {
    res.json({ ok: true });
}

export const getCode = (req: Request, res: Response) => {
    const codeId = req.params.codeId;
    res.json({ codeId });
}
