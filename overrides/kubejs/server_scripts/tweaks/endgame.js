onEvent("recipes", (event) => {
  event.remove({ id: "blazegear:brimsteel_ingot" });
  event.shapeless("blazegear:brimsteel_ingot", [
    "minecraft:iron_ingot",
    "forbidden_arcanus:smelter_prism",
    "minecraft:ghast_tear",
  ]);

  event.remove({ id: "gobber2:gobber2_ingot" });
  event.shapeless("3x gobber2:gobber2_ingot", [
    "gobber2:gobber2_glob",
    "#forge:gems/mana_diamond",
    "#forge:ingots/obsidian",
    "#forge:ingots/silver",
  ]);
  event.remove({ id: "gobber2:gobber2_ingot_nether" });
  event.shapeless("3x gobber2:gobber2_ingot_nether", [
    "gobber2:gobber2_glob_nether",
    "gobber2:gobber2_ingot",
    "minecraft:netherite_scrap",
    "#forge:ingots/terrasteel",
  ]);
  event.remove({ id: "gobber2:gobber2_ingot_end" });
  event.shapeless("3x gobber2:gobber2_ingot_end", [
    "gobber2:gobber2_glob_end",
    "gobber2:gobber2_ingot_nether",
    "gobber2:gobber2_ingot_nether",
    "ars_nouveau:end_fiber",
    "botania:life_essence",
  ]);

  registerUpgradedNetheriteIngot("corrupt", "wicked", "forbidden_arcanus:dark_nether_star");
  registerUpgradedNetheriteIngot("ender", "eldritch", "forbidden_arcanus:silver_dragon_scale");
  registerUpgradedNetheriteIngot("feather", "aerial", "forbidden_arcanus:golden_feather");
  registerUpgradedNetheriteIngot("fire", "infernal", "forbidden_arcanus:smelter_prism");
  registerUpgradedNetheriteIngot("gold", "earthen", "forbidden_arcanus:golden_dragon_scale");
  registerUpgradedNetheriteIngot("phantom", "sacred", "reliquary:angelic_feather");
  registerUpgradedNetheriteIngot("poison", "arcane", "occultism:soul_gem");
  registerUpgradedNetheriteIngot("water", "aqueous", "forbidden_arcanus:aquatic_dragon_scale");
  registerUpgradedNetheriteIngot("wither", "wicked", "forbidden_arcanus:obsidian_skull");

  function registerUpgradedNetheriteIngot(type, spirits, catalyst) {
    event.remove({ id: "upgradednetherite:" + type + "_upgraded_netherite_ingot" });
    event.custom({
      type: "malum:spirit_infusion",
      input: { item: "minecraft:netherite_ingot", count: 1 },
      output: { item: "upgradednetherite:" + type + "_upgraded_netherite_ingot", count: 1 },
      extra_items: [
        { item: "botania:life_essence", count: 1 },
        { item: "ars_nouveau:end_fiber", count: 1 },
        { item: "rootsclassic:charged_runic_focus", count: 1 },
        { item: catalyst, count: 1 },
      ],
      spirits: [{ type: spirits, count: 20 }],
    });
  }
});
