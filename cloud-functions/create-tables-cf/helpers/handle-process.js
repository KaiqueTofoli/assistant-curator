const {
  connect,
  createPrimaryTable,
  deleteIfOlderThan,
  createSecondaryTable,
  createTertiaryTable,
  createQuaternaryTable,
  createQuinaryTable,
  endConnection,
} = require("../database/db2");

function createTables(
  connStr,
  primaryTableName,
  secondaryTableName,
  tertiaryTableName,
  quaternaryTableName,
  quinaryTableName,
  deadline
) {
  return new Promise(async (resolve, reject) => {
    try {
      const conn = await connect(connStr);
      let deadlineDate;
      if (deadline) {
        deadlineDate = generateDate(deadline);
        console.log(deadlineDate);
        await deleteIfOlderThan(conn, primaryTableName, deadlineDate);
      }
      await Promise.all([
        createPrimaryTable(conn, primaryTableName),
        createSecondaryTable(conn, secondaryTableName),
        createTertiaryTable(conn, tertiaryTableName),
        createQuaternaryTable(conn, quaternaryTableName),
        createQuinaryTable(conn, quinaryTableName),
      ]).then(endConnection(conn));

      resolve({ result: "success" });
    } catch (error) {
      reject(error);
    }
  });
}

function generateDate(deadline) {
  var d = new Date();
  d.setDate(d.getDate() - deadline);
  const formatedDate = d.toISOString().toString().split("T")[0];
  return formatedDate;
}

module.exports = {
  createTables,
};
