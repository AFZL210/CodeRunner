import { Request, Response } from "express";
import { db } from "../lib/db";
import { throwError } from "../lib/throwError";

export const runCode = async (req: Request, res: Response) => {
    try {
        throw new Error("Umm test")
    } catch (error) {
        throwError(req, res, { ok: false, message: "Error occured, try again", statusCode: 400, console: `ERROR in runCode(): ${(error as Error).message}` })
    }
}

export const getCode = async (req: Request, res: Response) => {
    try {

    } catch (error) {
        throwError(req, res, { ok: false, message: "Error occured, try again", statusCode: 400, console: `ERROR in getCode(): ${(error as Error).message}` })
    }
}
