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

onEvent("recipes.compostables", (event) => {
  event.add("minecraft:poisonous_potato", 0.85);
  event.add("druidcraftrg:hemp_seeds", 0.3);
  event.add("druidcraftrg:hemp", 0.65);
});

onEvent("item.tags", (event) => {
  // Remove obsidian shards from being an easy skip for obsidian dust
  event.remove("forge:dusts/obsidian", "morevanillalib:obsidian_shard");

  // Add seed tags
  event.add("forge:seeds", ["biomemakeover:rootling_seeds", "druidcraftrg:hemp_seeds", "farmersrespite:tea_seeds"]);
});

onEvent("block.tags", (event) => {
  // Stop endermen griefing
  event.removeAll("minecraft:enderman_holdable");

  // Make netherite blocks wither immune
  event.add("minecraft:wither_immune", "minecraft:netherite_block");
});

onEvent("entity_type.tags", (event) => {
  // Remove bosses from being quantum catchable
  event.add("forbidden_arcanus:quantum_catcher_blacklisted", [
    "blue_skies:summoner",
    "blue_skies:alchemist",
    "blue_skies:starlit_crusher",
    "blue_skies:arachnarch",

    "cataclysm:ender_golem",
    "cataclysm:ender_guardian",
    "cataclysm:ignis",
    "cataclysm:netherite_monstrosity",
  ]);
});
