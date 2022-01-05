import { PARAMS } from "./settings";
import { uniqid } from "./utils";

class PostMessageClient {
  private resolvers: Record<string, Function>;
  private parentUrl: string = `http${PARAMS.PROTOCOL ? "s" : ""}://${
    PARAMS.DOMAIN
  }`;

  constructor(private currentWindow: Window, private parentWindow: Window) {
    this.currentWindow.addEventListener(
      "message",
      this.receiveMessage.bind(this)
    );
  }

  public sendMessage = async (cmd: string, params?: any) => {
    const paramsStr = params && JSON.stringify(params);
    const resolverId = uniqid();
    const promise = new Promise<any>((resolve) => {
      this.addResolver(resolverId, resolve);
    });

    const commandStr = [cmd, paramsStr, resolverId, PARAMS.APP_SID]
      .filter(Boolean)
      .join(":");

    this.parentWindow.postMessage(commandStr, this.parentUrl);

    return promise;
  };

  private addResolver = (id: string, resolver: Function) => {
    this.resolvers[id] = resolver;
  };

  private getResolver = (id: string) => {
    return this.resolvers[id];
  };

  private removeResolver = (id: string) => {
    delete this.resolvers[id];
  };

  private receiveMessage = (e: MessageEvent) => {
    if (e.origin === this.parentUrl && e.data) {
      const [resolverId, argsStr] = e.data.split(":");
      this.getResolver(resolverId).call(null, JSON.parse(argsStr));
      this.removeResolver(resolverId);
    }
  };
}

export default PostMessageClient;
