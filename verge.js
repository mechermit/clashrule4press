function main(config) {

  // 1. 添加 rule-provider
  config["rule-providers"] = config["rule-providers"] || {}

  config["rule-providers"]["press"] = {
    type: "http",
    behavior: "domain",
    url: "https://cdn.jsdelivr.net/gh/mechermit/clashrule4press@releases/press.txt",
    path: "./ruleset/press.yaml",
    interval: 86400
  }

  // 2. 在原有规则最前面插入
  config.rules = config.rules || []
  config.rules.unshift("RULE-SET,press,DIRECT")

  return config
}