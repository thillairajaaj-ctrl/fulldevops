const test = require("node:test"); const assert = require("node:assert");
const app = require("./app");
test("app exports express server", () => assert.ok(app));