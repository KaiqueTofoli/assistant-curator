const fs = require("fs");
const path = require("path");
const { getIntentsAndExamples } = require("./assistant");

const { createFolds } = require("./k-folds");

async function generateTrainingData(client, id, skillJSON) {
  let intents = await getIntentsAndExamples(client, id, [], null);

  if (skillJSON) {
    // Renaming intents with their respective action name for greater clarity.
    // Not mandatory, but helps a ton
    intents.forEach((intentObj) => {
      const foundAction = skillJSON.workspace.actions.find(
        (action) =>
          action.condition.intent === intentObj.intent ||
          action.condition?.intent?.and?.[0].intent === intentObj.intent ||
          action.condition?.intent?.and?.[1].intent === intentObj.intent
      );
      if (foundAction) {
        intentObj.intent = foundAction.title
          .replace(/ /g, "_")
          .replace(
            /[\!\?\:\/\[\]\\\(\)\*\&\ˆ\%\$\#\@∑œ´®†¥¨ˆøπ¬˚˙©ßåΩ≈√˜µ≤≥<>|,+=]/g,
            ""
          );
      }
    });
  }

  intents = intents.reduce(
    (examples, intent) => [
      ...examples,
      ...intent.examples.map((e) => ({
        input: { text: e.text },
        class: intent.intent,
      })),
    ],
    []
  );

  // Partitioning data into folds
  const folds = await createFolds(intents, 3);
  return folds;
}

module.exports = { generateTrainingData };
