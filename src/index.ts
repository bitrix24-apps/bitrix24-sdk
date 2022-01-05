import PostMessageClient from "./sendMessage";

class Bitrix24SDK {
  private postMessageClient: PostMessageClient;
  config: AppConfig;
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
        .sendMessage({ command: PostMessageCommand.getInitData })
        .then((data) => {
          this.config = { ...this.config, ...data };
          this.authData = {
            expiresAt:
              Date.now().valueOf() + Number(data.AUTH_EXPIRES || 0) * 1000,
          };
          return this.config;
        });
    }
  }

  async refreshAuth() {
    sendMessage("refreshAuth", {}, function (p) {
      PARAMS.AUTH_ID = p.AUTH_ID;
      PARAMS.REFRESH_ID = p.REFRESH_ID;
      PARAMS.AUTH_EXPIRES = new Date().valueOf() + p.AUTH_EXPIRES * 1000;
      if (!!cb) {
        cb(BX24.getAuth());
      }
    });
  }
}

export default Bitrix24SDK;
