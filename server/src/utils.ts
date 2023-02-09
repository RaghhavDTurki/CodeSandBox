import { client } from './config/redis';

export const errorResponse = (code: number, message: string) => {
    return {
        status: "error",
        data: {},
        error: {
            code: code,
            message: message
        }
    }
}

export const successResponse = (data: string) => {
    return {
        status: "ok",
        data: data
    }
}

export const getFromRedis = async (key: string): Promise<any> => {
    // return a promise which resolves to the value of the key
    return new Promise((resolve, reject) => {
        client.get(key, (err, value) => {
            if (err) {
                reject(err);
            } else {
                resolve(value);
            }
        });
    });
}