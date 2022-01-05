import { v4 as uuidv4 } from "uuid";
import { Config } from ".";

class PostMessageClient {
  private resolvers: Record<string, Function> = {};
  private parentUrl: string;
  private appSId: string;

  constructor(private currentWindow: Window, private parentWindow: Window, { APP_SID, DOMAIN, PROTOCOL }: Config) {
    this.parentUrl = `http${PROTOCOL ? "s" : ""}://${DOMAIN}`;
    this.appSId = APP_SID;
    this.currentWindow.addEventListener(
      "message",
      this.receiveMessage.bind(this)
    );
  }

  public sendMessage = async (cmd: PostCommands, params?: any) => {
    const paramsStr = params && JSON.stringify(params);
    const resolverId = uuidv4();
    const promise = new Promise<any>((resolve) => {
      this.addResolver(resolverId, resolve);
    });

    const commandStr = [cmd, paramsStr, resolverId, this.appSId]
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
      const [resolverId, ...rest] = e.data.split(":");
      const args = rest.join(":");
      this.getResolver(resolverId).call(null, JSON.parse(args));
      this.removeResolver(resolverId);
    }
  };
}

export default PostMessageClient;
