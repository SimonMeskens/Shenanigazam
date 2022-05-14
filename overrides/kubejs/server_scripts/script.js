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

onEvent("item.tags", (event) => {
  // Remove obsidian shards from being an easy skip for obsidian dust
  event.remove("forge:dusts/obsidian", "morevanillalib:obsidian_shard");
});

onEvent("block.tags", (event) => {
  // Stop endermen griefing
  event.removeAll("minecraft:enderman_holdable");

  // Make netherite blocks wither immune
  event.add("minecraft:wither_immune", "minecraft:netherite_block");
});
