const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Capstone App Live!</h1><p>Running Version: 1.0.0</p>");
});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", version: "1.0.0" });
});
if (require.main === module) {
  app.listen(3000, () => console.log("App running on port 3000"));
}
module.exports = app;