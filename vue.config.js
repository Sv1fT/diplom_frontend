const { defineConfig } = require("@vue/cli-service");
const dotenv = require("dotenv");
const path = require("path");

let dotEnvFileName;

switch (process.env.BUILD_ENV) {
  case "local":
    dotEnvFileName = ".env.local";
    break;
  default:
    dotEnvFileName = ".env";
    break;
}

dotenv.config({ path: path.join(__dirname, dotEnvFileName) });

module.exports = defineConfig({
  transpileDependencies: true,
});
