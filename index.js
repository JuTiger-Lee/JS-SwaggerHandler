const express = require("express");
const app = express();
const ApiDcos = require("./docs/index");

function init() {
  const apiDocs = new ApiDcos();
  apiDocs.init();
  const { swaggerUI, specs, setUpOption } = apiDocs.getSwaggerOption();

  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs, setUpOption));
  app.get("/", (req, res) => res.send("Welcome Swagger Hanlder"));

  app.listen(3000, () => {
    console.log(`server start port 3000`);
  });
}

init();
