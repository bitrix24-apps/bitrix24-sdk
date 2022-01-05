import PostMessageClient from "./sendMessage";
import { PostMessageCommand } from "./postMessage";
import { AppConfig } from "./bitrix";

const getExpirationDateInMS = (expiryPeriod: string) =>
  Date.now().valueOf() + Number(expiryPeriod || 0) * 1000;

class Bitrix24SDK {
  private postMessageClient: PostMessageClient;
  config: AppConfig;

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
    if (this.config.AUTH_EXPIRES_AT > Date.now()) {
      return this.config;
    } else {
      return this.postMessageClient
        .sendMessage(PostMessageCommand.getInitData)
        .then((data) => {
          this.config = {
            ...this.config,
            ...data,
            AUTH_EXPIRES_AT: getExpirationDateInMS(data.AUTH_EXPIRES),
          };

          return this.config;
        });
    }
  }

  async refreshAuth() {
    return this.postMessageClient
      .sendMessage(PostMessageCommand.refreshAuth)
      .then((data) => {
        this.config = {
          ...this.config,
          ...data,
          AUTH_EXPIRES_AT: getExpirationDateInMS(data.AUTH_EXPIRES),
        };
        return this.config;
      });
  }

  getLang() {
    return this.config.LANG;
  }

  isAdmin() {
    return Boolean(this.config.IS_ADMIN);
  }

  getDomain() {
    return this.config.DOMAIN;
  }
}

export default Bitrix24SDK;
