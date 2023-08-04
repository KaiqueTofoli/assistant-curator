const { createTables } = require("./helpers/handle-process");
async function main({
  dbConfig,
  assistantConfig,
  nluConfig,
  cosConfig,
  cloudantConfig,
}) {
  await createTables(
    dbConfig.connStr,
    dbConfig.primaryTableName,
    dbConfig.secondaryTableName,
    dbConfig.tertiaryTableName,
    dbConfig.quaternaryTableName,
    dbConfig.quinaryTableName,
    dbConfig.deadline
  );

  return {
    dbConfig,
    cosConfig,
    cloudantConfig,
    assistantConfig,
    nluConfig,
  };
}

module.exports = {
  main,
};
