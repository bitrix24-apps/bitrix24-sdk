import PostMessageClient from "./sendMessage";

export interface Config {
  APP_OPTIONS?: any;
  APP_SID?: string;
  AUTH_EXPIRES?: string;
  AUTH_ID?: string;
  DOMAIN?: string;
  FIRST_RUN?: boolean;
  INSTALL?: any;
  IS_ADMIN?: boolean;
  LANG?: string;
  MEMBER_ID?: string;
  PATH?: string;
  PLACEMENT_OPTIONS?: any;
  PLACEMENT?: string;
  PROTOCOL?: number;
  REFRESH_ID?: string;
  USER_OPTIONS?: any;
}
class Bitrix24SDK {
  private postMessageClient: PostMessageClient;
  config: Config;
  authData: any;

  constructor(
    private currentWindow: Window = window,
    private parentWindow: Window = window.parent
  ) {
    const [DOMAIN, PROTOCOL, APP_SID] = currentWindow.name.split("|");
    this.config = {
      DOMAIN,
      PROTOCOL: Number(PROTOCOL),
      APP_SID,
    };
    this.postMessageClient = new PostMessageClient(
      this.currentWindow,
      this.parentWindow,
      this.config
    );
  }

  async auth() {
    if (this.authData.expiresAt > Date.now()) {
      return this.config;
    } else {
      return this.postMessageClient
        .sendMessage("getInitData")
        .then((data: Config) => {
          this.config = { ...this.config, ...data };
          this.authData = {
            expiresAt: Date.now().valueOf() + +data.AUTH_EXPIRES * 1000,
          };
          return this.config;
        });
    }
  }
}

export default Bitrix24SDK;
