import rimraf from "rimraf";
import { exec } from "child_process";

export const deleteFolder = async (path: string) => {
    try {
        const done = await rimraf(path);
        return done;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

export const execute = (command: any) => {

    return new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                let status = { stdout: stdout, stderr: stderr };
                resolve(status);
            }
        })
    })

}