const fetch = require("node-fetch");
const state = require("./state");

module.exports = async (route, body = {}) => {
  body.botId = state.get("botId");
  let host = state.get("host");
  // console.log(body)
  let res = await fetch(host + route, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return res.json();
};
