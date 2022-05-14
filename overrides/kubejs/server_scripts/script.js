// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

onEvent("recipes", (event) => {
  // Banner bug
  event.remove({ id: "fruittrees:heart_banner_pattern" });
  event.remove({ id: "fruittrees:snowflake_banner_pattern" });
});

onEvent("block.tags", (event) => {
  // Stop endermen griefing
  event.removeAll("minecraft:enderman_holdable");
  event.add("minecraft:wither_immune", "minecraft:netherite_block");
});
