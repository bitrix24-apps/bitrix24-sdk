const path = require("path");
const fs = require("fs");
const https = require("https");

const target = "../src/original-bitrix24-api.js";

const fetchOriginalScript = async () => {
  const file = fs.createWriteStream(path.resolve(__dirname, target));
  https.get("https://api.bitrix24.com/api/v1/", (response) => {
    response.pipe(file);
  });
};

fetchOriginalScript();
