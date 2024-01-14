export interface ThrowErrorI {
    statusCode: number
    message: string
    ok: boolean
    console?: string
    location?: string
}

export interface RunCodeI {
    lang: string
    code: string
}


export interface SaveCodeI extends RunCodeI {
    author: string
}
