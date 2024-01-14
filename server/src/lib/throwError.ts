import { ThrowErrorI } from "./types"
import { Request, Response } from "express"

export const throwError = (req: Request, res: Response, data: ThrowErrorI): void => {
    if (data.location) {
        console.log(`ERROR in ${data.location}: ${data.console}`);
    }
    res.json({ ok: data.ok, data: `${data.message}` }).status(data.statusCode);
}