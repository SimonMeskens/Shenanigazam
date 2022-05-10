// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

onEvent("recipes", (event) => {
  // Change recipes here
});

// Stop endermen griefing
onEvent("block.tags", (event) => {
  event.removeAll("minecraft:enderman_holdable");
});
