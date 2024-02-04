import Docker from 'dockerode';
const docker = new Docker();

export const getDockerImage = (lang: string): string => {
    let image = "";

    switch(lang) {
        case "cpp":
            image = "gcc"
            break;
        case "python":
            image = "python"
            break;
        case "js":
            image = "node"
            break;
    }

    return image;
}

export const getExecutionCommand = (lang: string, code: string) => {
    let cmd;
  
    switch (lang) {
      case 'cpp':
        cmd = ['bash', '-c', `echo "${code}" > myapp.cpp && g++ -o myapp myapp.cpp && ./myapp`];
        break;
      case "js":
        cmd = ["node", "-e", code];
        break;
      default:
        throw new Error(`unsupprted language: ${lang}`);
    }
  
    return cmd;
}

export const createDockerContainer = async (lang: string, code: string) => {
    const containerConfig = {
        Image: getDockerImage(lang),
        Cmd: getExecutionCommand(lang, code),
        Tty: true
    }

    const conatiner = await docker.createContainer(containerConfig);
    return conatiner;
}

export const executeUserCodeInContainer = async(code: string, language: string) => {
    return new Promise(async (resolve, reject) => {
      console.log("executing code");
      const container = await createDockerContainer(language, code);
      await container.start();
  
      const tle = setTimeout(async () => {
        console.log("sending a tle")
        resolve({result: "Time Limit Exceed!! 😔 \n \n - Optimize your code \n - Avoid infinite loops", sucess: false});
        await container.stop();
      }, 2000);
  
      const containerExitStatus = await container.wait(); // wait for container to exit
  
      const logs = await container.logs({ stdout: true, stderr: true });
  
      if (containerExitStatus.StatusCode === 0) {
        resolve({ result: logs.toString(), sucess: true });
        clearTimeout(tle);
        await container.remove();
      } else {
        resolve({ result: logs.toString(), sucess: false });
        clearTimeout(tle);
        await container.remove();
      }
    });
}
