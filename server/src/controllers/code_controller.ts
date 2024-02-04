import { Request, Response } from "express";
import { db } from "../lib/db";
import { throwError } from "../lib/throwError";
import { RunCodeI, SaveCodeI } from "../lib/types";
import { isValidLang } from "../lib/helpers";

export const runCode = async (req: Request, res: Response) => {
    try {
        const { code, lang }: RunCodeI = req.body;

        if (code.length === 0 || !isValidLang(lang)) {
            return res.json({ ok: false, data: "Invalid language or empty code" }).status(400);
        }

        // TODO: idk how to run code in container. lol

        res.json({ ok: true, data: "210" });
    } catch (error) {
        throwError(req, res, { ok: false, message: "Error occured, try again", statusCode: 400, console: `${(error as Error).message}`, location: "runCode()" });
    }
}

