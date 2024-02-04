import { Request, Response } from "express";
import { throwError } from "../lib/throwError";
import { RunCodeI } from "../lib/types";
import { isValidLang } from "../lib/helpers";
import * as cr from './code_runner';

export const runCode = async (req: Request, res: Response) => {
    try {
        const { code, lang }: RunCodeI = req.body;

        if (code.length === 0 || !isValidLang(lang)) {
            return res.json({ ok: false, data: "Invalid language or empty code" }).status(400);
        }

        console.log(code, lang);

        const output = await cr.executeUserCodeInContainer(code, lang);
        // @ts-ignore
        // console.log(output.result);

        res.json({ ok: true, data: output });
    } catch (error) {
        throwError(req, res, { ok: false, message: "Error occured, try again", statusCode: 400, console: `${(error as Error).message}`, location: "runCode()" });
    }
}

